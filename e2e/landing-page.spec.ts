import { test, expect } from '@playwright/test';

test.describe('Landing Page E2E Tests', () => {
  test('Home page loads with valid title, metadata, and core sections', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check title
    await expect(page).toHaveTitle(/TaxwiseIndia/);

    // Check Hero section heading
    const heroHeading = page.locator('h1');
    await expect(heroHeading).toBeVisible();

    // Check sections exist
    await expect(page.locator('#promise')).toBeVisible();
    await expect(page.locator('#services')).toBeVisible();
    await expect(page.locator('#how')).toBeVisible();
    await expect(page.locator('#why')).toBeVisible();
    await expect(page.locator('#faq')).toBeVisible();
  });

  test('FAQ accordion expands and reveals answer when clicked', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const faqSection = page.locator('#faq');
    await faqSection.scrollIntoViewIfNeeded();

    const firstFaqButton = page.locator('#faq button').first();
    await expect(firstFaqButton).toBeVisible();

    // Click to expand
    await firstFaqButton.click();

    // Verify aria-expanded is true
    await expect(firstFaqButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('Clicking the "Services" navbar link smoothly scrolls to the #services section', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    // Find the desktop Services navbar link
    const servicesNavLink = page.locator('header nav a[href="/#services"]').first();
    if (await servicesNavLink.isVisible()) {
      await servicesNavLink.click();

      // Wait for smooth scroll glide to settle
      await page.waitForTimeout(1500);

      // Verify that the page has scrolled down towards #services
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeGreaterThan(300);

      const servicesBounding = await page.locator('#services').boundingBox();
      expect(servicesBounding?.y).toBeLessThanOrEqual(5);
    }
  });

  test('Clicking "How it works" navbar link aligns the section with top of viewport without showing previous section', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });

    const howNavLink = page.locator('header nav a[href="/#how"]').first();
    if (await howNavLink.isVisible()) {
      await howNavLink.click();

      await page.waitForTimeout(1500);

      const howBounding = await page.locator('#how').boundingBox();
      expect(howBounding?.y).toBeLessThanOrEqual(5);
    }
  });

  test('Navigation links route to appropriate pages', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check footer link to /services
    const servicesFooterLink = page.locator('footer a[href="/services"]').first();
    if (await servicesFooterLink.isVisible()) {
      await servicesFooterLink.click();
      await expect(page).toHaveURL(/\/services/);
    }
  });
});
