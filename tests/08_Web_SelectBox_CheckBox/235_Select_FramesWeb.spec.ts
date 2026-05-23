import{test,expect} from '@playwright/test';

test('Verify Dropdown',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await page.locator('#dropdown').click();
    //always selectoption should be used with locator below one is deprecated
    //await page.selectOption("#dropdown", "Option 1");
    await page.locator('#dropdown').selectOption('Option 1');
    await page.waitForTimeout(5000);

   

     
})