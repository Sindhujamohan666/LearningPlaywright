import{test,expect} from '@playwright/test';

test.describe('URL and title Assertions',()=>{
    test('URL and title assertions',async({page})=>{
     await page.goto('https://app.thetestingacademy.com/playwright/widgets/calendar.html');
     await page.getByTestId('trigger-depart').click();
     await expect (page).toHaveTitle('Calendar Date Picker — The Testing Academy');
     await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar');
     // --/calender/-->means anwhere in title(regular exp)
     await expect(page).toHaveTitle(/Calendar/); //case-sensitive

     const appurl=page.url();
     expect(appurl).toContain('thetestingacademy');

    // expect(page.locator('')).toHaveCSS(''); // toHaveClass
    //await expect(page.locator('#title')).toHaveCSS('color', 'rgb(0, 0, 0)');
    });
});