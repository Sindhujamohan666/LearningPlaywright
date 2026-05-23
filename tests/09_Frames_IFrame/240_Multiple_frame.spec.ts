import {test,expect,FrameLocator,Locator} from '@playwright/test';

//This page uses frame and not iframe .FrameLocator works for both frame and iframe.
test('Multiple Frames',async({page})=>{
   await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

   let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
   const headerText=await mainFrame.locator('h2').innerText();
   console.log(headerText);

   //total no of frames on this page
   const allframes:Locator[]=await page.locator('//Frame').all();
   console.log('Total no of frames:',allframes.length);

   for(const frame of allframes){
     console.log(await frame.getAttribute('name'), ':' ,await frame.getAttribute('src'));
   }
 
   let sideFrame :FrameLocator=await page.frameLocator('[name="side"]');
   //vehicle registration
   await sideFrame.getByTestId('side-link-registration').click();


   await page.waitForTimeout(5000);

});