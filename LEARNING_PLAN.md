<<<<<<< HEAD
# Hotel Booking App — Feature Onboarding Plan

| Phase | Focus | Status |
|---|---|---|
| 1 | System immersion: understand how `index.html`, `styles.css`, and `script.js` work together | Complete |
| 2 | Feature ticket 1: add a visible booking price estimate | Complete |
| 3 | Feature ticket 2: improve guest safety with clearer date and form messages | Complete |
| 4 | Final handoff: test the booking flow and explain the project like its owner | Complete |
| 5 | Feature ticket 3: add a currency converter choice to the booking form | Complete |
| 6 | Feature ticket 4: show a live price preview before reservation | Complete |
| 7 | Feature ticket 5: add a gallery page guests can browse before booking | Complete |
| 8 | Feature ticket 6: let gallery cards preselect a room on the booking form | Complete |

## Phase 5 — tiny tasks
- Add a currency choice field to `index.html`.
- Add exchange rates to `script.js`.
- Convert the booking total into the selected currency.
- Verify with one real booking and one currency choice.

## Phase 6 — tiny tasks
- Add a live estimate area to `index.html`.
- Create one reusable calculation function in `script.js`.
- Update the estimate when room, dates, or currency changes.
- Keep the final reservation message using the same calculation.
- Verify the preview and final message match.

## Phase 6 evidence
- Preview showed: `Live estimate: 3 night(s) in the Garden Room will cost €331.20 EUR.`
- Final confirmation showed: `Maya, your Garden Room is reserved for 3 night(s), from 2026-09-01 to 2026-09-04. Estimated total: €331.20 EUR.`

## Phase 7 — tiny tasks
- Add navigation links so guests can move between booking and gallery pages.
- Create `gallery.html` as the new photo album page.
- Reuse `styles.css` so both pages feel like the same hotel website.
- Add room photo cards with descriptive text.
- Verify both pages link to each other correctly.

## Phase 7 evidence
- `index.html` has navigation links to `index.html` and `gallery.html`.
- `gallery.html` exists as the photo album page and links back to `index.html`.
- `styles.css` styles `.site-nav`, `.gallery`, `.gallery-card`, and `.gallery-image` so both pages share one visual system.
- Learner explained: `index.html` is the main booking page, `gallery.html` is another website page, and `styles.css` styles the pages.

## Phase 8 — tiny tasks
- Add a “Book this room” link to each gallery card.
- Put the room name inside each link as a URL parameter.
- Teach `script.js` to read the room parameter when the booking page loads.
- Preselect the matching room in the booking form.
- Verify by opening a gallery room link and checking the form choice.

## Phase 8 evidence
- `gallery.html` sends room choices with links like `index.html?room=Ocean%20Suite`.
- `script.js` reads the URL clue with `new URLSearchParams(window.location.search)` and `.get("room")`.
- The booking form selected `Ocean Suite` after the learner clicked “Book the Ocean Suite” from the gallery.
- Learner identified that `room` is the clue name before the `=` in `index.html?room=Ocean%20Suite`.
=======
# Hotel Booking App — Learning Plan

| Phase | Focus | Status |
|---|---|---|
| 1 | Build the first hotel web page: headings, sections, room cards | Complete |
| 2 | Style the page so it feels like a real hotel site | Complete |
| 3 | Add a booking form for guest name, dates, and room choice | Complete |
| 4 | Make the page react to clicks and show a booking summary | Complete |
| 5 | Save bookings in the browser so they stay after refresh | Complete |
| 6 | Final polish: review the app, test it, and explain how it works | Complete |

## Phase 1 — tiny tasks
- Create the three core files: `index.html`, `styles.css`, and `script.js`.
- Put the hotel page structure into `index.html`.
- Connect the CSS and JavaScript files to the page.
- Open the page and prove the first hotel room cards appear.

## Phase 2 — tiny tasks
- Add colors, spacing, and fonts.
- Turn rooms into clear cards.
- Make the page readable on small screens.

## Phase 3 — tiny tasks
- Build a booking form.
- Add fields for guest name, room, check-in, and check-out.
- Learn why labels make forms easier to use.

## Phase 4 — tiny tasks
- Listen for the form submit button.
- Read what the guest typed.
- Show a friendly booking summary on the page.

## Phase 5 — tiny tasks
- Store bookings with browser local storage.
- Load saved bookings when the page opens.
- Add a simple clear-bookings button.

## Phase 6 — tiny tasks
- Test the full booking flow.
- Clean up names and file organization.
- Explain the app out loud from files to screen.
>>>>>>> 44c1e25a86be38a3bc0982e411ade668cbbed285
