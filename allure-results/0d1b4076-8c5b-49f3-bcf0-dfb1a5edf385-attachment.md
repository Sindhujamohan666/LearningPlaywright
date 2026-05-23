# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 17_Expect_Assertions\259_URL_Asserations.spec.ts >> URL and title Assertions >> URL and title assertions
- Location: tests\17_Expect_Assertions\259_URL_Asserations.spec.ts:4:9

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /calender/
Received string:  "Calendar Date Picker — The Testing Academy"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × unexpected value "Calendar Date Picker — The Testing Academy"

```

```yaml
- complementary "Practice navigation":
  - link "T The Testing Academy":
    - /url: ../index.html
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
          - /url: ../index.html
    - button "Selectors & Locators" [expanded]
    - list:
      - listitem:
        - link "Multiple Element Filter":
          - /url: ../multiple_element_filter.html
      - listitem:
        - link "Web Table Directory":
          - /url: ../webtable.html
    - button "Tables & Forms" [expanded]
    - list:
      - listitem:
        - link "QA Profile Form":
          - /url: ../tables/practice.html
      - listitem:
        - link "Companies Table":
          - /url: ../tables/webtable.html
      - listitem:
        - link "Tall Buildings Table":
          - /url: ../tables/webtable1.html
      - listitem:
        - link "Custom Dropdowns":
          - /url: ../tables/dropdowns.html
      - listitem:
        - link "Select Box Variants":
          - /url: ../tables/select-boxes.html
      - listitem:
        - link "Sortable Admin Table":
          - /url: ../tables/sortable.html
      - listitem:
        - link "Cricket Scorecard":
          - /url: ../tables/scorecard.html
    - button "Frames" [expanded]
    - list:
      - listitem:
        - link "Frames overview":
          - /url: ../frames/index.html
      - listitem:
        - link "Multi-frame frameset":
          - /url: ../frames/multi-frames.html
      - listitem:
        - link "Nested iframes":
          - /url: ../frames/nested-iframes.html
      - listitem:
        - link "Courses frameset":
          - /url: ../frames/courses-frameset.html
    - button "Widgets" [expanded]
    - list:
      - listitem:
        - link "SVG locators":
          - /url: ./svg.html
      - listitem:
        - link "Shadow DOM":
          - /url: ./shadow-dom.html
      - listitem:
        - link "Calendar / date picker":
          - /url: ./calendar.html
      - listitem:
        - link "Drag & drop Kanban":
          - /url: ./dnd.html
      - listitem:
        - link "Toasts & notifications":
          - /url: ./toasts.html
      - listitem:
        - link "Native dialogs":
          - /url: ./dialogs.html
      - listitem:
        - link "Hover menus":
          - /url: ./hover-menu.html
      - listitem:
        - link "Right-click menu":
          - /url: ./context-menu.html
      - listitem:
        - link "Keyboard navigation":
          - /url: ./keyboard-form.html
      - listitem:
        - link "Windows & Tabs":
          - /url: ./windows-tabs.html
      - listitem:
        - link "Upload & Download":
          - /url: ./upload-download.html
      - listitem:
        - link "Scroll":
          - /url: ./scroll.html
      - listitem:
        - link "Assertions (expect)":
          - /url: ./expect.html
      - listitem:
        - link "Test modifiers · hooks · data":
          - /url: ./test-modifiers.html
      - listitem:
        - link "Data-driven + POM":
          - /url: ./data-driven.html
      - listitem:
        - link "JavaScript notes":
          - /url: ../notes.html
    - button "Network" [expanded]
    - list:
      - listitem:
        - link "Network interception":
          - /url: ../network/intercept.html
    - button "Coming next" [expanded]
    - list
  - text: © The Testing Academy · 2026
  - button "Toggle dark mode"
- banner:
  - button "Open sidebar"
  - link "Practice":
    - /url: ../index.html
  - text: Widgets
  - strong: Calendar / date picker
  - checkbox "Locator markers" [checked]
  - text: Locator markers 2-month range
  - button "Toggle dark mode"
