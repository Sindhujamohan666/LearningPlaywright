import{test,expect} from '@playwright/test';

const simpleMaps="https://simplemaps.com/svg/country/in";

test.describe('Map Selection',()=>{
     test.beforeEach(async({page})=>{
        await page.goto(simpleMaps);
     });

     test('Generate the list of all states',async({page})=>{
       const states = await page.locator(
         `//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='text' and contains(@class,'sm_label')]`,
            )
            .allTextContents();

            for(const state of states){
                if (state.trim()=="Uttar Pradesh") {
                await page
                    .locator(`//*[name()='path' and contains(@class,'INUP')]`)
                    .click();
            }
        }
            
            
     });
});