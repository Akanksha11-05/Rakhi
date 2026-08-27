# Rakhi Gift Website — Setup

## 1. Files to copy into your existing project

Copy everything from this folder into your project, matching these paths:

```
src/App.jsx                     → replace
src/main.jsx                    → replace
src/index.css                   → replace
src/components/Welcome.jsx      → create
src/components/Letter.jsx       → create
src/components/Memories.jsx     → create
src/components/Appreciation.jsx → create
src/components/FunnySection.jsx → create
src/components/PhotoReveal.jsx  → create
src/components/FinalMessage.jsx → create
src/components/FinalSurprise.jsx→ create
src/components/Decor.jsx        → create
src/components/MusicButton.jsx  → create
tailwind.config.js              → replace (or merge the `theme.extend` into yours)
postcss.config.js               → only needed if you don't already have one
index.html                      → only the <title> matters, merge if you already have one
```

## 2. Install Tailwind (skip if already set up)

```bash
npm install -D tailwindcss postcss autoprefixer
```

You already have `framer-motion` and `lucide-react` installed, so nothing
else is required there.

## 3. Add your photos

Drop your photos into `src/assets/` using these exact filenames
(or edit the filenames inside `Memories.jsx` and `PhotoReveal.jsx`
to match whatever you name them):

```
src/assets/memory1.jpg   → used in the Memories gallery
src/assets/memory2.jpg   → used in the Memories gallery
src/assets/memory3.jpg   → used in the Memories gallery
src/assets/memory4.jpg   → used in the Memories gallery
src/assets/brother1.jpg  → used in the full-screen Special Photo Reveal
```

If a photo is missing, that card just shows a soft placeholder heart
instead of breaking — so you can preview the site before your photos
are ready.

**Note:** the video you uploaded couldn't be used as a source image —
if you want a frame from it as one of the photos, export a screenshot
from the video and save it as one of the filenames above.

## 4. Add music (optional)

Drop an mp3 at:

```
src/assets/music.mp3
```

The music button in the bottom-right corner will start playing after
your brother taps "OPEN IT ♡" on the welcome screen (browsers block
autoplay before any click). If there's no file there, the button
simply does nothing instead of crashing the site.

## 5. Run it

```bash
npm run dev
```

## 6. Personalize further

- All the Marathi/English copy lives directly inside each component
  file in `src/components/` — search for the text you want to change.
- Colors and fonts are defined in `tailwind.config.js` under
  `theme.extend` (rose, peach, cream, gold) and loaded via Google
  Fonts at the top of `src/index.css` (Caveat for headlines, Poppins
  + Noto Sans Devanagari for body/Marathi text).
- The dotted line with two gold dots you'll see between sections
  (`.rakhi-thread` in `index.css`) is the site's signature motif — a
  little visual nod to the rakhi thread itself.
