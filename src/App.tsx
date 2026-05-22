import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PricingMenu from './components/PricingMenu';
import Features from './components/Features';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen font-sans text-gray-900 bg-white pt-[80px]">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedProducts />
                <Testimonials />
              </>
            } />
            <Route path="/portfolio" element={<FeaturedProducts />} />
            <Route path="/pricing" element={<PricingMenu />} />
            <Route path="/about" element={<Features />} />
            <Route path="/contact" element={<BookingForm />} />
          </Routes>
          <Footer />
          <CartSidebar />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
