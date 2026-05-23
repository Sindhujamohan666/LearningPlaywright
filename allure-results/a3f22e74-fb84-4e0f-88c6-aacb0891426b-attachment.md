# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 19_Data_Driven_Testing\264_DDT_Simple.spec.ts >> DDT Simple >> Login with: empty password
- Location: tests\19_Data_Driven_Testing\264_DDT_Simple.spec.ts:44:13

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /admin/
Received string:  "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=sindhu%40pp.com&password=#login-success"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × unexpected value "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=sindhu%40pp.com&password=#login-success"

```

```yaml
- 'region "Announcement: AI Tester Blueprint new batch"':
  - text: LIVE AI Tester Blueprint New batch | 23 May 2026 · 11:00 AM IST | ₹35,000₹9,999
  - emphasis: 33% OFF
  - text: Code
  - code: AITESTER
  - link "Join":
    - /url: https://bit.ly/aitester2026
  - link "Chat on WhatsApp":
    - /url: https://sdet.live/WhatsApp
    - text: ☎
  - button "Dismiss banner": ×
- complementary "Practice navigation":
  - link "T The Testing Academy":
    - /url: ./index.html
    - text: T
    - strong: The Testing Academy
  - button "Toggle sidebar"
  - searchbox /
  - text: /
  - navigation:
    - button "Get started" [expanded]
    - list:
      - listitem:
        - link "Overview":
          - /url: ./index.html
    - button "Tools" [expanded]
    - list:
      - listitem:
        - link "SnapLocator (Chrome ext)":
          - /url: ./snaplocator.html
    - button "Selectors & Locators" [expanded]
    - list:
      - listitem:
        - link "Multiple Element Filter":
          - /url: ./multiple_element_filter.html
      - listitem:
        - link "Web Table Directory":
          - /url: ./webtable.html
    - button "Tables & Forms" [expanded]
    - list:
      - listitem:
        - link "QA Profile Form":
          - /url: ./tables/practice.html
      - listitem:
        - link "Companies Table":
          - /url: ./tables/webtable.html
      - listitem:
        - link "Tall Buildings Table":
          - /url: ./tables/webtable1.html
      - listitem:
        - link "Custom Dropdowns":
          - /url: ./tables/dropdowns.html
      - listitem:
        - link "Select Box Variants":
          - /url: ./tables/select-boxes.html
      - listitem:
        - link "Sortable Admin Table":
          - /url: ./tables/sortable.html
      - listitem:
        - link "Cricket Scorecard":
          - /url: ./tables/scorecard.html
    - button "Frames" [expanded]
    - list:
      - listitem:
        - link "Frames overview":
          - /url: ./frames/index.html
      - listitem:
        - link "Multi-frame frameset":
          - /url: ./frames/multi-frames.html
      - listitem:
        - link "Nested iframes":
          - /url: ./frames/nested-iframes.html
      - listitem:
        - link "Courses frameset":
          - /url: ./frames/courses-frameset.html
    - button "Widgets" [expanded]
    - list:
      - listitem:
        - link "SVG locators":
          - /url: ./widgets/svg.html
      - listitem:
        - link "Shadow DOM":
          - /url: ./widgets/shadow-dom.html
      - listitem:
        - link "Calendar / date picker":
          - /url: ./widgets/calendar.html
      - listitem:
        - link "Drag & drop Kanban":
          - /url: ./widgets/dnd.html
      - listitem:
        - link "Toasts & notifications":
          - /url: ./widgets/toasts.html
      - listitem:
        - link "Native dialogs":
          - /url: ./widgets/dialogs.html
      - listitem:
        - link "Hover menus":
          - /url: ./widgets/hover-menu.html
      - listitem:
        - link "Right-click menu":
          - /url: ./widgets/context-menu.html
      - listitem:
        - link "Keyboard navigation":
          - /url: ./widgets/keyboard-form.html
      - listitem:
        - link "Windows & Tabs":
          - /url: ./widgets/windows-tabs.html
      - listitem:
        - link "Upload & Download":
          - /url: ./widgets/upload-download.html
      - listitem:
        - link "Scroll":
          - /url: ./widgets/scroll.html
      - listitem:
        - link "Assertions (expect)":
          - /url: ./widgets/expect.html
      - listitem:
        - link "Test modifiers · hooks · data":
          - /url: ./widgets/test-modifiers.html
      - listitem:
        - link "Data-driven + POM":
          - /url: ./widgets/data-driven.html
      - listitem:
        - link "JavaScript notes":
          - /url: ./notes.html
    - button "Network" [expanded]
    - list:
      - listitem:
        - link "Network interception":
          - /url: ./network/intercept.html
    - button "Coming next" [expanded]
    - list
    - button "Projects" [expanded]
    - list:
      - listitem:
        - link "TTACart demo":
          - /url: ./ttacart/index.html
      - listitem:
        - link "TTAStays booking":
          - /url: ./booking/index.html
      - listitem:
        - link "TTA AI Chat":
          - /url: ./ai-chat/index.html
    - button "Frameworks" [expanded]
    - list:
      - listitem:
        - link "Framework":
          - /url: ./advance-framework.html
      - listitem:
        - link "Framework + AI":
          - /url: ./advance-framework-ai.html
  - text: © The Testing Academy · 2026
  - button "Toggle dark mode"
