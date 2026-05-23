import{test,expect, Page} from '@playwright/test';

//Reusable Utility



async function selectValue(page: Page, dropDownLabel: string, value: string): Promise<void> {
    await page.locator(`//button[contains(@class,'select-trigger')]//span[text()='${dropDownLabel}']`).click();
    await page.getByText(value, { exact: true }).click();
}