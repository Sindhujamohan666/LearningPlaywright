import{test,expect} from '@playwright/test';

test('Verify Right click',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
     //fails without first() as there are 2 elements with same locator
    await page.locator('span.context-menu-one').first().click({button:'right'});//right click on the element
    //capturing all options
    //allInnerTexts--used for arraay of elements
    const alloptions:string[]=await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(alloptions);

     await page.getByText('Copy', { exact: true }).first().click();
    //await page.getByText('Copy', { exact: true }).click();

    await page.waitForTimeout(5000);
});