- banner:
  - button "Open sidebar"
  - link "Practice":
    - /url: ./index.html
  - strong: Multiple Element Filter
  - text: Practice
  - button "Toggle dark mode"
- main:
  - region "Master multiple element filters on a real login UI":
    - text: Locator practice · Login UI
    - heading "Master multiple element filters on a real login UI" [level=1]:
      - text: Master
      - emphasis: multiple element filters
      - text: on a real login UI
    - paragraph:
      - text: This dummy login page is built for practising
      - strong: allInnerTexts()
      - text: ","
      - strong: locator.all()
      - text: ","
      - strong: "filter({ hasText })"
      - text: ", and clicking a specific link from many similar links. Your target for the class exercise is the"
      - strong: Forgotten Password
      - text: link in the account panel.
    - strong: "13"
    - code: a.list-group-item
    - text: account links
    - strong: "16"
    - code: footer a
    - text: footer links
    - strong: "1"
    - text: Exact
    - code: Forgotten Password
    - text: target
    - group:
      - strong: Playwright solution
      - text: Try the practice on the right first — reveal the snippet only when you need a hint. Show solution
    - complementary:
      - region "Student Login":
        - heading "Student Login" [level=2]
        - paragraph: Practice page for Playwright selectors
        - text: Secure Practice Email Address
        - textbox "Email Address":
          - /placeholder: student@thetestingacademy.com
        - text: Password
        - textbox "Password":
          - /placeholder: Enter your password
        - checkbox "Remember me"
        - text: Remember me
        - link "Forget password?":
          - /url: "#forgotten-password"
        - button "Login to Practice Account"
        - link "Continue with GitHub":
          - /url: "#github-login"
        - link "Continue with Google":
          - /url: "#google-login"
      - region "Account navigation":
        - heading "Account navigation" [level=3]
        - link "Login ›":
          - /url: "#login"
        - link "Register ›":
          - /url: "#register"
        - link "Forgotten Password ›":
          - /url: "#forgotten-password"
        - link "My Account ›":
          - /url: "#my-account"
        - link "Address Book ›":
          - /url: "#address-book"
        - link "Wish List ›":
          - /url: "#wish-list"
        - link "Order History ›":
          - /url: "#order-history"
        - link "Downloads ›":
          - /url: "#downloads"
        - link "Recurring Payments ›":
          - /url: "#recurring-payments"
        - link "Reward Points ›":
          - /url: "#reward-points"
        - link "Returns ›":
          - /url: "#returns"
        - link "Transactions ›":
          - /url: "#transactions"
        - link "Newsletter ›":
          - /url: "#newsletter"
  - region "Teaching cards":
    - article:
      - heading "Use case 1 — collect text" [level=3]
      - paragraph: Capture all right-panel link texts and assert the count before clicking the target link.
      - code: page.locator('a.list-group-item').allInnerTexts()
    - article:
      - heading "Use case 2 — filter one link" [level=3]
      - paragraph: Filter from many account links and click the one that has exact visible text.
      - code: "filter({ hasText: 'Forgotten Password' })"
    - article:
      - heading "Use case 3 — footer links" [level=3]
      - paragraph: Collect every footer anchor, print its text and href, then validate important legal links.
      - code: page.locator('footer a').all()
  - heading "The Testing Academy" [level=3]
  - paragraph:
    - text: A public practice page from
    - strong: The Testing Academy
    - text: for learning multiple element filtering, link collection, footer-link traversal, and targeted clicks.
  - heading "Information" [level=4]
  - link "About Us":
    - /url: "#about-us"
  - link "Delivery Information":
    - /url: "#delivery-information"
  - link "Privacy Policy":
    - /url: "#privacy-policy"
  - link "Terms & Conditions":
    - /url: "#terms-conditions"
  - heading "Customer Service" [level=4]
  - link "Contact Us":
    - /url: "#contact-us"
  - link "Returns":
    - /url: "#returns-footer"
  - link "Site Map":
    - /url: "#site-map"
  - link "Brands":
    - /url: "#brands"
  - heading "Extras" [level=4]
  - link "Gift Certificates":
    - /url: "#gift-certificates"
  - link "Affiliate":
    - /url: "#affiliate"
  - link "Specials":
    - /url: "#specials"
  - link "Support Center":
    - /url: "#support-center"
  - heading "My Account" [level=4]
  - link "My Account":
    - /url: "#footer-my-account"
  - link "Order History":
    - /url: "#footer-order-history"
  - link "Wish List":
    - /url: "#footer-wish-list"
  - link "Newsletter":
    - /url: "#footer-newsletter"
