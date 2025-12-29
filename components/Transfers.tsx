
import React from 'react';
import { Plane, Hotel, MapPin, ChevronRight } from 'lucide-react';

const TransferCard: React.FC<{ 
  title: string; 
  route: string;
  price: string;
  desc: string;
  icon: React.ReactNode;
}> = ({ title, route, price, desc, icon }) => (
  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
    <div className="bg-glacier/20 p-4 rounded-2xl w-fit text-ice mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>
    <p className="text-ice font-bold text-sm uppercase tracking-widest mb-4">{route}</p>
    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{desc}</p>
    <div className="pt-6 border-t border-slate-50 mt-auto flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-400 font-bold uppercase">Desde</p>
        <p className="text-2xl font-bold text-navy">{price}</p>
      </div>
      <button 
        onClick={() => window.open(`https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20el%20traslado:%20${title}`, '_blank')}
        className="bg-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-ice transition-colors flex items-center space-x-2"
      >
        <span>Reservar</span>
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

const Transfers: React.FC = () => {
  return (
    <section id="traslados" className="py-24 bg-snow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Puntualidad y Confort</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Traslados Privados</h2>
          <div className="w-20 h-1 gradient-ice mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TransferCard 
            title="Aeropuerto FTE"
            route="Aeropuerto ⇄ Hotel"
            price="ARS $12.500"
            desc="Recepción personalizada con cartel. Sin esperas. Traslado directo puerta a puerta en unidades con amplio maletero."
            icon={<Plane size={32} />}
          />
          <TransferCard 
            title="Centro El Calafate"
            route="Hoteles ⇄ Restaurantes/Centro"
            price="ARS $4.500"
            desc="Moverte por la ciudad nunca fue tan cómodo. Servicio de transfer nocturno para cenas o compras en la Av. del Libertador."
            icon={<Hotel size={32} />}
          />
          <TransferCard 
            title="Terminal de Bus"
            route="Terminal ⇄ Hoteles/Aeropuerto"
            price="ARS $6.000"
            desc="Ideal para conexiones con El Chaltén o Puerto Natales. Puntualidad garantizada para que no pierdas tu próximo viaje."
            icon={<MapPin size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Transfers;
