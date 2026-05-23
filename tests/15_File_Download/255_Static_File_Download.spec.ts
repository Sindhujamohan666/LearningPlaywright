import { test, expect } from '@playwright/test';


test.describe('File download Demo - TestingAcademy', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    });

    test('demo: download Static file', async ({ page }) => {
       //static file will have url found when inspecting
       //Promise.all() is used to avoid race condition
        const [staticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-static').click()
        ]);
        //File found in out directory below node-modules
        await staticDownload.saveAs('out/' + staticDownload.suggestedFilename());
    });

});