import{test,expect} from '@playwright/test';

test('Verify advanced dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    //single select dropdown-select a playwright language
    await page.locator("#rs-single").click();
    await page.getByText('Cypress',{exact:true}).click(); //its working if not use{exact:true}.

    //multi select dropdown 
    await page.locator('#rs-multi').click();
    await page.getByText('Pytest',{exact:true}).click();
    await page.getByText('JUnit',{exact:true}).click();
    await page.keyboard.press('Escape'); //to close the dropdown

    //Multi-selector same as above
     await page.locator('#rs-creatable').click();
    await page.getByText('api-testing',{exact:true}).click();
    await page.getByText('performance',{exact:true}).click();
    await page.keyboard.press('Escape'); //to close the dropdown

    //Async dropdown
    await page.locator('#rs-async').click();
    //below one used for data-testid
    await page.getByTestId('rs-async-input').fill('pun');
    await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
    await page.getByRole('option', { name: 'Pune' }).click();

    await page.waitForTimeout(5000);

})