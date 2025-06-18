export const URLS = {
    BASE_URL: 'https://www.automationexercise.com',
    PRODUCTS_PAGE: '/products',
    CART_PAGE: '/view_cart',
    LOGIN_PAGE: '/login',
    SIGNUP_PAGE: '/signup'
};

export const PRODUCTS_PAGE_LOCATORS = {
    PRODUCT_LIST: '.features_items',
    PRODUCT_CARD: '.single-products',
    ADD_TO_CART_BUTTON: '.add-to-cart',
    VIEW_CART_BUTTON: 'a[href="/view_cart"]',
    CONTINUE_SHOPPING_BUTTON: '.btn-success',
    PRODUCT_NAME: 'p',
    PRODUCT_PRICE: 'h2',
    PRODUCT_IMAGE: 'img',
    CATEGORY_TITLE: '.title',
    BRANDS_SECTION: '.brands-name',
    SEARCH_INPUT: '#search_product',
    SEARCH_BUTTON: '#submit_search'
};

export const NAVIGATION_LOCATORS = {
    HOME_LINK: 'a[href="/"]',
    PRODUCTS_LINK: 'a[href="/products"]',
    CART_LINK: 'a[href="/view_cart"]',
    LOGIN_LINK: 'a[href="/login"]',
    SIGNUP_LINK: 'a[href="/signup"]',
    LOGOUT_LINK: 'a[href="/logout"]'
}; 