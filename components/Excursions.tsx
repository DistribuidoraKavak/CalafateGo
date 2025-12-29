
import React from 'react';
import { Camera, Compass, Ship, ArrowRight } from 'lucide-react';

const ExcursionItem: React.FC<{ 
  title: string; 
  desc: string; 
  image: string; 
  tag: string;
  icon: React.ReactNode;
}> = ({ title, desc, image, tag, icon }) => (
  <div className="group relative overflow-hidden rounded-3xl h-[450px] shadow-2xl">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
    
    <div className="absolute top-6 left-6">
      <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">
        {tag}
      </span>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:-translate-y-2">
      <div className="text-ice mb-4 flex items-center space-x-2">
        {icon}
        <span className="font-bold text-sm tracking-widest uppercase">Experiencia Local</span>
      </div>
      <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
        {desc}
      </p>
      <button 
        onClick={() => window.open(`https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20la%20excursion:%20${title}`, '_blank')}
        className="flex items-center space-x-3 text-white font-bold group-hover:text-ice transition-colors"
      >
        <span>Consultar disponibilidad</span>
        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  </div>
);

const Excursions: React.FC = () => {
  return (
    <section id="excursiones" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Descubre la Patagonia</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">Excursiones Imperdibles</h2>
          </div>
          <p className="text-slate-500 font-medium md:text-right">
            Traslados privados exclusivos para que <br className="hidden md:block" /> vivas la aventura a tu propio ritmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <ExcursionItem 
            title="Glaciar Perito Moreno"
            tag="Clásico"
            icon={<Camera size={20} />}
            image="https://images.unsplash.com/photo-1551632432-c735e7a03071?q=80&w=800"
            desc="Visitá el gigante de hielo. Incluye traslado privado y espera en pasarelas. Tiempo libre para caminar y almorzar frente al glaciar."
          />
          <ExcursionItem 
            title="Full Day El Chaltén"
            tag="Aventura"
            icon={<Compass size={20} />}
            image="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=800"
            desc="Traslado a la capital nacional del trekking. Te llevamos temprano para que aproveches los senderos al Fitz Roy y te buscamos al atardecer."
          />
          <ExcursionItem 
            title="Navegación Ríos de Hielo"
            tag="Exclusivo"
            icon={<Ship size={20} />}
            image="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=800"
            desc="Traslado privado al Puerto Punta Bandera para conectar con las mejores navegaciones del Lago Argentino. Comodidad total de punta a punta."
          />
        </div>
      </div>
    </section>
  );
};

export default Excursions;
