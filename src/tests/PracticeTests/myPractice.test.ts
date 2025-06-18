import {test,expect} from '@playwright/test'
import {ProductsPage} from '../../pages/products/ProductsPage'

test.describe('Practice Tests', () =>{
    let myProductPage : ProductsPage;

    test.beforeEach(async ({page}) =>{

        myProductPage = new ProductsPage(page);
        await myProductPage.navigateToProducts();

    });


    test('Display the list', async() =>{
        const productCount  = await myProductPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);

    });



    test('Add to cart', async() =>{
        await myProductPage.addProductToCart();

        const viewCartButton = await myProductPage.isVisible('a[href="/view_cart"]');
        expect(viewCartButton).toBeTruthy();
    });


});
