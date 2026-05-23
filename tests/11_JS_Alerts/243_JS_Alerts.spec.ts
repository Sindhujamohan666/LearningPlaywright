import{test,expect} from '@playwright/test';

test.describe('JS Alerts',()=>{
  test.beforeEach(async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  });
  //Alert with Ok button only
  test('JS Alert accept 1',async({page})=>{
    // Register the dialog handler BEFORE triggering the alert
    //Use page.once is used to handle alerts.
    page.once('dialog', async dialog => { //not page here
        console.log('Alert type:',dialog.type());
        console.log('Alert message:',dialog.message());
        expect (dialog.message()).toBe('I am a JS Alert');
        await dialog.accept(); //accept the alert
  });
  await page.getByRole('button',{name:'Click for JS Alert'}).click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  })
  //Alert with Ok and Cancel button
   test('JS Confirm acecept 2',async({page})=>{
    page.once('dialog', async dialog => {
        console.log('Alert type:',dialog.type());
        expect(dialog.type()).toBe('confirm');
        console.log('Alert message:',dialog.message());
        expect (dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept(); //accept the alert
        //await dialog.dismiss(); //dismiss the alert
    });
    await page.getByRole('button',{name:'Click for JS Confirm'}).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');

   });
   //Alert with input box
   test('JS Prompt accept 3',async({page})=>{
    const inputText='Playwright';
    page.once('dialog',async dialog=>{
        expect(dialog.type()).toBe('prompt');
        expect (dialog.message()).toBe('I am a JS prompt');
        await dialog.accept(inputText); //accept the alert
         //await dialog.dismiss();
    })
    await page.locator('button', { hasText: 'Click for JS prompt' }).click();
        await expect(page.locator('#result')).toHaveText(`You entered: ${inputText}`);
   })
});