import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  }, [location]);

  // Only 3 main links: Inicio, Traslados y Excursiones, Contacto
  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Traslados y Excursiones', to: '/servicios' },
    { name: 'Contacto', to: '/contacto' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20un%20traslado', '_blank');
  };

  const isActive = (path: string) => {
    if (path === '/servicios') {
      return location.pathname.startsWith('/servicios');
    }
    return location.pathname === path;
  };

  // On homepage, use transparent header; on other pages, always use solid
  const isHomePage = location.pathname === '/';
  const headerBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg
        ? 'bg-white shadow-md py-3'
        : 'backdrop-blur-md bg-black/70 py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className={`text-2xl font-bold tracking-tighter ${headerBg ? 'text-navy' : 'text-white'}`}>
            Calafate<span className="text-ice">Go</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`font-medium transition-colors hover:text-ice ${isActive(link.to)
                ? 'text-ice'
                : headerBg ? 'text-navy' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-2 gradient-ice text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            <span>Reservar WhatsApp</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${headerBg ? 'text-navy' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy shadow-xl flex flex-col items-center py-8 space-y-6 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-xl font-bold tracking-wide hover:text-ice transition-colors ${isActive(link.to) ? 'text-ice' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-2 gradient-ice text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={24} />
            <span>Reservar WhatsApp</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