- main:
  - region "Calendar date picker practice":
    - text: Widget practice · Date range
    - heading "Calendar date picker practice" [level=1]:
      - text: Calendar
      - emphasis: date picker
      - text: practice
    - paragraph:
      - text: A two-month range picker in the spirit of MakeMyTrip / SpiceJet — click a departure date, then a return date. Each day cell is a
      - code: role="button"
      - text: with a precise
      - code: aria-label
      - text: and a
      - code: data-date
      - text: attribute, so you can target dates with
      - code: getByRole
      - text: or
      - code: data-testid
      - text: "-style queries."
  - region "Calendar workspace":
    - article:
      - tablist "Trip type":
        - tab "One-way"
        - tab "Round-trip"
      - button "Departure Select date —" [expanded]
      - button "Return Select date —"
      - button "Search flights"
      - dialog "Pick a travel date":
        - button "Previous month" [disabled]:
          - img
        - heading "Choose departure" [level=3]
        - button "Next month":
          - img
        - paragraph: May 2026
        - text: Sun Mon Tue Wed Thu Fri Sat
        - button "Friday, May 1 2026" [disabled]: "1"
        - button "Saturday, May 2 2026" [disabled]: "2"
        - button "Sunday, May 3 2026" [disabled]: "3"
        - button "Monday, May 4 2026" [disabled]: "4"
        - button "Tuesday, May 5 2026" [disabled]: "5"
        - button "Wednesday, May 6 2026" [disabled]: "6"
        - button "Thursday, May 7 2026" [disabled]: "7"
        - button "Friday, May 8 2026" [disabled]: "8"
        - button "Saturday, May 9 2026" [disabled]: "9"
        - button "Sunday, May 10 2026" [disabled]: "10"
        - button "Monday, May 11 2026" [disabled]: "11"
        - button "Tuesday, May 12 2026" [disabled]: "12"
        - button "Wednesday, May 13 2026" [disabled]: "13"
        - button "Thursday, May 14 2026" [disabled]: "14"
        - button "Friday, May 15 2026" [disabled]: "15"
        - button "Saturday, May 16 2026" [disabled]: "16"
        - button "Sunday, May 17 2026" [disabled]: "17"
        - button "Monday, May 18 2026": "18"
        - button "Tuesday, May 19 2026": "19"
        - button "Wednesday, May 20 2026": "20"
        - button "Thursday, May 21 2026": "21"
        - button "Friday, May 22 2026": "22"
        - button "Saturday, May 23 2026": "23"
        - button "Sunday, May 24 2026": "24"
        - button "Monday, May 25 2026": "25"
        - button "Tuesday, May 26 2026": "26"
        - button "Wednesday, May 27 2026": "27"
        - button "Thursday, May 28 2026": "28"
        - button "Friday, May 29 2026": "29"
        - button "Saturday, May 30 2026": "30"
        - button "Sunday, May 31 2026": "31"
        - paragraph: June 2026
        - text: Sun Mon Tue Wed Thu Fri Sat
        - button "Monday, June 1 2026": "1"
        - button "Tuesday, June 2 2026": "2"
        - button "Wednesday, June 3 2026": "3"
        - button "Thursday, June 4 2026": "4"
        - button "Friday, June 5 2026": "5"
        - button "Saturday, June 6 2026": "6"
        - button "Sunday, June 7 2026": "7"
        - button "Monday, June 8 2026": "8"
        - button "Tuesday, June 9 2026": "9"
        - button "Wednesday, June 10 2026": "10"
        - button "Thursday, June 11 2026": "11"
        - button "Friday, June 12 2026": "12"
        - button "Saturday, June 13 2026": "13"
        - button "Sunday, June 14 2026": "14"
        - button "Monday, June 15 2026": "15"
        - button "Tuesday, June 16 2026": "16"
        - button "Wednesday, June 17 2026": "17"
        - button "Thursday, June 18 2026": "18"
        - button "Friday, June 19 2026": "19"
        - button "Saturday, June 20 2026": "20"
        - button "Sunday, June 21 2026": "21"
        - button "Monday, June 22 2026": "22"
        - button "Tuesday, June 23 2026": "23"
        - button "Wednesday, June 24 2026": "24"
        - button "Thursday, June 25 2026": "25"
        - button "Friday, June 26 2026": "26"
        - button "Saturday, June 27 2026": "27"
        - button "Sunday, June 28 2026": "28"
        - button "Monday, June 29 2026": "29"
        - button "Tuesday, June 30 2026": "30"
        - text: Pick a departure date.
        - button "Clear"
      - text: id =trigger-depart · trigger-return · picker · prev-month · next-month data-testid =trigger-depart / trigger-return / date-picker / prev-month / next-month / search-flights day cells =role=button · aria-label="Wednesday, May 7 2026" · data-date=YYYY-MM-DD No search yet — pick dates and click Search flights.
    - complementary:
      - heading "What students should practise" [level=3]
      - list:
        - listitem:
          - text: Click
          - code: trigger-depart
          - text: to open the picker, then click a day with
          - code: data-date="2026-05-12"
          - text: .
        - listitem:
          - text: Use
          - code: "getByRole('button', { name: /Tuesday, May 12 2026/ })"
          - text: for accessible-name targeting.
        - listitem:
          - text: Click
          - code: next-month
          - text: if your target date isn't visible in the current two-month window.
        - listitem: After picking departure, click another date and assert the range highlight spans both months.
        - listitem:
          - text: Hit
          - code: Clear
          - text: and confirm both triggers reset to "Select date".
        - listitem:
          - text: Pick a date in the past — assert the cell is
          - code: disabled
          - text: and the click is rejected.
      - group:
        - strong: Playwright solution
        - text: Open picker, navigate months, pick departure + return. Show solution
  - region "More date pickers":
    - heading "More date-picker patterns" [level=2]
    - paragraph: Four common variants you'll see on travel + booking sites. Each is built locally with no third-party widget — just enough DOM to practise locators on.
    - article:
      - heading "① One-way · single date picker" [level=3]
      - text: No return field
      - paragraph: Single trigger. Opens an inline picker. Selecting a date closes it and shows the value with day-of-week.
      - button "Travel date Select date —"
      - button "Search"
      - text: id =oneway-trigger · oneway-picker data-testid =oneway-trigger · oneway-value · oneway-picker · oneway-prev · oneway-next day cells =role=button · aria-label · data-date No date picked yet.
    - article:
      - heading "② Range + quick-pick chips + min/max constraint" [level=3]
      - text: No past dates
      - paragraph: Past days are disabled. Max range = +180 days. Chips below jump straight to a common range without opening the calendar.
      - toolbar "Quick date ranges":
        - button "Tomorrow"
        - button "This weekend"
        - button "Next week"
        - button "Next month"
        - button "Custom range…"
      - button "Depart Select —"
      - button "Return Select —"
      - button "Search"
      - text: "data-testid =qp-tomorrow · qp-weekend · qp-next-week · qp-next-month · qp-custom · qp-depart · qp-return · qp-picker constraints =past=disabled · max = +180 days day cell flags =data-disabled=\"true\" on past dates { \"depart\": null, \"return\": null }"
    - article:
      - heading "③ Native <input type=\"date\">" [level=3]:
        - text: ③ Native
        - code: <input type="date">
      - text: Browser-rendered
      - paragraph:
        - text: Playwright fills these with an ISO string —
        - code: fill('2026-06-15')
        - text: . No need to click cells. Browser-rendered popup; tests skip it entirely.
      - text: Depart
      - textbox "Depart"
      - text: Return
      - textbox "Return"
      - text: Time
      - textbox "Time"
      - button "Go"
      - text: id =native-depart · native-return · native-time data-testid =native-depart · native-return · native-time · native-go fill =ISO 8601 string · YYYY-MM-DD / HH:MM No values yet.
    - article:
      - heading "④ Month / year picker (card expiry style)" [level=3]
      - text: No day grid
      - paragraph:
        - text: "Two selects: month + year. Common on payment pages. Practise"
        - code: selectOption
        - text: .
      - text: Expiry month
      - combobox "Expiry month":
        - option "MM" [selected]
        - option "01 — Jan"
        - option "02 — Feb"
        - option "03 — Mar"
        - option "04 — Apr"
        - option "05 — May"
        - option "06 — Jun"
        - option "07 — Jul"
        - option "08 — Aug"
        - option "09 — Sep"
        - option "10 — Oct"
        - option "11 — Nov"
        - option "12 — Dec"
      - text: Expiry year
      - combobox "Expiry year":
        - option "YYYY" [selected]
        - option "2026"
        - option "2027"
        - option "2028"
        - option "2029"
        - option "2030"
        - option "2031"
        - option "2032"
        - option "2033"
        - option "2034"
        - option "2035"
      - button "Validate"
      - text: "id =exp-month · exp-year data-testid =exp-month · exp-year · exp-check API =locator.selectOption('05') / selectOption({ label: '2027' }) No expiry chosen yet."
    - article:
      - heading "⑤ jQuery-UI-style datepicker (text-driven navigation)" [level=3]
      - text: .ui-datepicker-title · Next / Prev text
      - paragraph:
        - text: Classic jQuery-UI pattern — single trigger, no
        - code: data-date
        - text: attributes, title shows
        - emphasis: Month Year
        - text: ", navigation by clicking a span containing"
        - emphasis: Next
        - text: /
        - emphasis: Prev
        - text: . Practise a loop that reads the title text and clicks Next until it matches your target month.
      - textbox "Click to open datepicker":
        - /placeholder: dd/mm/yyyy
      - button "Search"
      - text: id =datepicker · jq-picker · jq-prev · jq-next data-testid =datepicker-input · jq-picker · jq-prev · jq-next · ui-datepicker-title class =ui-datepicker · ui-datepicker-title · ui-datepicker-prev · ui-datepicker-next day cells =plain numeric text · click via
      - code: "getByText('16', { exact: true })"
      - text: No jQuery-style pick yet.
  - group:
    - strong: Playwright solution — all 4 extra pickers
    - text: One-way · quick-pick range · native input · month-year selects. Show solution
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | 
  3  | test.describe('URL and title Assertions',()=>{
  4  |     test('URL and title assertions',async({page})=>{
  5  |      await page.goto('https://app.thetestingacademy.com/playwright/widgets/calendar.html');
  6  |      await page.getByTestId('trigger-depart').click();
  7  |      await expect (page).toHaveTitle('Calendar Date Picker — The Testing Academy');
  8  |      await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/widgets/calendar');
  9  |      // --/calender/-->means anwhere in title(regular exp)
> 10 |      await expect(page).toHaveTitle(/calender/);
     |                         ^ Error: expect(page).toHaveTitle(expected) failed
  11 | 
  12 |      const appurl=page.url();
  13 |      expect(appurl).toContain('thetestingacademy');
  14 | 
  15 |     // expect(page.locator('')).toHaveCSS(''); // toHaveClass
  16 |     //await expect(page.locator('#title')).toHaveCSS('color', 'rgb(0, 0, 0)');
  17 |     });
  18 | });
```