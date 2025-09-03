import { ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-serif text-xl tracking-wide text-stone-900">
            Tsuchi Ceramics
          </a>
          <nav className="hidden md:flex items-center gap-8 text-stone-700">
            <a href="#shop" className="hover:text-stone-900 transition-colors">Shop</a>
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </nav>
          <button aria-label="Cart" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/60 px-3 py-2 text-stone-800 hover:bg-white transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
