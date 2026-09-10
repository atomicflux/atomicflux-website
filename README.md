# atomicflux.app

Website for **1%**, an iOS habit-tracking app by Doruk Ersoy. This site exists
mainly to satisfy Apple App Store Connect's requirements:

- **Privacy Policy URL** → `/privacy/`
- **Support URL** → `/support/`
- Marketing landing page → `/` (currently a placeholder — real design pending)

## Structure

```
index.html          Landing page (placeholder, to be redesigned)
privacy/index.html  Privacy policy (sourced from the app repo's PRIVACY_POLICY.md)
support/index.html  Support / FAQ / contact
CNAME                Custom domain config for GitHub Pages
```

## Deploying

This is a static site served via **GitHub Pages**.

1. Push this repo to GitHub (e.g. `atomicflux/atomicflux-website` or similar).
2. In the repo's Settings → Pages, set source to "Deploy from a branch",
   branch `main`, folder `/ (root)`.
3. In your domain registrar (Squarespace/Google Domains), add the DNS
   records GitHub gives you for a custom apex domain (see below).
4. Wait for DNS to propagate (~minutes to a few hours), then enable
   "Enforce HTTPS" in the Pages settings once available.

### DNS records (apex domain `atomicflux.app`)

Add these **A** records at your registrar, pointing the apex domain to
GitHub Pages' IPs:

```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

Optionally, if you also want `www.atomicflux.app` to work, add:

```
CNAME    www    <your-github-username>.github.io.
```

## Keeping the privacy policy in sync

The privacy policy here is a copy of
`Atomic_Habits_DE/PRIVACY_POLICY.md` from the app repo. If that file
changes, update `privacy/index.html` to match.
