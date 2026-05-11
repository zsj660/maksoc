# MAKSOC Backend Feature Categories

## 1. Authentication (Admin Access)
- Login API: `app/api/admin/login/route.ts`
- Logout API: `app/api/admin/logout/route.ts`
- Session API: `app/api/admin/session/route.ts`
- Session helpers: `lib/admin-session.ts`
- Route guard helper: `lib/admin-api.ts`

## 2. Product Management
- Product list/create API: `app/api/admin/products/route.ts`
- Product update/delete API: `app/api/admin/products/[id]/route.ts`
- Admin UI section: `app/admin/page.tsx` -> "Product Management + Price Settings"

## 3. Order Management
- Order list API: `app/api/admin/orders/route.ts`
- Order status update API: `app/api/admin/orders/[id]/route.ts`
- Checkout create-order API: `app/api/checkout/route.ts`
- Admin UI section: `app/admin/page.tsx` -> "Order Management"

## 4. Database Layer (Formal Backend)
- Supabase client + seed logic: `lib/supabase-admin.ts`
- SQL schema: `supabase/schema.sql`

## 5. Frontend Checkout Flow (No Online Payment)
- Checkout page: `app/checkout/page.tsx`
- Behavior: customer submits contact/shipping info, admin follows up offline.

## 6. Environment Variables
- Local template: `env.local.template`
- Active local config: `.env.local`
