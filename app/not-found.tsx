import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f5ee] px-6">
      <div className="max-w-xl rounded-3xl border border-black/10 bg-white/70 p-10 text-center">
        <p className="text-xs tracking-[0.14em] text-[#161616]/65">MAKSOC</p>
        <h1 className="mt-4 text-4xl tracking-[0.08em]">Page Not Found</h1>
        <p className="mt-4 leading-7 text-[#161616]/75">
          The page you requested is unavailable. Continue exploring our wax print collections.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-black px-6 py-3 text-xs tracking-[0.12em] text-white hover:bg-[#2c2c2c]"
          >
            Back Home
          </Link>
          <Link
            href="/collections"
            className="rounded-full border border-black/20 px-6 py-3 text-xs tracking-[0.12em] hover:bg-black hover:text-white"
          >
            Browse Collections
          </Link>
        </div>
      </div>
    </div>
  );
}
