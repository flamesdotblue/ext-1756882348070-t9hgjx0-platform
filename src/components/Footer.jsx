export default function Footer() {
  return (
    <footer id="about" className="mt-10 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-stone-900">About</h3>
          <p className="mt-3 text-stone-700 max-w-md">
            Tsuchi is a Kyoto-based studio crafting functional stoneware inspired by wabi-sabi and the textures of the natural world.
          </p>
        </div>
        <div id="contact">
          <h3 className="font-serif text-xl text-stone-900">Contact</h3>
          <ul className="mt-3 text-stone-700 space-y-1">
            <li>Email: hello@tsuchi.studio</li>
            <li>Instagram: @tsuchi.ceramics</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl text-stone-900">Care</h3>
          <p className="mt-3 text-stone-700 max-w-md">Food-safe glazes. Hand wash recommended. Expect subtle variations as a mark of the maker.</p>
        </div>
      </div>
      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex items-center justify-between text-sm text-stone-600">
          <p>© {new Date().getFullYear()} Tsuchi Ceramics. All rights reserved.</p>
          <p>Made by hand in Kyoto.</p>
        </div>
      </div>
    </footer>
  );
}
