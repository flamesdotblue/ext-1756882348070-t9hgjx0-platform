import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-stone-900">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
