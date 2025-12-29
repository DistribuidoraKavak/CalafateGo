
import React from 'react';
import { Plane, Mountain, Compass, MapPin } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  image: string 
}> = ({ title, description, icon, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group border border-slate-100">
    <div className="h-48 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg text-ice shadow-sm">
        {icon}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-xl font-bold mb-3 text-navy">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">
        {description}
      </p>
      <button className="text-ice font-bold flex items-center space-x-2 hover:translate-x-1 transition-transform">
        <span>Saber más</span>
        <MapPin size={16} />
      </button>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Transfer Aeropuerto",
      description: "Recepción en Aeropuerto Cte. Armando Tola (FTE) con cartel a su nombre. Sin esperas, directo a su hotel.",
      icon: <Plane size={24} />,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Glaciar Perito Moreno",
      description: "Traslados privados al Parque Nacional. Tiempos de espera flexibles para que recorras las pasarelas a tu ritmo.",
      icon: <Mountain size={24} />,
      image: "https://images.unsplash.com/photo-1516104085718-35634563a696?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "El Chaltén Full Day",
      description: "Viaje cómodo a la Capital del Trekking. Salidas temprano y regreso en el día, disfrutando el paisaje de la estepa.",
      icon: <Compass size={24} />,
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-snow">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Lo que ofrecemos</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Nuestros Servicios Premium</h2>
          <div className="w-20 h-1 gradient-ice mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
