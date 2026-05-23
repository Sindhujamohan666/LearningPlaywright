import{test,expect} from '@playwright/test';

test('Basic Web test',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    //xpath to select the checkbox of Aarav Sharma
    await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").click();

    //playwright locator to select the checkbox of Aarav Sharma
    await page.locator("tr:has(td:text('Rohan.Mehta'))")
    .locator('td')         //locator chaining to select the td element
    .first()
    .click();

     await page.waitForTimeout(5000);

})

