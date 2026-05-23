import{test,expect} from '@playwright/test';

test('Verify dropdown functionality', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    //Locating programming language dropdown
    await page.locator("//div[@data-testid='dropdown-language']").click();
    //add {exact:true } else it is failing .
    await page.getByText('JavaScript',{exact:true}).click();

     //locating Experience dropdown
    await page.locator('#experience-shell').click();
    await page.getByText('Mid-level (4-6 years)',{exact :true}).click();

    
    await page.waitForTimeout(5000);


});