import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </div>
  );
}
