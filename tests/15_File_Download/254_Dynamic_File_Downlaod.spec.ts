import{test,expect } from '@playwright/test';
import path from 'path';
test.describe('File Download',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
    })
    //Download text file button
    //Dynamic file has no link in its html.
    test('demo:Dynamic file download',async({page})=>{
      //Promise.all() is used to avoid race condition
      const[download]=await Promise.all([
        page.waitForEvent('download'),
        //data-testid="download-text
        page.getByTestId('download-text').click()
      ]);
      expect (download.suggestedFilename()).toContain('tta-notes');
      //this creates a folder downloads under this folder and saves the file.
      //The below line might show some error in __dirname but this works fine.
      await download.saveAs(path.join(__dirname,'downloads','tta-notes.txt'));

    });

});