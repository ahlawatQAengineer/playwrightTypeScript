import { test, expect } from '@playwright/test';
import { URLS } from '../../pages/constants/locators';

test.describe('Website Launch Tests', () => {
    test('should launch website successfully', async ({ page }) => {
        // Navigate to the website
        await page.goto(URLS.BASE_URL);

        // Verify the page title
        const title = await page.title();
        expect(title).toContain('Automation Exercise');

        // Verify the page is loaded
        await expect(page).toHaveURL(URLS.BASE_URL);

        // Verify main navigation elements are visible
        const mainElements = [
            'a[href="/"]',           // Home
            'a[href="/products"]',   // Products
            'a[href="/view_cart"]',  // Cart
            'a[href="/login"]'       // Login
        ];

        for (const selector of mainElements) {
            await expect(page.locator(selector)).toBeVisible();
        }
    });
}); 