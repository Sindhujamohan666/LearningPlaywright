import {test,expect} from '@playwright/test';

test.describe('Multiple elements handling', () => {
    test('Basic test-Verify page title',async({page})=>{
        await page.goto ('https://app.thetestingacademy.com/playwright/multiple_element_filter');
        //css selector a.classname 
        //allInnerTexts-->Get visible texts of all list items

        const rightPanelLinksTexts:string[]=await page.locator('a.list-group-item').allInnerTexts()
        console.log(rightPanelLinksTexts.length);

        //for loop to find My Account link and click on it
        for(const linkText of rightPanelLinksTexts){
            if(linkText=='My Account'){
                // Click on the My Account link
                //used when we have text
                //without first()locators error out
                await page.getByText(linkText).first().click();
                break;
            }
        }
        //when you need the texts of multiple elements at once.
        const rightPanelLinks = await page.locator('a.list-group-item').all();
        for (const link of rightPanelLinks) {
            console.log(await link.getAttribute("href"));
        }

    })
});