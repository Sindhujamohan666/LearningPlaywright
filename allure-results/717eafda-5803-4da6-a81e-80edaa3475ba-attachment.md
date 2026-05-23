# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Data_Driven_Testing_FakerJS\269_DDT_FakerJS2.spec.ts >> Register single user with Faker
- Location: tests\20_Data_Driven_Testing_FakerJS\269_DDT_FakerJS2.spec.ts:4:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Email' })

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { faker } from '@faker-js/faker';
  3  | 
  4  | test(`Register single user with Faker`, async ({ page }) => {
  5  |     const firstName = faker.person.firstName();
  6  |     const lastName = faker.person.lastName();
  7  |     const email = faker.internet.email({ firstName: 'Auto' });
  8  |     const telephone = faker.phone.number();
  9  |     const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });
  10 | 
  11 |     await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
  12 |     await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  13 |     await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
> 14 |     await page.getByRole('textbox', { name: 'Email' }).fill(email);
     |                                                        ^ Error: locator.fill: Target page, context or browser has been closed
  15 |     await page.getByRole('textbox', { name: 'Phone' }).fill(telephone);
  16 |     await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
  17 | 
  18 |     await page.getByRole('button', { name: 'Save profile' }).click();
  19 |     await expect(page.locator('#submission-output')).toContainText(firstName);
  20 | });
```