import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { URLS, PRODUCTS_PAGE_LOCATORS } from '../constants/locators';

export class ProductsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async navigateToProducts() {
        await this.navigate(URLS.PRODUCTS_PAGE);
    }

    async addProductToCart(productIndex: number) {
        const productCards = await this.page.$$(PRODUCTS_PAGE_LOCATORS.PRODUCT_CARD);
        if (productIndex < productCards.length) {
            await productCards[productIndex].hover();
            await productCards[productIndex].locator(PRODUCTS_PAGE_LOCATORS.ADD_TO_CART_BUTTON).click();
        }
    }

    async clickViewCart() {
        await this.click(PRODUCTS_PAGE_LOCATORS.VIEW_CART_BUTTON);
    }

    async clickContinueShopping() {
        await this.click(PRODUCTS_PAGE_LOCATORS.CONTINUE_SHOPPING_BUTTON);
    }

    async getProductCount(): Promise<number> {
        return await this.page.$$eval(PRODUCTS_PAGE_LOCATORS.PRODUCT_CARD, (elements) => elements.length);
    }

    async getProductName(productIndex: number): Promise<string> {
        const productCards = await this.page.$$(PRODUCTS_PAGE_LOCATORS.PRODUCT_CARD);
        if (productIndex < productCards.length) {
            return await productCards[productIndex].locator(PRODUCTS_PAGE_LOCATORS.PRODUCT_NAME).textContent() || '';
        }
        return '';
    }

    async searchProduct(searchTerm: string) {
        await this.type(PRODUCTS_PAGE_LOCATORS.SEARCH_INPUT, searchTerm);
        await this.click(PRODUCTS_PAGE_LOCATORS.SEARCH_BUTTON);
    }

    async getCategoryTitle(): Promise<string> {
        return await this.getText(PRODUCTS_PAGE_LOCATORS.CATEGORY_TITLE);
    }
} 