import {test} from '@playwright/test'


test('element interaction test', async ({browser}) =>{




  const context  = await  browser.newContext();
  const page  = await  context.newPage();



    await page.goto('https://www.cursor.com');
    //await page.locator('text = "Sign in"').click();

    await page.getByRole('button', { name: 'Sign in' }).click();

    //await page.locator('span:has-text("Sign in")').click();
    //          OR
    // await page.locator('a.text-sm\\/\\[1\\.125rem\\] > span:nth-child(1)').click();
    await page.waitForSelector('input[name="email"]');
    await page.locator('input[name="email"]').fill("My Username");
    await page.waitForTimeout(2000);

   // await page.locator('//input[name = "email"]').fill("My Username");
   // await page.locator('//button[type = "submit"]').click();

    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(1000);




    await page.close();
    await context.close();
    await browser.close();



    });