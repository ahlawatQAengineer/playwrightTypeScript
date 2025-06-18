import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(path: string) {
        await this.page.goto(path);
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }

    async click(selector: string) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    async type(selector: string, text: string) {
        await this.waitForElement(selector);
        await this.page.fill(selector, text);
    }

    async getText(selector: string): Promise<string> {
        await this.waitForElement(selector);
        return await this.page.textContent(selector) || '';
    }

    async isVisible(selector: string): Promise<boolean> {
        return await this.page.isVisible(selector);
    }
} 