# Territory Scramble — English / 日本語 player guide

An illustrated manual preview covering keyboard/mouse and controller basics, enclosure, all eight items, base and cannon capture, menus and lobby controls. Use English / 日本語 in the header to switch languages. English: `index.html`. Japanese: `ja.html`. Chapter anchors are preserved when JavaScript is enabled; plain language links also work without JavaScript.

## GitHub Pages

Publication is deferred at the owner's request (14 October 2026). Keep this repository private and do not enable Pages yet. The current plan rejected Pages for this private repository. The following instructions are for a future, approved publication.
Publish from **main / (root)** under **Settings → Pages → Deploy from a branch**.
Private-repository Pages requires an eligible GitHub plan.

Expected project URL: https://xmj999.github.io/territory_scramble.github.io/

No build step is required. `index.html`, `ja.html`, `styles.css`, `manual.js` and `assets/` make up the website. Relative asset paths support the project URL. `.nojekyll` serves these files directly.

## Content and images

Twenty captures show the real game and UI. Match images are staged for explanation with the HUD hidden and camera adjusted. The enclosure pair uses the actual game capture logic. Item images show all eight actual pickup prefabs. Menus and the lobby have separate English/Japanese captures. The lobby was photographed in a local-host loopback session, not a public Steam session. Development-only menu options are hidden to match the release UI.

This remains a preview. Languages other than English/Japanese, in-game integration and PDF export are not included. Website publication and Steam store links remain deferred.

Source snapshot: game repository commit `999649d`, `website/manual/dist/`. Update both language pages and the comparison text in `manual.js` in the game repository, then copy the HTML, CSS, JavaScript and PNG images here. Do not upload the game source, raw models, credentials or hosting configuration for other services.
