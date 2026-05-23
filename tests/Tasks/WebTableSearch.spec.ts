import{test,expect} from '@playwright/test';

test('Verify if Kabir is present',async({page})=>{
    await page.goto(' https://app.thetestingacademy.com/playwright/webtable');
    //Search kabir in searchbox(aria-label-->getByLabel)
    await page.getByLabel('Search employee table').fill('Kabir');
    //Fetching td data
    const col=await page.locator('td:has-text("Kabir khan")').isVisible();
    //check kabir khan checkbox
    const chkbox=await page.getByLabel('Select Kabir.Khan');
    chkbox.check();
    //validate checkbox is checked.
    chkbox.isChecked();
    

    await page.waitForTimeout(5000);
});