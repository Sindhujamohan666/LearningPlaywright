# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16_ScrollToElement\257_Lazy_list scroll.spec.ts >> Lazy list containing 10 elements grows on scrolling
- Location: tests\16_ScrollToElement\257_Lazy_list scroll.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('section-lazy')

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | test('Lazy list containing 10 elements grows on scrolling',async({page})=>{
  4  |     //Locaring the lazy entire frame
> 5  |     await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
     |                                            ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  6  |     //Locating the list
  7  |     await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();
  8  | 
  9  |     //Locating each elements in list.
  10 |     const list=page.getByTestId('lazy-list').locator('li');
  11 | 
  12 |     const initialCount=await list.count();
  13 |     console.log(initialCount);
  14 | 
  15 | });
```