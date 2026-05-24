import{Page,Locator} from '@playwright/test';

export class checkoutPage{
     readonly page:Page;
     readonly chkoutBtn:Locator;

     constructor(page:Page){
        this.page=page;
        this.chkoutBtn=page.getByText('Checkout');

     }
     async checkout(){
        await this.chkoutBtn.click();
     }
}