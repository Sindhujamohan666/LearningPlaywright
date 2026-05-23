import{test,expect} from'@playwright/test';


test('Verify getRole Locator',async({page})=>{
   
   await page.goto("https://katalon-demo-cura.herokuapp.com/");
   await page.getByRole("link",{name:'Make Appointment',disabled:false}).click();
});