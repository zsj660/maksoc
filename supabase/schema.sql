create table if not exists products_admin (
  id text primary key default gen_random_uuid()::text,
  slug text not null unique,
  name text not null,
  category text not null,
  image text not null,
  description text not null,
  material text not null,
  colors jsonb not null default '[]'::jsonb,
  price numeric(10,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders_admin (
  id text primary key,
  customer text not null,
  status text not null check (status in ('Pending', 'Processing', 'Shipped')),
  created_at date not null,
  item_count int not null,
  total numeric(10,2) not null,
  email text,
  phone text,
  address text,
  notes text,
  inserted_at timestamptz not null default now()
);

create table if not exists order_lines_admin (
  id bigint generated always as identity primary key,
  order_id text not null references orders_admin(id) on delete cascade,
  product_id text not null,
  product_name text not null,
  unit_price numeric(10,2) not null,
  quantity int not null,
  line_total numeric(10,2) not null
);

create index if not exists idx_order_lines_order_id on order_lines_admin(order_id);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_products_updated_at on products_admin;
create trigger trg_products_updated_at
before update on products_admin
for each row execute function set_updated_at();
