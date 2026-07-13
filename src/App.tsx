import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundArt from './components/BackgroundArt';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <BackgroundArt />
      <div className="min-h-screen w-full font-sans text-cafe-text overflow-x-hidden flex flex-col relative z-10">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
