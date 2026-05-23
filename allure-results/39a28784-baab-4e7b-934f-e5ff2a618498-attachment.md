# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\TTA_Bank.spec.ts >> TTA Bank
- Location: tests\Tasks\TTA_Bank.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Sign Up' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img [ref=e6]
    - heading "TTA Bank" [level=1] [ref=e9]
    - paragraph [ref=e10]: Secure Digital Banking Portal
  - generic [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]:
        - generic [ref=e14]: Email Address
        - generic [ref=e15]:
          - generic:
            - img
          - textbox "you@example.com" [ref=e16]: alex.morgan@ttabank.com
      - generic [ref=e17]:
        - generic [ref=e18]: Password
        - generic [ref=e19]:
          - generic:
            - img
          - textbox "••••••••" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]:
          - checkbox "Remember me" [ref=e23]
          - generic [ref=e24]: Remember me
        - link "Forgot password?" [ref=e26] [cursor=pointer]:
          - /url: "#"
      - button "Sign In" [ref=e27] [cursor=pointer]
    - paragraph [ref=e29]:
      - text: Don't have an account?
      - button "Sign Up" [ref=e30] [cursor=pointer]
  - paragraph [ref=e31]:
    - text: © 2024 TTA Bank. All rights reserved.
    - text: Authorized and Regulated by the Financial Conduct Authority.
```

# Test source

```ts
  1 | import{test,expect} from '@playwright/test';
  2 | 
  3 | test('TTA Bank',async({page})=>{
  4 |     await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  5 |     //click on Sign up button:
> 6 |     await page.getByRole('link',{name:'Sign Up'}).click();
    |                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  7 | 
  8 | });
```