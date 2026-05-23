# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\ShadowDOM.spec.ts >> Shadow DOM test
- Location: tests\Tasks\ShadowDOM.spec.ts:3:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://selectorshub.com/xpath-practice-page/", waiting until "load"

```

# Test source

```ts
  1 | import{test,expect} from '@playwright/test';
  2 | 
  3 | test('Shadow DOM test',async({page})=>{
> 4 |    page.goto('https://selectorshub.com/xpath-practice-page/');
    |         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5 | });
```