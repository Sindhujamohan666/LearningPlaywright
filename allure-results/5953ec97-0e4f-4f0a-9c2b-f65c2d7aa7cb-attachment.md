# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\TTA_Bank.spec.ts >> TTA Bank
- Location: tests\Tasks\TTA_Bank.spec.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: '$50000' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: '$50000' })

```

```yaml
- complementary:
  - text: TTA Bank
  - navigation:
    - button "Dashboard"
    - button "Transfer Funds"
    - button "Expense Tracker"
    - button "Transactions"
    - button "AI Support"
    - button "Settings"
  - img "User"
  - text: Sindhuja sindhuja@gmail.com
  - button "Sign Out"
- main:
  - heading "Dashboard" [level=1]
  - button
  - paragraph: Total Balance
  - heading "$50,000.00" [level=3]
  - text: +2.5% from last month
  - paragraph: Monthly Income
  - heading "$50,000" [level=3]
  - paragraph: Based on recent activity
  - paragraph: Monthly Expenses
  - heading "$315.48" [level=3]
  - paragraph: Total debit transactions
  - heading "Balance History" [level=3]
  - status:
    - paragraph: Thu
    - list:
      - listitem: "balance : 48000"
  - application: Mon Tue Wed Thu Fri Sat Sun $0k $15k $30k $45k $60k
  - heading "Recent Activity" [level=3]
  - button "View All"
  - paragraph: Whole Foods Market
  - paragraph: 10/25/2023
  - text: "-$129.99"
  - paragraph: Opening Deposit
  - paragraph: 10/24/2023
  - text: +$50000.00
  - paragraph: Netflix Subscription
  - paragraph: 10/23/2023
  - text: "-$15.99"
  - paragraph: Uber Ride
  - paragraph: 10/22/2023
  - text: "-$24.50"
  - button "Quick Transfer"
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | test('TTA Bank',async({page})=>{
  4  |     await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');
  5  |     //click on Sign up button:
  6  |     await page.getByText('Sign Up').click();
  7  |     //Fill the details and click o Create button
  8  |     await page.getByRole('textbox',{name:'John Doe'}).fill("Sindhuja");
  9  |     await page.getByRole('textbox',{name:'you@example.com'}).fill("sindhuja@gmail.com");
  10 |     await page.getByRole('textbox',{name:'••••••••'}).fill('sindhu123');
  11 |     await page.getByRole('button',{name:'Create Account'}).click();
  12 | 
  13 |     //Verify if opening balance is 50000 h3 tag is heading
> 14 |     await expect(page.getByRole('heading',{name:'$50000'})).toBeVisible();
     |                                                             ^ Error: expect(locator).toBeVisible() failed
  15 | 
  16 | 
  17 | 
  18 |     await page.waitForTimeout(5000);
  19 | 
  20 | });
```