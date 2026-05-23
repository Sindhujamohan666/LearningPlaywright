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

Locator: getByRole('heading', { name: '$50,000.00' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: '$50,000.00' })

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
  - heading "$45,000.00" [level=3]
  - text: +2.5% from last month
  - paragraph: Monthly Income
  - heading "$50,000" [level=3]
  - paragraph: Based on recent activity
  - paragraph: Monthly Expenses
  - heading "$5,315.48" [level=3]
  - paragraph: Total debit transactions
  - heading "Balance History" [level=3]
  - application: Mon Tue Wed Thu Fri Sat Sun $0k $15k $30k $45k $60k
  - heading "Recent Activity" [level=3]
  - button "View All"
  - paragraph: Transfer to Sarah Smith
  - paragraph: 5/20/2026
  - text: "-$5000.00"
  - paragraph: Whole Foods Market
  - paragraph: 10/25/2023
  - text: "-$129.99"
  - paragraph: Opening Deposit
  - paragraph: 10/24/2023
  - text: +$50000.00
  - paragraph: Netflix Subscription
  - paragraph: 10/23/2023
  - text: "-$15.99"
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
  14 |     const totalamount=await page.getByRole('heading',{name:'$50,000.00'});
  15 |     expect(totalamount).toBeVisible();
  16 |     expect(totalamount).toContainText('$50,000.00');
  17 |     console.log(totalamount);
  18 |     
  19 | 
  20 |     //click on Transfer Funds
  21 |     await page.getByRole('button',{name:'Transfer Funds'}).click();
  22 |     //Fill amount and note and click continue
  23 |     await page.getByPlaceholder('0.00').fill('5000');
  24 |     await page.getByPlaceholder('e.g. Rent for October').fill('5000 sent');
  25 |     await page.getByRole('button',{name:'Continue'}).click();
  26 | 
  27 |     //Click confirm Transfer
  28 |     await page.getByRole('button',{name:'Confirm Transfer'}).click();
  29 | 
  30 |     //click Dashboard page and verify balance is 45000
  31 |     await page.getByRole('button',{name:'Dashboard'}).click();
  32 |     const totalamountfinal=await page.getByRole('heading',{name:'$45,000.00'});
> 33 |     expect(totalamount).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  34 |     expect(totalamount).toContainText('$45,000.00');
  35 | 
  36 | 
  37 | 
  38 |     await page.waitForTimeout(5000);
  39 | 
  40 | });
```