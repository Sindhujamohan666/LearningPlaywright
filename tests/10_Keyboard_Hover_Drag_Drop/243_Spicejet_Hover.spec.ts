import{test,expect} from '@playwright/test';
test('Keyboard Hover',async({page})=>{
    await page.goto('https://www.spicejet.com/');
    //Hover on Add ons and click on FlyEarly
    await page.getByText('Add-ons',{exact:true}).hover();
    await page.getByText('FlyEarly',{exact:true}).click();

   await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
   //Hove on Add-ons
   await page.getByText('Add-ons',{exact:true}).hover();
   const addonList=await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item')
        .allInnerTexts();
    console.log(addonList);
});