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

  test('Each of the seven services has its own place in the navigation', async ({ page, isMobile }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    if (isMobile) {
      await page.getByRole('button', { name: 'Open menu' }).click();
      const nav = page.getByRole('navigation', { name: 'Mobile', exact: true });
      await expect(nav.locator('button[aria-expanded]')).toHaveCount(7);
      await nav.getByRole('button', { name: 'GST & Tax', exact: true }).click();
      await nav.getByRole('link', { name: 'All GST & Tax services' }).click();
    } else {
      const nav = page.getByRole('navigation', { name: 'Primary', exact: true });
      await expect(nav.getByRole('link', { name: 'Services', exact: true })).toHaveCount(0);   // one entry per service instead
      await expect(nav.locator(':scope > ul > li > a')).toHaveCount(7);
      await nav.getByRole('link', { name: 'GST & Tax', exact: true }).click();
    }
    await expect(page).toHaveURL(/\/services\/gst-tax$/);
    await expect(page.locator('h1')).toHaveText('GST & Tax');
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

  test('Each service opens its own dropdown on hover or focus', async ({ page, isMobile }) => {
    test.skip(isMobile, 'the dropdowns are a desktop menu');
    await page.goto('/', { waitUntil: 'networkidle' });
    await expect(page.locator('[data-menu-panel] a[href^="/services/"]')).toHaveCount(46 + 7);
    const nav = page.getByRole('navigation', { name: 'Primary', exact: true });
    const gst = page.locator('#menu-gst-tax');

    // keyboard: focus opens it, Escape closes it
    await nav.getByRole('link', { name: 'Compliance', exact: true }).focus();
    await expect(page.locator('#menu-compliance').getByRole('link')).toHaveCount(7 + 1);
    await page.keyboard.press('Escape');
    await expect(page.locator('#menu-compliance').getByRole('link')).toHaveCount(0);

    // hover: one dropdown at a time
    await nav.getByRole('link', { name: 'GST & Tax', exact: true }).hover();
    await expect(gst.getByRole('link')).toHaveCount(7 + 1);
    await nav.getByRole('link', { name: 'Legal', exact: true }).hover();
    await expect(gst.getByRole('link')).toHaveCount(0);
    await nav.getByRole('link', { name: 'GST & Tax', exact: true }).hover();
    await gst.getByRole('link', { name: 'GST Registration', exact: true }).click();
    await expect(page).toHaveURL(/\/services\/gst-tax\/gst-registration$/);
    await expect(page.locator('h1')).toHaveText('GST Registration');
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
