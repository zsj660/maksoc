import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-[#f5f1e8]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
        <div>
          <p className="text-lg tracking-[0.2em]">MAKSOC</p>
          <p className="mt-3 text-sm leading-7 text-[#161616]/72">
            Authentic African Wax Prints for premium tailoring, fashion collections, and wholesale sourcing.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-[#161616]/65">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/collections">Collections</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-[#161616]/65">Service</p>
          <p className="mt-3 text-sm text-[#161616]/72">Global Shipping</p>
          <p className="mt-1 text-sm text-[#161616]/72">Wholesale Support</p>
          <p className="mt-1 text-sm text-[#161616]/72">Email: hello@maksoc.com</p>
        </div>
      </div>
    </footer>
  );
}