- status: Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('DDT Simple',()=>{
  4  |     //Test Data--->Array of Objects
  5  |     const loginData=[
  6  |         {
  7  |             description :"valid credentials",
  8  |             username :"admin@gmail.com",
  9  |             password:"admin123",
  10 |             expectedURL:/admin/,
  11 |             shouldPass:true
  12 |         },
  13 |         {
  14 |             description :"invalid credentials",
  15 |             username :"admin123@ymail.com",
  16 |             password:"wrongpass",
  17 |             expectedURL:/admin/,
  18 |             shouldPass:false
  19 |         },
  20 |         {
  21 |             description:"empty username",
  22 |             username:"",
  23 |             password:"admin123",
  24 |             expectedURL:/admin/,
  25 |             shouldPass:false
  26 |         },
  27 |         {
  28 |             description:"empty password",
  29 |             username:"sindhu@pp.com",
  30 |             password:"",
  31 |             expectedURL:/admin/,
  32 | 
  33 |         },
  34 |         {
  35 |             description:"both empty",
  36 |             username:"",
  37 |             password:"",
  38 |             expectedURL:/multiple_element_filter/,
  39 |             shouldPass:false
  40 |         }
  41 | 
  42 |     ];
  43 |     for(const data of loginData){
  44 |         test(`Login with: ${data.description}`,async({page})=>{
  45 |             await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  46 | 
  47 |             let textboxEmailAddress=page.getByRole('textbox',{name:'Email Address'});
  48 |             let textboxPassword=page.getByRole('textbox',{name:'Password'}).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
  49 |             let buttonloginToPracticeAccount=page.getByRole('button',{name:'Login to Practice Account'}).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));
  50 |             await textboxEmailAddress.fill(data.username);
  51 |             await textboxPassword.fill(data.password);
  52 |             await buttonloginToPracticeAccount.click();
  53 | 
> 54 |             await expect(page).toHaveURL(data.expectedURL);
     |                                ^ Error: expect(page).toHaveURL(expected) failed
  55 | 
  56 | 
  57 | 
  58 |         });
  59 |     }
  60 | 
  61 | });
```