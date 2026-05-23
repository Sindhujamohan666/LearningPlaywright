# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Tasks\Hover.spec.ts >> Validate Hover
- Location: tests\Tasks\Hover.spec.ts:3:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Cart"
Received string:    "📶
Wi-Fi"
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - 'region "Announcement: AI Tester Blueprint new batch" [ref=e2]':
    - generic [ref=e3]: LIVE
    - generic [ref=e5]: AI Tester Blueprint
    - generic [ref=e6]: New batch
    - generic [ref=e7]: "|"
    - generic [ref=e8]: 23 May 2026 · 11:00 AM IST
    - generic [ref=e9]: "|"
    - generic [ref=e10]:
      - text: ₹35,000₹9,999
      - emphasis [ref=e11]: 33% OFF
    - generic [ref=e12]:
      - text: Code
      - code [ref=e13]: AITESTER
    - link "Join" [ref=e14] [cursor=pointer]:
      - /url: https://bit.ly/aitester2026
    - link "Chat on WhatsApp" [ref=e15] [cursor=pointer]:
      - /url: https://sdet.live/WhatsApp
      - text: ☎
    - button "Dismiss banner" [ref=e16] [cursor=pointer]: ×
  - generic [ref=e17]:
    - complementary "Practice navigation" [ref=e18]:
      - generic [ref=e19]:
        - link "T The Testing Academy" [ref=e20] [cursor=pointer]:
          - /url: ../index.html
          - generic [ref=e21]: T
          - strong [ref=e23]: The Testing Academy
        - button "Toggle sidebar" [ref=e24] [cursor=pointer]:
          - img [ref=e25]
      - generic [ref=e28]:
        - img [ref=e29]
        - searchbox / [ref=e32]
        - generic [ref=e33]: /
      - navigation [ref=e34]:
        - generic [ref=e35]:
          - button "Get started" [expanded] [ref=e36] [cursor=pointer]:
            - img [ref=e37]
            - generic [ref=e39]: Get started
            - img [ref=e40]
          - list [ref=e42]:
            - listitem [ref=e43]:
              - link "Overview" [ref=e44] [cursor=pointer]:
                - /url: ../index.html
                - img [ref=e46]
                - generic [ref=e49]: Overview
        - generic [ref=e50]:
          - button "Tools" [expanded] [ref=e51] [cursor=pointer]:
            - img [ref=e52]
            - generic [ref=e54]: Tools
            - img [ref=e55]
          - list [ref=e57]:
            - listitem [ref=e58]:
              - link "SnapLocator (Chrome ext)" [ref=e59] [cursor=pointer]:
                - /url: ../snaplocator.html
                - generic [ref=e61]: SnapLocator (Chrome ext)
        - generic [ref=e62]:
          - button "Selectors & Locators" [expanded] [ref=e63] [cursor=pointer]:
            - img [ref=e64]
            - generic [ref=e66]: Selectors & Locators
            - img [ref=e67]
          - list [ref=e69]:
            - listitem [ref=e70]:
              - link "Multiple Element Filter" [ref=e71] [cursor=pointer]:
                - /url: ../multiple_element_filter.html
                - img [ref=e73]
                - generic [ref=e76]: Multiple Element Filter
            - listitem [ref=e77]:
              - link "Web Table Directory" [ref=e78] [cursor=pointer]:
                - /url: ../webtable.html
                - img [ref=e80]
                - generic [ref=e85]: Web Table Directory
        - generic [ref=e86]:
          - button "Tables & Forms" [expanded] [ref=e87] [cursor=pointer]:
            - img [ref=e88]
            - generic [ref=e91]: Tables & Forms
            - img [ref=e92]
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "QA Profile Form" [ref=e96] [cursor=pointer]:
                - /url: ../tables/practice.html
                - img [ref=e98]
                - generic [ref=e101]: QA Profile Form
            - listitem [ref=e102]:
              - link "Companies Table" [ref=e103] [cursor=pointer]:
                - /url: ../tables/webtable.html
                - img [ref=e105]
                - generic [ref=e108]: Companies Table
            - listitem [ref=e109]:
              - link "Tall Buildings Table" [ref=e110] [cursor=pointer]:
                - /url: ../tables/webtable1.html
                - img [ref=e112]
                - generic [ref=e114]: Tall Buildings Table
            - listitem [ref=e115]:
              - link "Custom Dropdowns" [ref=e116] [cursor=pointer]:
                - /url: ../tables/dropdowns.html
                - img [ref=e118]
                - generic [ref=e121]: Custom Dropdowns
            - listitem [ref=e122]:
              - link "Select Box Variants" [ref=e123] [cursor=pointer]:
                - /url: ../tables/select-boxes.html
                - img [ref=e125]
                - generic [ref=e128]: Select Box Variants
            - listitem [ref=e129]:
              - link "Sortable Admin Table" [ref=e130] [cursor=pointer]:
                - /url: ../tables/sortable.html
                - generic [ref=e132]: Sortable Admin Table
            - listitem [ref=e133]:
              - link "Cricket Scorecard" [ref=e134] [cursor=pointer]:
                - /url: ../tables/scorecard.html
                - generic [ref=e136]: Cricket Scorecard
        - generic [ref=e137]:
          - button "Frames" [expanded] [ref=e138] [cursor=pointer]:
            - img [ref=e139]
            - generic [ref=e144]: Frames
            - img [ref=e145]
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Frames overview" [ref=e149] [cursor=pointer]:
                - /url: ../frames/index.html
                - img [ref=e151]
                - generic [ref=e153]: Frames overview
            - listitem [ref=e154]:
              - link "Multi-frame frameset" [ref=e155] [cursor=pointer]:
                - /url: ../frames/multi-frames.html
                - img [ref=e157]
                - generic [ref=e162]: Multi-frame frameset
            - listitem [ref=e163]:
              - link "Nested iframes" [ref=e164] [cursor=pointer]:
                - /url: ../frames/nested-iframes.html
                - img [ref=e166]
                - generic [ref=e170]: Nested iframes
            - listitem [ref=e171]:
              - link "Courses frameset" [ref=e172] [cursor=pointer]:
                - /url: ../frames/courses-frameset.html
                - generic [ref=e174]: Courses frameset
        - generic [ref=e175]:
          - button "Widgets" [expanded] [ref=e176] [cursor=pointer]:
            - img [ref=e177]
            - generic [ref=e180]: Widgets
            - img [ref=e181]
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "SVG locators" [ref=e185] [cursor=pointer]:
                - /url: ./svg.html
                - generic [ref=e187]: SVG locators
            - listitem [ref=e188]:
              - link "Shadow DOM" [ref=e189] [cursor=pointer]:
                - /url: ./shadow-dom.html
                - generic [ref=e191]: Shadow DOM
            - listitem [ref=e192]:
              - link "Calendar / date picker" [ref=e193] [cursor=pointer]:
                - /url: ./calendar.html
                - generic [ref=e195]: Calendar / date picker
            - listitem [ref=e196]:
              - link "Drag & drop Kanban" [ref=e197] [cursor=pointer]:
                - /url: ./dnd.html
                - generic [ref=e199]: Drag & drop Kanban
            - listitem [ref=e200]:
              - link "Toasts & notifications" [ref=e201] [cursor=pointer]:
                - /url: ./toasts.html
                - generic [ref=e203]: Toasts & notifications
            - listitem [ref=e204]:
              - link "Native dialogs" [ref=e205] [cursor=pointer]:
                - /url: ./dialogs.html
                - generic [ref=e207]: Native dialogs
            - listitem [ref=e208]:
              - link "Hover menus" [ref=e209] [cursor=pointer]:
                - /url: ./hover-menu.html
                - generic [ref=e211]: Hover menus
            - listitem [ref=e212]:
              - link "Right-click menu" [ref=e213] [cursor=pointer]:
                - /url: ./context-menu.html
                - generic [ref=e215]: Right-click menu
            - listitem [ref=e216]:
              - link "Keyboard navigation" [ref=e217] [cursor=pointer]:
                - /url: ./keyboard-form.html
                - generic [ref=e219]: Keyboard navigation
            - listitem [ref=e220]:
              - link "Windows & Tabs" [ref=e221] [cursor=pointer]:
                - /url: ./windows-tabs.html
                - img [ref=e223]
                - generic [ref=e225]: Windows & Tabs
            - listitem [ref=e226]:
              - link "Upload & Download" [ref=e227] [cursor=pointer]:
                - /url: ./upload-download.html
                - img [ref=e229]
                - generic [ref=e232]: Upload & Download
            - listitem [ref=e233]:
              - link "Scroll" [ref=e234] [cursor=pointer]:
                - /url: ./scroll.html
                - generic [ref=e236]: Scroll
            - listitem [ref=e237]:
              - link "Assertions (expect)" [ref=e238] [cursor=pointer]:
                - /url: ./expect.html
                - generic [ref=e240]: Assertions (expect)
            - listitem [ref=e241]:
              - link "Test modifiers · hooks · data" [ref=e242] [cursor=pointer]:
                - /url: ./test-modifiers.html
                - generic [ref=e244]: Test modifiers · hooks · data
            - listitem [ref=e245]:
              - link "Data-driven + POM" [ref=e246] [cursor=pointer]:
                - /url: ./data-driven.html
                - generic [ref=e248]: Data-driven + POM
            - listitem [ref=e249]:
              - link "JavaScript notes" [ref=e250] [cursor=pointer]:
                - /url: ../notes.html
                - generic [ref=e252]: JavaScript notes
        - generic [ref=e253]:
          - button "Network" [expanded] [ref=e254] [cursor=pointer]:
            - img [ref=e255]
            - generic [ref=e258]: Network
            - img [ref=e259]
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link "Network interception" [ref=e263] [cursor=pointer]:
                - /url: ../network/intercept.html
                - generic [ref=e265]: Network interception
        - generic [ref=e266]:
          - button "Coming next" [expanded] [ref=e267] [cursor=pointer]:
            - img [ref=e268]
            - generic [ref=e270]: Coming next
            - img [ref=e271]
          - list
      - generic [ref=e273]:
        - generic [ref=e274]: © The Testing Academy · 2026
        - button "Toggle dark mode" [ref=e275] [cursor=pointer]:
          - img [ref=e276]
    - generic [ref=e278]:
      - banner [ref=e279]:
        - button "Open sidebar" [ref=e280] [cursor=pointer]:
          - img [ref=e281]
        - generic [ref=e283]:
          - link "Practice" [ref=e284] [cursor=pointer]:
            - /url: ../index.html
          - img [ref=e285]
          - generic [ref=e287]: Widgets
          - img [ref=e288]
          - strong [ref=e290]: Hover menus
        - generic [ref=e291]:
          - generic [ref=e292] [cursor=pointer]:
            - checkbox "Locator markers" [checked] [ref=e293]
            - generic [ref=e294]: Locator markers
          - generic [ref=e295]: 2-level hover
          - button "Toggle dark mode" [ref=e296] [cursor=pointer]:
            - img [ref=e297]
            - img [ref=e299]
      - main [ref=e302]:
        - region "Hover-only menus" [ref=e303]:
          - generic [ref=e304]: Widget practice · Hover menus
          - heading "Hover-only menus" [level=1] [ref=e306]:
            - text: Hover-only
            - emphasis [ref=e307]: menus
          - paragraph [ref=e308]:
            - text: A travel-style top nav. Hover the parent item to reveal a submenu, hover an item with a chevron to reveal a nested submenu. No click opens it — pure CSS hover. Practise
            - code [ref=e309]: locator.hover()
            - text: then click an item that only exists after hover.
        - generic [ref=e310]:
          - article [ref=e312]:
            - heading "① Hover the parent → click child" [level=2] [ref=e313]
            - paragraph [ref=e314]:
              - text: Hover
              - emphasis [ref=e315]: Add-ons
              - text: to reveal Taxi / Hotel / Insurance / Meal / Wifi / Activities. Click any item.
            - navigation "Travel main" [ref=e316]:
              - generic [ref=e317]: Flights
              - generic [ref=e318]: Hotels
              - generic [ref=e319]:
                - text: Add-ons
                - menu "Add-ons submenu" [ref=e320]:
                  - menuitem "🚖 Taxi" [ref=e321] [cursor=pointer]:
                    - generic [ref=e322]: 🚖
                    - text: Taxi
                  - menuitem "🏨 Hotel" [ref=e323] [cursor=pointer]:
                    - generic [ref=e324]: 🏨
                    - text: Hotel
                  - menuitem "🛡️ Insurance" [ref=e325] [cursor=pointer]:
                    - generic [ref=e326]: 🛡️
                    - text: Insurance
                  - menuitem "🍽️ Meal" [ref=e327] [cursor=pointer]:
                    - generic [ref=e328]: 🍽️
                    - text: Meal
                  - menuitem "📶 Wi-Fi" [active] [ref=e329] [cursor=pointer]:
                    - generic [ref=e330]: 📶
                    - text: Wi-Fi
                  - menuitem "🎟️ Activities" [ref=e331] [cursor=pointer]:
                    - generic [ref=e332]: 🎟️
                    - text: Activities
              - generic [ref=e333]: Holidays
              - generic [ref=e334]: Account › ›
            - generic [ref=e335]:
              - generic [ref=e336]:
                - generic [ref=e337]: data-testid
                - text: =nav-add-ons · nav-account
              - generic [ref=e338]:
                - generic [ref=e339]: children
                - text: =test-id-Taxi · test-id-Hotel · test-id-Insurance · test-id-Meal · test-id-Wifi · test-id-Activities
              - generic [ref=e340]:
                - generic [ref=e341]: nested
                - text: =test-id-Upcoming · test-id-Past · test-id-Cancelled (Account → Bookings)
            - generic [ref=e342]: "{ \"clicked\": \"📶\\nWi-Fi\", \"testId\": \"test-id-Wifi\", \"at\": \"5:11:35 PM\" }"
          - complementary [ref=e343]:
            - generic [ref=e344]:
              - heading "What students should practise" [level=3] [ref=e345]
              - list [ref=e346]:
                - listitem [ref=e347]:
                  - text: Hover
                  - code [ref=e348]: data-testid="nav-add-ons"
                  - text: ", then click"
                  - code [ref=e349]: data-testid="test-id-Taxi"
                  - text: .
                - listitem [ref=e350]:
                  - text: Use
                  - code [ref=e351]: "getByText('Add-ons', { exact: true }).hover()"
                  - text: +
                  - code [ref=e352]: getByTestId('test-id-Taxi').click()
                  - text: .
                - listitem [ref=e353]:
                  - text: Hover
                  - emphasis [ref=e354]: Account
                  - text: ", hover"
                  - emphasis [ref=e355]: Bookings
                  - text: (chevron item), click
                  - emphasis [ref=e356]: Upcoming
                  - text: .
                - listitem [ref=e357]:
                  - text: Assert the submenu becomes visible only after hover (
                  - code [ref=e358]: toBeVisible()
                  - text: on hover,
                  - code [ref=e359]: toBeHidden()
                  - text: after mouse-out).
                - listitem [ref=e360]:
                  - text: Read every Add-ons child text via
                  - code [ref=e361]: locator('.submenu .submenu-item').allInnerTexts()
                  - text: after hover.
            - group [ref=e362]:
              - generic "Playwright solution Single hover, then nested hover. Show solution" [ref=e363] [cursor=pointer]:
                - img [ref=e365]
                - generic [ref=e367]:
                  - strong [ref=e368]: Playwright solution
                  - generic [ref=e369]: Single hover, then nested hover.
                - generic [ref=e370]: Show solution
```

# Test source

```ts
  1  | import{test,expect,Locator} from '@playwright/test';
  2  | 
  3  | test('Validate Hover',async({page})=>{
  4  |      await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
  5  |      //hover on add ons -data-testid="nav-add-ons"
  6  |      await page.getByTestId('nav-add-ons').hover();
  7  |      //Get all the options in add-ons
  8  |      //allinnerText is not available for Locator type .It can be used for string only as below line
  9  |      //await page.locator("div[aria-label='Add-ons submenu'] >a").allInnerTexts();
  10 |      const addonList:Locator[]=await page.locator("div[aria-label='Add-ons submenu'] >a").all();
  11 |      console.log(addonList);
  12 |      //click on wifi
  13 |      await page.getByTestId('test-id-Wifi').click();
  14 |      //get data from output--id=output 
  15 |      const output=await page.locator('#output').innerText();
  16 |      console.log(output);
  17 | 
  18 |      //convert the output object to json
  19 |      const data=JSON.parse(output);
> 20 |      expect(data.clicked).toContain('Cart');
     |                           ^ Error: expect(received).toContain(expected) // indexOf
  21 | 
  22 |      await page.waitForTimeout(5000);
  23 | });
```