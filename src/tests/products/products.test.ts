import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/products/ProductsPage';

test.describe('Products Page Tests', () => {
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        productsPage = new ProductsPage(page);
        await productsPage.navigateToProducts();
    });

    test('should display products list', async () => {
        const productCount = await productsPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    test('should add product to cart', async () => {
        // Add first product to cart
        await productsPage.addProductToCart(0);
        
        // Verify "Added!" message appears
        const viewCartButton = await productsPage.isVisible('a[href="/view_cart"]');
        expect(viewCartButton).toBeTruthy();
    });

    test('should navigate to cart after adding product', async () => {
        // Add first product to cart
        await productsPage.addProductToCart(0);
        
        // Click view cart
        await productsPage.clickViewCart();
        
        // Verify URL contains view_cart
        await expect(productsPage.page).toHaveURL(/.*view_cart/);
    });

    test('should continue shopping after adding product', async () => {
        // Add first product to cart
        await productsPage.addProductToCart(0);
        
        // Click continue shopping
        await productsPage.clickContinueShopping();
        
        // Verify we're still on products page
        await expect(productsPage.page).toHaveURL(/.*products/);
    });
}); 