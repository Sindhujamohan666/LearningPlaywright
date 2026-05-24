import{Page,Locator} from '@playwright/test';

export class InventoryPage{
    readonly page:Page;
    readonly selectitem:Locator;
    readonly addToCart:Locator;
    readonly shoppingCart:Locator;
    readonly menu;
    readonly logoutmenu;

    constructor(page:Page){
        this.page=page;
        this.selectitem=page.locator("div[class='item-name']>a");
        this.addToCart= page.getByText('Add to cart').or(page.locator('#addToCart'));
        this.shoppingCart=page.locator('svg');
        this.menu=page.locator("button[aria-label='Open menu'] >svg");
        this.logoutmenu=page.getByText('Logout');
    }
    async addToInventory(){
        await this.selectitem.first().click();
        await this.addToCart.click();
        //await this.shoppingCart.first().click();
        await this.menu.click();
        await this.logoutmenu.click();
    }
}