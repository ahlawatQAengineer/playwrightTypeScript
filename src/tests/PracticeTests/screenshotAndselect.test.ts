import {test} from '@playwright/test'

test('Check the screenshot' , async({browser}) =>{

    const context  = await browser.newContext();
    const page  = await context.newPage();

    await page.goto('https://www.cursor.com');




    });
