import {test,chromium} from '@playwright/test';

test('launch a browser with persistent context' , async({browser}) => {

const userDatadirtory = '/Users/deepak.ahlawat/CursorProjects/PLayWright_TypeScript/test-results/TempSessionStorage';
const context  = await chromium.launchPersistentContext(userDatadirtory)


const page = await browser.newPage();
await page.goto('https://www.cursor.com');


await browser.close();
 });