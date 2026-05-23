import{test,expect,Locator} from '@playwright/test';

test('Advance drag and drop Kanban board',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
//The below ones move a different card .
    //await page.locator('#card-write-spec').dragTo(page.locator("[data-status='in-progress']"));
    //await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="in-progress"]'));
    //await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="review"]'));

     // Manual mouse path — for finicky DnD libraries

    
    let source:Locator=page.locator('#card-write-spec');
    //! after boundingbox for null check
    const sBox=(await source.boundingBox())!;

    let target:Locator=page.locator('[data-status="review"]');
    //! after boundingbox for null check
    const tBox=(await target.boundingBox())!;
    //! null check after boundingbox for null check
    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    await page.mouse.up();

    await page.waitForTimeout(9000);

});