import{test,expect} from '@playwright/test';

test ('Flipkart website test',async({page})=>{
    await page.goto('https://www.flipkart.com/search');
    //Type macmini in search box
    await page.getByPlaceholder('Search for products, brands and more').fill('macmini');
    await page.locator('svg').first().click();
    await page.getByText('Price -- Low to High',{exact:true}).click();



});