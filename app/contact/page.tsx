import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] text-[#161616]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-32 md:px-10">
        <p className="luxury-subtitle text-xs">Contact</p>
        <h1 className="mt-3 text-4xl tracking-[0.08em]">Get in Touch</h1>
        <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-6">
          <p className="leading-8 text-[#161616]/78">
            For wholesale inquiries, custom sourcing, and support:
          </p>
          <p className="mt-4 text-sm tracking-[0.08em]">Email: hello@maksoc.com</p>
          <p className="mt-2 text-sm tracking-[0.08em]">Phone: +233 20 000 0000</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
