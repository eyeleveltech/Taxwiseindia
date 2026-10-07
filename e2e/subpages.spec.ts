import { test, expect } from '@playwright/test';

test.describe('Sub-pages & Interaction Tests', () => {
  test('Services page lists the seven services', async ({ page }) => {
    await page.goto('/services', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Services \| TaxwiseIndia/);
    const rows = page.locator('#catalog article h3');
    await expect(rows).toHaveCount(7);
    await expect(rows.first()).toContainText('Business Registration');
  });

  test('Services directory stays concise and opens the detailed service page', async ({ page, isMobile }) => {
    await page.goto('/services', { waitUntil: 'networkidle' });
    await expect(page.locator('#catalog article')).toHaveCount(7);
    await expect(page.locator('#catalog article a')).toHaveCount(7);
    await expect(page.locator('#catalog article ul')).toHaveCount(0);
    await expect(page.getByRole('navigation', { name: 'Service categories' })).toHaveCount(0);
    await expect(page.getByText('GST Registration', { exact: true })).toHaveCount(0);
    if (isMobile) await page.locator('#gst-tax a').tap();
    else await page.locator('#gst-tax a').click();
    await expect(page).toHaveURL(/\/services\/gst-tax$/, { timeout: 15000 });
    await expect(page.getByRole('navigation', { name: 'Breadcrumb' })).toHaveCount(0);
    await page.locator('#list').scrollIntoViewIfNeeded();   // rows rise in as the list arrives
    await expect(page.locator('#gst-registration')).toBeVisible();
  });

  test('The services orbit follows hover and focus while links remain navigable', async ({ page, isMobile }) => {
    await page.goto('/services', { waitUntil: 'networkidle' });
    const orbit = page.locator('[data-preview-service]');
    await expect(page.locator('[data-tile]')).toHaveCount(7);
    await expect(page.locator('main canvas')).toHaveCount(0);   // the 3D sculpture lives on the service pages
    const trademark = page.locator('#trademark-ip a');
    await expect(trademark).toBeVisible();   // rows fade in; an invisible link cannot take focus
    if (isMobile) await trademark.focus();
    else await trademark.hover();
    await expect(orbit).toHaveAttribute('data-preview-service', 'trademark-ip');
    await expect(page.locator('[data-tile="trademark-ip"]')).toHaveAttribute('data-active', '');
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const legal = page.locator('#legal-services a');
    await expect(legal).toBeVisible();
    await legal.focus();
    await expect(orbit).toHaveAttribute('data-preview-service', 'legal-services');
    await expect(page.locator('[data-tile="legal-services"]')).toHaveAttribute('data-active', '');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/\/services\/legal-services$/);
    await page.goBack({ waitUntil: 'networkidle' });
    await page.locator('[data-tile="compliance"]').click();   // orbit tiles open their service too
    await expect(page).toHaveURL(/\/services\/compliance$/);
  });

  test('Service page shows what the service covers and the other services', async ({ page }) => {
    await page.goto('/services/gst-tax', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/GST & Tax \| TaxwiseIndia/);
    await expect(page.locator('h1')).toHaveText('GST & Tax');
    await expect(page.locator('#gst-registration')).toBeVisible();
    await expect(page.locator('#more a[href^="/services/"]')).toHaveCount(6);
    const whatsappBtn = page.locator('main a[href*="wa.me"]').first();
    await expect(whatsappBtn).toBeVisible();
  });

  test('Service items are a plain list; a deep link marks its row', async ({ page }) => {
    await page.goto('/services/trademark-ip#trademark-renewal', { waitUntil: 'networkidle' });
    await expect(page.locator('#list li')).toHaveCount(7);
    await expect(page.locator('#trademark-renewal')).toHaveAttribute('data-target', '');
    await expect(page.locator('#trademark-search')).not.toHaveAttribute('data-target', '');
    // sub-services are names only — no links, buttons or pages of their own
    await expect(page.locator('#list ul a, #list ul button')).toHaveCount(0);   // (the aside beside the list holds the CTAs)
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(page.locator('h1')).toHaveText('Trademark & Intellectual Property');
    await expect(page.getByRole('navigation', { name: 'Breadcrumb' })).toHaveCount(0);
  });

  test('Service page shows its own 3D sculpture with keyboard rotation and no visible controls', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/services/trademark-ip', { waitUntil: 'networkidle' });
    const scene = page.locator('[data-scene-status="ready"]');
    await expect(scene).toBeVisible({ timeout: 15000 });
    await expect(scene.locator('canvas')).toHaveCount(1);
    await expect(page.getByRole('button', { name: /Rotate sculpture|hero animation/ })).toHaveCount(0);
    await scene.focus();
    const before = await scene.screenshot();
    await page.keyboard.press('ArrowRight');
    await expect.poll(async () => !(await scene.screenshot()).equals(before)).toBe(true);
    await expect(page.locator('#how li')).toHaveCount(4);
    await expect(page.locator('#more a[href^="/services/"]')).toHaveCount(6);
  });

  test('Service CTA selects the contact category and prepares a WhatsApp draft', async ({ page }) => {
    await page.addInitScript(() => { window.open = (url) => { document.documentElement.dataset.draftUrl = String(url); return null; }; });
    await page.goto('/services/trademark-ip', { waitUntil: 'networkidle' });
    await page.locator('main').getByRole('link', { name: 'Get Started', exact: true }).first().click();
    await expect(page).toHaveURL(/contact\?service=trademark-ip#contact-form$/);
    await expect(page.getByLabel("I'm interested in")).toHaveValue('trademark-ip');
    await expect(page.locator('select option')).toHaveCount(8);
    await page.getByLabel('Your name').fill('Test User');
    await page.getByLabel('Phone number').fill('+91 99999 88888');
    await page.getByRole('button', { name: 'Continue in WhatsApp' }).click();
    await expect(page.getByRole('status')).toContainText('Your message is ready.');
    await expect(page.getByRole('status')).toContainText('press Send');
    const draft = await page.locator('html').getAttribute('data-draft-url');
    expect(decodeURIComponent(draft ?? '')).toContain('Trademark & Intellectual Property');
    await page.getByRole('button', { name: 'Edit your details' }).click();
    await expect(page.getByLabel('Your name')).toHaveValue('Test User');
  });

  test('Old service routes redirect into the service pages', async ({ page }) => {
    await page.goto('/payroll', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/\/services\/accounting-payroll#payroll$/);
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

  test('About Us page explains the approach and links to contact', async ({ page }) => {
    await page.goto('/about', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/About Us | TaxwiseIndia/);
    await expect(page.getByRole('heading', { name: 'Clarity, from the start.' })).toBeVisible();
    await expect(page.locator('main').getByRole('link', { name: 'Get Started', exact: true }).first()).toHaveAttribute('href', '/contact#contact-form');
    await expect(page.locator('main a[href^="/services/"]')).toHaveCount(7);   // the services index at the end of the page
  });
});
