import{test,expect} from '@playwright/test';

test('Lazy list containing 10 elements grows on scrolling',async({page})=>{
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    //Locaring the lazy entire frame
    await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
    //Locating the list
    await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

    //Locating each elements in list.
    const list=page.getByTestId('lazy-list').locator('li');

    const initialCount=await list.count();
    console.log(initialCount);

    await list.last().scrollIntoViewIfNeeded(); //reaching 10th element in list

    //poll until new items append
    await expect.poll(async()=>list.count(),{
      message: 'expected lazy list to load more items',
      timeout: 10_000,
    }).toBeGreaterThan(initialCount);

    const finalCount=await list.count();
    console.log(finalCount);

    await page.waitForTimeout(5000);

});