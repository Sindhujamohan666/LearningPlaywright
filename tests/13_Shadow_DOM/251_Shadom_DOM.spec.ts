import{test,expect} from '@playwright/test';
const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

test.describe('Shadow Handling',()=>{
   
    test.beforeEach(async({page})=>{
        await page.goto(URL);
    });
    test('Locate Shadow DOM and assert text',async({page})=>{

    });
});