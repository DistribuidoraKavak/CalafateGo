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
  }, [location]);

  const navLinks = [
    { name: 'Inicio', to: '/' },
    { name: 'Traslados', to: '/traslados' },
    { name: 'Excursiones', to: '/excursiones' },
    { name: 'Contacto', to: '/contacto' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20un%20traslado', '_blank');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // On homepage, use transparent header; on other pages, always use solid
  const isHomePage = location.pathname === '/';
  const headerBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
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
        <div className="md:hidden bg-white fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-2xl font-semibold hover:text-ice ${isActive(link.to) ? 'text-ice' : 'text-navy'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-2 gradient-ice text-white px-8 py-4 rounded-full font-semibold shadow-xl"
          >
            <MessageCircle size={24} />
            <span>Reservar ahora</span>
          </button>
          <button
            className="absolute top-6 right-6 text-navy"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
