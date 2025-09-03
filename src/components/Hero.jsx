export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,#f7f2ea,transparent),linear-gradient(180deg,#faf7f2, #efe8df)]" />
      <div aria-hidden className="absolute inset-0 opacity-[0.08] mix-blend-multiply" style={{backgroundImage: "url('data:image/svg+xml;utf8,\
        <svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\' viewBox=\\'0 0 200 200\\'>\
          <filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter>\
          <rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.4\\'/>\
        </svg>')" , backgroundSize: '300px 300px'}} />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-stone-900">
              Handcrafted Japanese ceramics for everyday ritual
            </h1>
            <p className="mt-5 text-stone-700 max-w-xl">
              Mugs, plates, and teapots shaped by hand in small batches. Earthy glazes, quiet forms, and a devotion to simplicity.
            </p>
            <div className="mt-8">
              <a
                href="#shop"
                className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-6 py-3 text-sm tracking-wide hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-500"
              >
                Shop Collection
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1636236105744-6b1cfd1bfadc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdG9uZXdhcmUlMjB0ZWFwb3QlMjBhbmQlMjBjdXBzfGVufDB8MHx8fDE3NTY4ODI0ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
                alt="Stoneware teapot and cups on linen"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
