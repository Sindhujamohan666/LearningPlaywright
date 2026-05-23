import{test,expect} from'@playwright/test';

test('Verify CSS Locator',async({page})=>{
    await page.goto("https://awesomeqa.com/css/");

    //locate and count all spans
    //This also works --"div>span" (div.first means first div)
    const allspans=await page.locator("div.first>span");
    const count =await allspans.count();
    console.log(count);

    //Findinng first-last span(textcontent gets the text.)
    const span1=await allspans.first().textContent();
    const span2=await allspans.nth(1).textContent();//span2
    const span3=await allspans.nth(2).textContent();//span3
    const span5=await allspans.nth(4).textContent();//span5
    const lastspan=await allspans.last().textContent();//span7
   
    //printing the text of all spans
    console.log("First  (Span 1):",span1);
    console.log("Second (Span 2):",span2);
    console.log("Third  (Span 3):",span3);
    console.log("Fifth  (Span 5):",span5);
    console.log("Last   (Span 7):",lastspan);

     //page.locator().click();

     for(let i=0;i<count;i++){
        let span_ith=await allspans.nth(i).textContent();
        console.log(span_ith);
     }

});