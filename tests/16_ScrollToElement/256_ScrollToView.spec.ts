import{test,expect} from '@playwright/test';

test.describe("Scrolling in Playwight",()=>{

    test.beforeEach(async({page})=>{
      await page.goto( 'https://app.thetestingacademy.com/playwright/widgets/scroll');

    });

    test('Scroll to view',async({page})=>{
    //1. Playwright does auto scroll.Scroll to view if needed.
    await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
    await page.getByTestId('deep-anchor').click();
    await page.waitForTimeout(5000);

    });
    test('Scroll by 1000 pixel',async({page})=>{
     await page.evaluate(()=>window.scrollBy(0,1000));
     await page.waitForTimeout(5000);
    });
    //0, document.body.scrollHeight--> moves bottom
    test('jump to bottom button',async({page})=>{
      await page.evaluate(()=>window.scrollTo(0, document.body.scrollHeight));
      await expect(page.getByTestId('cta-button')).toBeEnabled();
    });

    test('jump back to top',async({page})=>{
      await page.evaluate(() => window.scrollTo(0, 0));
    });

});