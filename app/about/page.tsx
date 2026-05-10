import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 pb-20 pt-32 md:px-10">
        <p className="luxury-subtitle text-xs">About</p>
        <h1 className="mt-3 text-4xl tracking-[0.08em] md:text-5xl">Authentic African Craft</h1>
        <p className="mt-8 leading-8 text-[#161616]/78">
          MAKSOC curates premium African wax prints sourced from trusted mills and artisan networks.
          Each textile is selected for color depth, consistency, and texture quality to support modern
          tailoring, occasion wear, and elevated everyday style.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
