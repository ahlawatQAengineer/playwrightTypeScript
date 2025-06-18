

import { test } from '@playwright/test';

test('launch YouTube in browser', async ({ browser }) => {
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com');
  // Add assertions or actions here
});






