const products = [
  {
    id: 1,
    name: 'Shincha Mug',
    price: 48,
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    color: 'Sand glaze',
  },
  {
    id: 2,
    name: 'Hikari Plate',
    price: 56,
    image:
      'https://images.unsplash.com/photo-1722286031218-f5a3fdd3acb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIaWthcmklMjBQbGF0ZXxlbnwwfDB8fHwxNzU2ODgyNDg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Ash white',
  },
  {
    id: 3,
    name: 'Kumo Teapot',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=1200&auto=format&fit=crop',
    color: 'Charcoal',
  },
  {
    id: 4,
    name: 'Sora Bowl',
    price: 38,
    image:
      'https://images.unsplash.com/photo-1660601721275-6a1a53874acd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTb3JhJTIwQm93bHxlbnwwfDB8fHwxNzU2ODgyNDg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'River blue',
  },
  {
    id: 5,
    name: 'Tsuyu Plate',
    price: 62,
    image:
      'https://images.unsplash.com/photo-1722286031218-f5a3fdd3acb6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUc3V5dSUyMFBsYXRlfGVufDB8MHx8fDE3NTY4ODI0ODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Warm stone',
  },
  {
    id: 6,
    name: 'Haru Mug',
    price: 46,
    image:
      'https://images.unsplash.com/photo-1734632264043-87adf4d2c5a6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXJ1JTIwTXVnfGVufDB8MHx8fDE3NTY4ODI0ODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    color: 'Clay',
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900">The Collection</h2>
            <p className="text-stone-600 mt-2">Small-batch pieces with subtle variation—no two are the same.</p>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 text-stone-700 hover:text-stone-900">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.color}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-stone-900">{p.name}</h3>
                <p className="text-sm text-stone-600">{p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-stone-900">${p.price}</span>
                  <button className="text-sm rounded-full border border-stone-300 px-3 py-1.5 hover:bg-stone-50">
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
