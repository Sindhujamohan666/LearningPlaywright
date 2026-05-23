import { chromium } from "playwright";

async function multiUserTest() {
    let browser = await chromium.launch({ headless: false });//initialised once

    // Admin
    let adminContext = await browser.newContext(); //context 1
    let adminPage = await adminContext.newPage();
    await adminPage.goto("https://app.vwo.com/login");
    console.log("Admin: on login page");



    // Viewer
    let viewerContext = await browser.newContext();//context 2 
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();


}

multiUserTest();