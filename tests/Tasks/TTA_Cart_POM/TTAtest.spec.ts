import{test,expect} from '@playwright/test';
import{LoginPage} from './LoginPage';
import{InventoryPage} from './InventoryPage';
import{checkoutPage} from './CheckoutPage';


test.describe('TTA automation',()=>{

    test('TTA automation',async({page})=>{
        const loginPage=new LoginPage(page);
        const inventoryPage=new InventoryPage(page);
        const chkoutPage=new checkoutPage(page); //new classname
        await loginPage.goto();
        await loginPage.login('standard_user','tta_secret');
        await inventoryPage.addToInventory();
        //await chkoutPage.checkout();

        await page.waitForTimeout(5000);

    })

});