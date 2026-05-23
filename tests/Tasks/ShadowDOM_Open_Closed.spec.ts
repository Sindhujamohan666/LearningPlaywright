import{test,expect} from '@playwright/test';

test('Shadow DOM test',async({page})=>{
  await page.goto('https://selectorshub.com/xpath-practice-page/');
  
  //Fill the form inside shadow DOM 
  //Fill username- Open ShadowDOM
  await page.locator('#kils').fill('sindhu');
  //Fill pizza-Open ShadowDOM
  await page.locator('#pizza').fill('Paneer');

  //Fill training-Closed ShadowDOM-to handle this we have to bypass major browser restriction
  //Handle with keyboard,mouse for closed shadow DOM
  await page.keyboard.press('Tab');
  await page.keyboard.type('Training Automation');

  //Fill password 
  await page.keyboard.press('Tab');
  await page.keyboard.type('12345')

  await page.waitForTimeout(5000);
})
   