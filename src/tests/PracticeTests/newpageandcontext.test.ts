import {test} from '@playwright/test'


test('Launching a new page and context' , async ({browser}) => {


    const context = await browser.newContext();
    const page = await context.newPage();

     // Print context and page info
      console.log('Context:', context.constructor.name);
      console.log('Page:', page.constructor.name);


    await page.goto('https://www.cursor.com');
    await browser.close();





    });