import{test,expect,Locator} from '@playwright/test';

test('Validate Hover',async({page})=>{
     await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
     //hover on add ons -data-testid="nav-add-ons"
     await page.getByTestId('nav-add-ons').hover();
     //Get all the options in add-ons
     //allinnerText is not available for Locator type .It can be used for string only as below line
     //await page.locator("div[aria-label='Add-ons submenu'] >a").allInnerTexts();
     const addonList:Locator[]=await page.locator("div[aria-label='Add-ons submenu'] >a").all();
     console.log(addonList);
     //click on wifi
     await page.getByTestId('test-id-Wifi').click();
     //get data from output--id=output 
     const output=await page.locator('#output').innerText();
     console.log(output);

     //convert the output object to json
     const data=JSON.parse(output);
     expect(data.clicked).toContain('Wi-Fi');

     await page.waitForTimeout(5000);
});