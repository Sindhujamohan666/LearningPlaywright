import{test,expect} from '@playwright/test';

test('TTA Bank',async({page})=>{
    await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
    //click on Sign up button:
    await page.getByText('Sign Up').click();
    //Fill the details and click o Create button
    await page.getByRole('textbox',{name:'John Doe'}).fill("Sindhuja");
    await page.getByRole('textbox',{name:'you@example.com'}).fill("sindhuja@gmail.com");
    await page.getByRole('textbox',{name:'••••••••'}).fill('sindhu123');
    await page.getByRole('button',{name:'Create Account'}).click();

    //Verify if opening balance is 50000 h3 tag is heading
    const totalamount=await page.getByRole('heading',{name:'$50,000.00'});
    expect(totalamount).toBeVisible();
    expect(totalamount).toContainText('$50,000.00');
    
    

    //click on Transfer Funds
    await page.getByRole('button',{name:'Transfer Funds'}).click();
    //Fill amount and note and click continue
    await page.getByPlaceholder('0.00').fill('5000');
    await page.getByPlaceholder('e.g. Rent for October').fill('5000 sent');
    await page.getByRole('button',{name:'Continue'}).click();

    //Click confirm Transfer
    await page.getByRole('button',{name:'Confirm Transfer'}).click();

    //click Dashboard page and verify balance is 45000
    await page.getByRole('button',{name:'Dashboard'}).click();
    const totalamountfinal=await page.getByRole('heading',{name:'$45,000.00'});
    expect(totalamountfinal).toBeVisible();
    expect(totalamountfinal).toContainText('$45,000.00');



    await page.waitForTimeout(5000);

});