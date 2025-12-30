import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import heroGlaciar from '../src/assets/images/hero-glaciar.jpg';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20un%20traslado";

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay - Glaciar Perito Moreno Panorámico */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroGlaciar})`,
        }}
        aria-label="Vista panorámica del Glaciar Perito Moreno en El Calafate"
      >
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-lg leading-tight">
          Tu Transfer Privado <br className="hidden md:block" /> en El Calafate
        </h1>
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Conectamos el Aeropuerto (FTE), Hoteles y el Glaciar con puntualidad, confort y la mejor atención personalizada.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 gradient-ice rounded-xl font-bold text-lg shadow-2xl hover:brightness-110 transition-all hover:-translate-y-1 text-white text-center"
          >
            Cotizar Traslado
          </a>
          <Link
            to="/#excursiones"
            onClick={(e) => handleScrollClick(e, 'excursiones')}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl font-bold text-lg shadow-xl hover:bg-white/20 transition-all text-white text-center"
          >
            Ver Excursiones
          </Link>
        </div>
      </div>

      <Link
        to="/#traslados"
        onClick={(e) => handleScrollClick(e, 'traslados')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </Link>
    </section>
  );
};

export default Hero;
