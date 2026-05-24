import { Page,Locator } from "@playwright/test";

export class LoginPage{
    //Page Locators
    readonly page:Page;
    readonly usernametxt :Locator;
    readonly passwordtxt :Locator;
    readonly loginBtn :Locator;

    constructor(page:Page){
        this.page=page;
        this.usernametxt=page.getByPlaceholder('Username');
        this.passwordtxt=page.locator('#password');
        this.loginBtn=page.locator('#login-button');
        
    }
    async goto(){
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }
    async login(username:string,password:string){
        await this.usernametxt.fill(username);
        await this.passwordtxt.fill(password);
        await this.loginBtn.click();
    }
    
}