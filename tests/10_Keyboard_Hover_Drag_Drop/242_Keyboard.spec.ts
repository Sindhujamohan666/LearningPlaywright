import{test,expect} from '@playwright/test';

test('Verify Keyboard operations',async({page})=>{
    await page.goto('https://keycode.info');
    //press the key 'A' on the keyboard
    await page.keyboard.press('A');
    await page.screenshot({path:'A.png'});
    //Press the left arrow key on the keyboard
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({path:'AarrowLeft.png'});
    //Press Shift+O on the keyboard
    await page.keyboard.press('Shift+O');
    await page.screenshot({path:'AShiftO.png'});

    await page.keyboard.up("Shift");
    await page.keyboard.down("Shift");




    await page.waitForTimeout(5000);
});