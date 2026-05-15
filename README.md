# 🐉 Dragon — Tame Your Fury (v2)

A virtual pet game where you raise your own Night Fury or Light Fury dragon. Now with a **shop**, **17 outfits** (including holiday-themed!), **7 backgrounds**, and a **dialogue system** so your dragon talks to you. Built as a PWA for iPhone/Android home-screen install.

---

## 📦 What's in this folder

```
dragon_pet_game/
├── index.html            ← Full game (SVG dragon + shop + outfits + dialogue)
├── manifest.json         ← PWA app metadata
├── service-worker.js     ← Offline caching + notifications
├── README.md             ← This file
├── GITHUB_DEPLOYMENT.md  ← Deployment guide
└── icons/                ← App icons rendered from the SVG dragon
```

**Total size:** ~109KB for the game. Everything runs offline once installed.

---

## ✨ What's new in v2

### 🛒 Shop System
Tap the 🛍️ button (top right) to enter the dragon's market. Three tabs:
- **Outfits** — 17 cute accessories, layered stacking
- **Backgrounds** — 7 different scenes
- **Foods** — preview of premium foods (buy from feed menu)

### 👕 17 Stackable Outfits
Mix and match across 6 slots: head, face, neck, back, tail, body.

| Slot | Outfits |
|------|---------|
| **Head** | viking helmet, santa hat (🎄winter), bunny ears (🌸spring), royal crown, top hat, pumpkin hat (🍂fall), flower crown (🌸spring), party hat |
| **Face** | sunglasses, flight goggles, monocle, eye patch |
| **Neck** | red scarf (🎄winter), bow tie, gem necklace |
| **Back** | Hiccup's saddle, hero cape |
| **Tail** | tail ribbon bow |
| **Body** | Snoggletog sweater (🎄winter) |

All outfits **scale and move with the dragon** — breathing, flipping, sleeping. The bunny ears bounce when the dragon backflips!

**Holiday badges** show in-season items with a ☆ star — perfect time to buy.

### 🌄 7 Backgrounds
- 🌊 **The Cove** (default, free) — starry sky
- 🏘️ **Berk Village** (30 coins) — viking huts on the horizon
- 💎 **Hidden World** (60 coins) — glowing pulsing crystals
- ❄️ **Snowy Snoggletog** (40 coins) — falling snowflakes
- ☁️ **Above the Clouds** (35 coins) — soaring sky
- 🌅 **Golden Sunset** (45 coins) — glowing sun with halo
- 🌌 **Aurora Night** (55 coins) — northern lights ribbons

### 💬 Dialogue System
Your dragon now talks to you! Speech bubbles appear above its head:
- **Idle thoughts** — random thoughts every 25-60 seconds when content
- **Hungry mood** — "i'm hungry...", "*belly rumbles*", "feed me please!"
- **After actions** — "that tickles!" (pet), "yummy!" (fed), "EEL?! NEVER!" (eel)
- **Sad mood** — "*droops*", "did i do something wrong?"

Mix of cute baby talk, viking-themed lines, and `*action descriptions*` in italics.

Toggle off via menu → "dialogue: on/off"

### ⏱️ Reduced Cooldowns + Multi-Use Bursts
You can now do multiple actions before waiting!

| Action | Uses before cooldown | Cooldown |
|--------|---------------------|----------|
| ❤️ Love | **3 uses** | 1 hour |
| ✋ Pet | **5 uses** | 5 min |
| 🍖 Feed | **3 uses** | 45 min |
| 🛁 Bath | **2 uses** | 2 hours |
| 💤 Sleep | 1 use | 12 hours |

Yellow badges show remaining uses on each button.

### 🍯 9 Foods (3 premium)
Free: 🐟 salmon · 🐠 cod · 🍗 chicken · 🥩 mutton · 🍎 apple · 🪱 eel (still hates it!)

Premium (paid):
- 🐡 **Rare Tuna** (8 coins) — +45 food +15♥
- 🍯 **Dragon Treat** (6 coins) — +20 food +25♥
- 🎂 **Birthday Cake** (10 coins) — +35 food +20♥

### 🎨 Visual Polish
- **Light Fury contrast fix** — subtle gray outlines on body parts so the dragon doesn't blend into white backgrounds; darker mouth color (`#2a3050`) so the smile is visible
- **Sleep eyes COMPLETELY closed** — full eyelid coverage with eyelashes (no more half-open eyes during sleep)
- **Outfits scale with the dragon** — full breathing, flipping, action animations preserve the outfits properly

---

## 🚀 Deploy in 2 minutes (Netlify)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `dragon_pet_game` folder in
3. Get a URL like `https://magnificent-dragon-abc123.netlify.app`
4. Send to friends!

For GitHub Pages, see `GITHUB_DEPLOYMENT.md`.

---

## 📱 Install on iPhone

1. Open URL in **Safari** (not Chrome)
2. Tap **Share** → **Add to Home Screen**
3. Tap the dragon icon — opens fullscreen, no browser bars!

---

## 🎮 Gameplay

### Choose your dragon
- **Night Fury** — black scales, green eyes, red prosthetic tail fin
- **Light Fury** — pearl-white scales, blue eyes, white tail fin

Two profile slots so you can have both.

### Stats
- **Health** (♥) drains over ~40 hours
- **Hunger** (🍖) drains over ~30 hours
- **XP** — level up indefinitely

### Daily login
+5 free coins each new day.

### Runaway
Neglect for ~96 hours with empty bars and your dragon runs away with a goodbye letter. You get ONE chance to call them back.

---

## 🛠️ Tech notes

- **PWA** — offline once installed
- **No backend** — save data in browser localStorage
- **No tracking, no servers, no ads**
- **No copyright music** — sound effects synthesized via Web Audio API
- **Pure SVG dragon** — every part animated independently
- **Save key:** `dragon_pet_game_v2` (separate from v1, won't conflict)

---

## 🐛 Troubleshooting

**Outfits don't appear:** make sure your save migrated to v2. If you see an empty dragon, reload the page once.

**Game doesn't install on iPhone:** Use Safari, not Chrome.

**Sounds don't play:** iOS requires a tap before audio plays.

**Save data lost:** It's per-device. Clearing Safari data resets progress.

---

## ❤️ Made with love

Fan project. Not affiliated with DreamWorks or HTTYD.
