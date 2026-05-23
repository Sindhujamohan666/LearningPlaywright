import{test,expect} from '@playwright/test';

test('Validate error message',async({page})=>{

    await page.goto(' https://vwo.com/free-trial/?utm_medium=website&utm_source=login-page&utm_campaign=mof_eg_loginpage');
    //name is the label's name 
    await page.getByRole('textbox',{name:'Business Email'}).fill('dasd@gmail.com');
    await page.getByRole('checkbox',{name:"I agree to VWO's"}).check();
    await page.getByRole('button',{name:'Create a Free Trial Account'}).click();
    await expect (page.locator("div[class='Mb(5px) invalid-input-group'] >div")).toContainText("gmail.com doesn't look like a business domain. Please use your business email.");


});