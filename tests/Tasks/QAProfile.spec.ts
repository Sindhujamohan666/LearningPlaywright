import{test,expect} from '@playwright/test';

test('QA Profile Form',async({page})=>{
await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
//Firstname -data-testid="first-name"
await page.getByTestId('first-name').fill('Sindhuja');
//Lastname
await page.getByTestId('last-name').fill('Mohanasundaram');
//checkbox
await page.getByText('Female',{exact:true}).check();
//dropdown id=years-experience
await page.locator('#years-experience').selectOption('5');
//Date-yet to teach
//radio button Automation tester
await page.getByRole('radio',{name:' Automation Tester'}).check();

//Technical skills automation tool multi-check (data-testid)
await page.getByTestId('tool-uft').click();
await page.getByTestId('tool-selenium').click()
await page.getByTestId('continent-asia').click();
await page.getByTestId('continent-australia').check();

//Upload file

//Download file

//Save profile button click.
await page.locator('#profile-submit').click();
//printing submitted profile -innerText() is used o get text
const output=await(page.locator('#submission-output')).innerText();
console.log(output); //print output

await page.waitForTimeout(5000);

});