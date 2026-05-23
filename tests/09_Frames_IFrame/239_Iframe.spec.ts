import{test,expect,FrameLocator} from '@playwright/test';

test('Frames',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    //Vehicle registration frame id=frame-one.frameLocator enters into frame
    let vehicleFrame:FrameLocator=await page.frameLocator('#frame-one')
    await vehicleFrame.locator('#RESULT_TextField-1').fill('Benz');
    await vehicleFrame.locator('#RESULT_TextField-2').fill('Sindhuja');
    await vehicleFrame.locator('#RESULT_TextField-3').fill('2012');
    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');

    await vehicleFrame.locator('#RESULT_TextField-4').fill('2015');
    await vehicleFrame.locator('#RESULT_TextArea-1').fill('The best car');

    await vehicleFrame.getByText('Submit registration',{exact:true}).click();
    let output=await vehicleFrame.locator('#vehicle-output').innerText();
    console.log(output);

    await page.waitForTimeout(5000);
    
});