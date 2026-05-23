import{test,expect,FrameLocator} from '@playwright/test';


test('frame within frame',async({page})=>{
    await page.goto('https://selectorshub.com/iframe-scenario/');


    //first is deprecated.
    let frame1: FrameLocator = page.frameLocator('#pact1').first();
    let frame2:FrameLocator=frame1.frameLocator('#pact2');
    let frame3:FrameLocator=frame2.frameLocator('#pact3');
    
    await frame1.getByTitle('Enter your first crush name').fill('Aishwarya Rai');
    //await frame1.locator('#inp_val').fill('Aishwarya Rai');--failing
    await frame2.locator('#jex').fill('Wife');
    await frame3.locator('#glaf').fill('Playwright');

    const headerText=await frame1.locator('h3').innerText();
    console.log(headerText);
    await page.waitForTimeout(5000);
});