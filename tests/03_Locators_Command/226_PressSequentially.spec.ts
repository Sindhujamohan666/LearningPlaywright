import{test,expect} from'@playwright/test';

test('Verify Press Sequentially',async({page})=>{
   await page.goto("https://awesomeqa.com/practice.html");
   //xpath selector for username input field
   //getRole mostly works whenever we have labels attached-so below didnt work
   //await page.getByRole("textbox",{name:'firstname'}).fill('Sindhu');
   await page.locator('[name="firstname"]').pressSequentially('the Playwright learning',{delay:200});//css selector

   await page.waitForTimeout(5000); //delay to see result
    //pressSequentially types word by word like a typewriter with a delay.

    await page.goto("https://app.vwo.com/login");
    await page.goBack(); //again come back to previous page
    //page.goForward(); //go forward to next page
    //page.reload(); //reload the page
    await page.waitForTimeout(5000);

});