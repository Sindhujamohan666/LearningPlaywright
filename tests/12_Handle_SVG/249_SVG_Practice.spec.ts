import{test,expect,Locator} from '@playwright/test';

const URL='https://app.thetestingacademy.com/playwright/widgets/svg';

test.describe('SVG handling',()=>{
     test.beforeEach(async({page})=>{
        await page.goto(URL);
     });
     test('locate SVG root and assert visible',async({page})=>{
        //click blue circle
        const circleshape:Locator=page.locator('#circle-blue');
        await circleshape.click();

        //Validate the content in output section
        const output=await page.locator('#shapes-output');
        expect(output).toContainText('Blue circle');
       
        //Q3 chart role=button  ,aria-label="Q3 bar — 78" /means contains
        await page.getByRole('button',{name:'/Q3 Bar/'});

        //click on 4 star  data-testid="star-4
        await page.getByTestId('star-4').click();
        // await page.getByRole('radio', { name: '4 stars' }).click();-->This locator also works for 4 star
        

       //clicks on all Q1,Q2,Q3,Q4,Q5 bars.
        let allbars=await page.locator('.bar').all();
        for(const bars of allbars){
            const q=bars.getAttribute('data-quarter');
            // if....
            await bars.click();
            console.log(q);
        }
        await page.waitForTimeout(5000);

     });
});