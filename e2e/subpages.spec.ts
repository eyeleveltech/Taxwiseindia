import { test, expect } from '@playwright/test';

test.describe('Sub-pages & Interaction Tests', () => {
  test('Services catalog page loads and displays all service offerings', async ({ page }) => {
    await page.goto('/services', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/All Services | TaxwiseIndia/);
    
    // Check that service cards exist
    const cards = page.locator('article');
    await expect(cards).toHaveCount(8);
  });

  test('Service detail page (/gst-services) renders deliverables and document checklists', async ({ page }) => {
    await page.goto('/gst-services', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/GST Registration/);

    // Deliverables list should have items
    const checkItems = page.locator('ul li');
    await expect(checkItems.first()).toBeVisible();

    // WhatsApp CTA button in main content should be visible on both desktop & mobile
    const whatsappBtn = page.locator('main a[href*="wa.me"]').first();
    await expect(whatsappBtn).toBeVisible();
  });

  test('Contact page loads with interactive form and validates input fields', async ({ page }) => {
    await page.goto('/contact', { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(/Contact Us | TaxwiseIndia/);

    // Form inputs exist
    const nameInput = page.locator('input[placeholder*="Rahul"]');
    const phoneInput = page.locator('input[type="tel"]');
    await expect(nameInput).toBeVisible();
    await expect(phoneInput).toBeVisible();

    // Fill inputs
    await nameInput.fill('Test User');
    await phoneInput.fill('+91 99999 88888');

    await expect(nameInput).toHaveValue('Test User');
    await expect(phoneInput).toHaveValue('+91 99999 88888');
  });

  test('About Us page loads and displays the three pillars', async ({ page }) => {
    await page.goto('/about', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/About Us | TaxwiseIndia/);
    await expect(page.locator('text=The Three Pillars')).toBeVisible();
  });
});
