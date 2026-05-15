# 🚀 GitHub Pages Deployment — Step by Step

This is the **complete walkthrough** to host your dragon game on GitHub Pages for free, forever, with a permanent URL you can share.

**Time required:** ~10-15 minutes (longer the first time, faster afterward)

**What you'll end up with:** A URL like `https://yourusername.github.io/dragon-game/` that anyone can visit. Friends open it on their iPhone Safari → Add to Home Screen → done.

---

## 📋 What you need before starting

- [ ] A computer (Mac, Windows, or Linux)
- [ ] A web browser
- [ ] An email address
- [ ] The `dragon_pet_game.zip` file (downloaded from this chat)

You do **NOT** need to install Git, the command line, or any developer tools. We'll do everything through the GitHub website.

---

## Step 1 — Create a GitHub account (skip if you have one)

1. Go to **[https://github.com](https://github.com)**
2. Click **"Sign up"** (top right)
3. Enter your email, create a password, choose a username
   - 💡 **Pick your username carefully** — it'll be in your game's URL forever (e.g., `https://YOURUSERNAME.github.io/dragon-game/`)
   - Good usernames: short, easy to type, no weird characters
4. Verify your email (check your inbox for GitHub's confirmation email)
5. You're in!

---

## Step 2 — Unzip the game files on your computer

1. Find `dragon_pet_game.zip` (probably in your Downloads folder)
2. **Double-click it** to unzip
   - **Mac:** It unzips automatically into a folder called `dragon_pet_game`
   - **Windows:** Right-click → "Extract All" → click "Extract"
3. Open the `dragon_pet_game` folder. You should see:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `README.md`
   - `sprites/` folder (with all the .webp files)
   - `icons/` folder (with all the .png files)

✅ **Don't go inside any subfolder yet.** You need to upload the *contents* of the `dragon_pet_game` folder, not the folder itself.

---

## Step 3 — Create a new repository

1. Once logged into GitHub, click the **"+" icon** in the top-right corner
2. Click **"New repository"**
3. Fill in:
   - **Repository name:** `dragon-game` (or whatever you want — this becomes part of your URL)
   - **Description:** (optional) "A virtual pet dragon game"
   - **Public** ✅ (must be public for free GitHub Pages hosting)
   - **DO NOT** check "Add a README file" (we'll upload our own)
   - **DO NOT** add a `.gitignore` or license
4. Click **"Create repository"** (green button at the bottom)

You'll land on a page with instructions for an empty repository. **Ignore those instructions.** We're going to upload files through the web instead.

---

## Step 4 — Upload all the game files

On the empty repo page, look for the link that says **"uploading an existing file"** in the middle of the page. Click it.

(If you can't find it, the direct URL is `https://github.com/YOURUSERNAME/dragon-game/upload/main`)

You'll see a "Drag files here to add them to your repository" box.

### Upload procedure:

1. Open the unzipped `dragon_pet_game` folder on your computer
2. Select **all the contents inside it** — but NOT the folder itself
   - **Mac:** Click `index.html`, then Cmd+A (select all), or shift-click to multi-select
   - **Windows:** Click `index.html`, then Ctrl+A (select all)
3. **Drag everything into the GitHub upload box** in your browser
   - This includes: the files (`index.html`, `manifest.json`, etc.) AND the folders (`sprites/`, `icons/`)
4. GitHub will show "Uploading X files" and progress bars
5. Wait for them all to finish uploading (might take 30 seconds)

### Commit the upload:

Scroll to the bottom of the page. You'll see:
- A box titled **"Commit changes"**
- A text field with placeholder text like "Add files via upload"

1. Leave the default message OR write something like "first upload"
2. Make sure **"Commit directly to the `main` branch"** is selected
3. Click the green **"Commit changes"** button

🎉 You should now see your repository filled with all the game files!

**Verify:** You should see `index.html`, `manifest.json`, `README.md`, `service-worker.js`, and the `icons/` and `sprites/` folders all listed. If `sprites/` or `icons/` are missing, drag them in again.

---

## Step 5 — Turn on GitHub Pages

This is the magic step that makes your repo into a hosted website.

1. In your repo, click the **"Settings"** tab (it's at the top of the page, on the right side of the menu bar)
2. In the left sidebar, find and click **"Pages"** (under the "Code and automation" section)
3. Under **"Build and deployment"**:
   - **Source:** Select **"Deploy from a branch"**
   - **Branch:** Select **"main"** from the dropdown, then **"/ (root)"** for the folder
   - Click **"Save"**
4. The page will refresh and show a message like "Your site is being built..."

**Wait 1-2 minutes** for GitHub to build your site. Refresh the page after a minute.

When it's ready, you'll see a green box that says:
> ✅ Your site is live at `https://YOURUSERNAME.github.io/dragon-game/`

🎊 **THAT'S YOUR GAME URL!** Click it to open the game.

---

## Step 6 — Test it on your phone

1. Open Safari on your iPhone (must be Safari for iOS, NOT Chrome)
2. Type in your URL: `https://YOURUSERNAME.github.io/dragon-game/`
3. The game should load!
4. Tap the **Share button** (square with up-arrow) at the bottom
5. Scroll down → tap **"Add to Home Screen"**
6. Confirm by tapping **"Add"** in the top right
7. Your dragon icon now appears on your home screen — tap it!
8. The game opens **fullscreen** with no Safari bars 🐉✨

---

## Step 7 — Share with friends

Just send them the URL via text/iMessage/anything:

> *Hey, made a Toothless game! Check it out: https://YOURUSERNAME.github.io/dragon-game/*
> *Open in Safari on iPhone, then Share → Add to Home Screen for the full experience!*

---

## 🛠️ Troubleshooting

### "404 — File not found" when opening the URL
- **Wait a few more minutes.** GitHub Pages can take up to 10 minutes for the first deploy.
- Make sure GitHub Pages is set to deploy from `main` branch / root in Settings → Pages.
- Make sure `index.html` is in the **root** of the repo (not inside a subfolder).

### Files uploaded but `sprites/` folder is missing
- This sometimes happens if you dragged the parent folder by accident.
- Solution: Go to your repo, click "Add file" → "Upload files", drag the `sprites` folder in, commit.
- Same for the `icons/` folder.

### Game loads but dragon doesn't appear
- The `sprites/` folder didn't upload. See above fix.
- Check the browser developer console (right-click → Inspect → Console tab) for "404" errors — they'll tell you which file is missing.

### "Add to Home Screen" doesn't show my custom icon
- iOS caches icons aggressively. Try:
  1. Remove any old version of the app from your home screen
  2. Close all Safari tabs of the site
  3. Clear Safari history (Settings → Safari → Clear History and Website Data)
  4. Reopen the URL in Safari and add to home screen again

### My friend's progress disappeared
- Save data is per-device. If they cleared their Safari cache or used a different browser, their dragon resets. Cloud sync is a v2 feature.

### Sounds don't play
- iOS requires the user to **tap something** before audio is allowed. The first action they tap will enable sound.
- Sound can also be disabled — open the menu (☰ icon top right) → toggle sound.

---

## 🔄 How to update the game later

When we make v2 (with shop, clothing, etc.), here's how you update your hosted game:

1. Go to your repo on GitHub
2. Click on the file you want to replace (e.g., `index.html`)
3. Click the **pencil icon** (top right of file viewer) to edit
4. Replace contents OR delete the file and re-upload a new version
5. Commit the change
6. GitHub Pages automatically rebuilds and pushes the update (1-2 min)
7. Friends will get the update next time they open the app

For bigger updates (multiple files):
1. Click "Add file" → "Upload files" at the repo root
2. Drag the new versions in (they'll overwrite existing files with the same name)
3. Commit

---

## 💡 Pro tips

- **Custom domain (optional, free):** If you own a domain (like `mydragongame.com`), you can point it at your GitHub Pages site for free in Settings → Pages → Custom domain.
- **Versioning:** GitHub keeps a history of every change. If you mess something up, you can roll back to an earlier version easily.
- **Multiple games:** You can host multiple projects on the same GitHub account — each one becomes its own repo with its own URL.
- **Privacy:** GitHub Pages sites are public, but no one will find yours unless you share the link. There's no search index entry.

---

## 🆘 Stuck?

If you hit a wall, the most common fix is to just **delete the repo and start fresh**:
1. Settings → scroll to the bottom → "Delete this repository"
2. Confirm deletion
3. Start over from Step 3

Alternative: use **Netlify Drop** instead — it's even easier:
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `dragon_pet_game` folder in
3. Done — they give you a URL immediately

The downside of Netlify Drop is the URL is randomly generated (like `magnificent-toothless-abc123.netlify.app`) unless you sign up for a free account.

---

Have fun, dragon trainer! 🐉⚔️
