# Airports Redirect Worker

Cloudflare Worker that redirects `airports.indy.center` to `https://wiki.flyindycenter.com/pilots`

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run locally:
```bash
npm run dev
```

3. Deploy to Cloudflare:
```bash
npm run deploy
```

## Configuration

After deploying, add a route in your Cloudflare dashboard:
- Go to your domain → **Workers Routes**
- Add route: `airports.indy.center/*` → select `airports-redirect` worker

Make sure you have a DNS record for `airports.indy.center` with Proxy (orange cloud) enabled.

## How it works

- `airports.indy.center` → `https://wiki.flyindycenter.com/pilots`
- `airports.indy.center/cvg` → `https://wiki.flyindycenter.com/pilots/cvg`
- `airports.indy.center/ord/charts` → `https://wiki.flyindycenter.com/pilots/ord/charts`

The worker preserves the entire path and query parameters.
