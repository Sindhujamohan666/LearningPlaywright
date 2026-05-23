import{test,expect} from '@playwright/test';

test('locators are lazy, strict, and auto-wait',async({page})=>{
    await page.goto("https://app.vwo.com/#/login");

    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >

    // Rule 2 - Css Seecltor 
    // id -> #
    // class -> .
    // Create locators — nothing happens yet (lazy)
    //using xpath-->xpath should be within ""(double quote only)
    let usernameField=page.locator("xpath=//input[@data-qa='hocewoqisi']");
    let passwordField=page.locator("xpath=//input[@data-qa='jobodapuxe']");
    let loginButton=page.locator("//button[@data-qa='sibequkica']");

    // NOW Playwright finds the element and acts (auto-wait)
    await usernameField.fill("admin");
    await passwordField.fill("pass123");
    await loginButton.click();

    console.log("All actions completed ✅");

    let errormessage=page.locator('#js-notification-box-msg');
    // error_message.getByText()-->this can also be used
    await expect(errormessage).toContainText('Your email, password, IP address or location did not match');
});