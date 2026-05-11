# MAKSOC Formal Admin Setup

## 1) Configure environment variables

Copy template and fill values:

```bash
cp env.local.template .env.local
```

Required keys for formal backend:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET` (long random string)

## 2) Run Supabase schema

In Supabase SQL Editor, execute:

`supabase/schema.sql`

## 3) Install dependencies

```bash
npm install
```

## 4) Start app and test admin

```bash
npm run dev
```

Visit `/admin`, log in with `ADMIN_USERNAME` and `ADMIN_PASSWORD`.

## 5) Deploy to Vercel

Set the same admin/database environment variables in Vercel project settings, then redeploy.
