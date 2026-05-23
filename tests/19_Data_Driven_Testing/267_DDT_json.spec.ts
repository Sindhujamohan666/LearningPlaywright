import { test, expect } from '@playwright/test';
import path from 'path';
//Same as csv code except below change
import loginData from "./registration-data.json"; //added this from csv code

test.describe('DDT CSV', () => {
    //Same as csv code except below change
    //const loginData = readCSV(path.join(__dirname, 'login-data.csv'));//removed this from csv code

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" }).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
            let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" }).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLoginToPracticeAccount.click();

            //await expect(page).toHaveURL(data.expectedURL);




        });

    }


});