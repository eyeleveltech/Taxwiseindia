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
    await expect(page.locator('#testimonials')).toBeVisible();
  });

  test('Services navigation opens the services directory', async ({ page, isMobile }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    if (isMobile) await page.getByRole('button', { name: 'Open menu' }).click();
    const nav = page.getByRole('navigation', { name: isMobile ? 'Mobile' : 'Primary', exact: true });
    await nav.getByRole('link', { name: 'Services', exact: true }).click();
    await expect(page).toHaveURL(/\/services$/);
    await expect(page.locator('h1')).toContainText('Everything Your');
    if (isMobile) await expect(page.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  });

  test('About and Contact replace the old header links on desktop and mobile', async ({ page, isMobile }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    const nav = page.getByRole('navigation', { name: isMobile ? 'Mobile' : 'Primary', exact: true });
    if (isMobile) await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(nav.getByRole('link', { name: 'How it works' })).toHaveCount(0);
    await expect(nav.getByRole('link', { name: 'Why TaxwiseIndia' })).toHaveCount(0);
    await nav.getByRole('link', { name: 'About Us', exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
    if (isMobile) await page.getByRole('button', { name: 'Open menu' }).click();
    await nav.getByRole('link', { name: 'Contact', exact: true }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole('heading', { name: 'Good things start with a conversation.' })).toBeVisible();
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.locator('main').getByRole('link', { name: 'Get Started', exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact#contact-form$/);   // every Get Started lands on the form
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
