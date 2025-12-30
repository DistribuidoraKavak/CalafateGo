
import React from 'react';
import { Plane, Hotel, MapPin, ChevronRight } from 'lucide-react';
import trasladoVan from '../src/assets/images/traslado-van.jpg';
import transferCentro from '../src/assets/images/transfer-centro.png';
import transferTerminal from '../src/assets/images/transfer-terminal.png';

const TransferCard: React.FC<{
  title: string;
  route: string;
  price: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
}> = ({ title, route, price, desc, icon, image }) => (
  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
    <div className="h-40 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl text-ice shadow-sm">
        {icon}
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-ice font-bold text-sm uppercase tracking-widest mb-4">{route}</p>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed italic text-sm">{desc}</p>
      <div className="pt-6 border-t border-slate-50 mt-auto flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400 font-bold uppercase">Desde</p>
          <p className="text-2xl font-bold text-navy">{price}</p>
        </div>
        <button
          onClick={() => window.open(`https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20el%20traslado:%20${title}`, '_blank')}
          className="bg-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-ice transition-colors flex items-center space-x-2 shadow-md"
        >
          <span>Reservar</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

const Transfers: React.FC = () => {
  return (
    <section id="traslados" className="py-24 bg-snow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Viaje seguro en ruta</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Traslados Privados</h2>
          <div className="w-20 h-1 gradient-ice mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TransferCard
            title="Aeropuerto FTE"
            route="Aeropuerto ⇄ Hotel"
            price="ARS $12.500"
            desc="Recepción personalizada con cartel. Traslado directo por la mítica Ruta 40 hasta su alojamiento."
            icon={<Plane size={24} />}
            image={trasladoVan}
          />
          <TransferCard
            title="Centro El Calafate"
            route="Hoteles ⇄ Restaurantes"
            price="ARS $4.500"
            desc="Traslados urbanos en unidades climatizadas. Ideal para disfrutar la gastronomía local sin preocupaciones."
            icon={<Hotel size={24} />}
            image={transferCentro}
          />
          <TransferCard
            title="Terminal de Bus"
            route="Terminal ⇄ Hoteles"
            price="ARS $6.000"
            desc="Conexiones puntuales para sus viajes a El Chaltén o Puerto Natales. Servicio puerta a puerta."
            icon={<MapPin size={24} />}
            image={transferTerminal}
          />
        </div>
      </div>
    </section>
  );
};

export default Transfers;
