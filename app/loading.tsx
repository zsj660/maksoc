export default function GlobalLoading() {
  return (
    <div className="min-h-screen bg-[#f8f5ee] px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-6 w-40 rounded-full bg-black/10" />
        <div className="h-12 w-72 rounded-full bg-black/10" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="rounded-2xl border border-black/10 bg-white/60 p-3">
              <div className="aspect-square rounded-xl bg-black/10" />
              <div className="mt-4 h-4 rounded bg-black/10" />
              <div className="mt-3 h-9 rounded-full bg-black/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
