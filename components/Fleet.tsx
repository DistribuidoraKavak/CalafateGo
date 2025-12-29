
import React from 'react';
import { ShieldCheck, Snowflake, Users, Wifi } from 'lucide-react';

const Fleet: React.FC = () => {
  const features = [
    { icon: <ShieldCheck className="text-ice" size={32} />, title: "Seguridad en Ruta", desc: "Expertos en conducción sobre nieve y hielo patagónico." },
    { icon: <Snowflake className="text-ice" size={32} />, title: "Confort Térmico", desc: "Unidades modernas con calefacción de alto rendimiento." },
    { icon: <Users className="text-ice" size={32} />, title: "Conductores Locales", desc: "Personal con años de experiencia en la zona." },
    { icon: <Wifi className="text-ice" size={32} />, title: "Unidades Modernas", desc: "Mantenimiento diario para garantizar tu comodidad." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Flota Moderna y Confort Sin Límites</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              En CalafateGo, entendemos que tu viaje comienza en el traslado. Por eso, disponemos de una flota de vehículos preparados para las exigencias de la Patagonia, garantizando suavidad y seguridad en cada kilómetro.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 bg-glacier/20 p-3 rounded-xl h-fit">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-glacier/30 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1531630403303-34676be461ec?q=80&w=1200&auto=format&fit=crop" 
              alt="Transporte moderno en paisaje patagónico de El Calafate" 
              className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
