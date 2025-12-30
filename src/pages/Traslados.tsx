import React from 'react';
import { Plane, Hotel, MapPin, ChevronRight, ShieldCheck, Snowflake, Users, Wifi } from 'lucide-react';
import trasladoVan from '../assets/images/traslado-van.jpg';
import transferCentro from '../assets/images/transfer-centro.png';
import transferTerminal from '../assets/images/transfer-terminal.png';
import flotaInterior from '../assets/images/flota-interior.png';

const TransferCard: React.FC<{
    title: string;
    route: string;
    price: string;
    desc: string;
    icon: React.ReactNode;
    image: string;
}> = ({ title, route, price, desc, icon, image }) => (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
        <div className="h-48 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-xl text-ice shadow-sm">
                {icon}
            </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-navy mb-2">{title}</h3>
            <p className="text-ice font-bold text-sm uppercase tracking-widest mb-4">{route}</p>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{desc}</p>
            <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between">
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

const Traslados: React.FC = () => {
    const features = [
        { icon: <ShieldCheck className="text-ice" size={32} />, title: "Seguridad en Ruta", desc: "Expertos en conducción sobre nieve y hielo patagónico." },
        { icon: <Snowflake className="text-ice" size={32} />, title: "Confort Térmico", desc: "Unidades modernas con calefacción de alto rendimiento." },
        { icon: <Users className="text-ice" size={32} />, title: "Conductores Locales", desc: "Personal con años de experiencia en la zona." },
        { icon: <Wifi className="text-ice" size={32} />, title: "Unidades Modernas", desc: "Mantenimiento diario para garantizar tu comodidad." },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy/90">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Viaje seguro en ruta</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Traslados Privados</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Servicio puerta a puerta con vehículos modernos, conductores locales y la máxima puntualidad.
                    </p>
                </div>
            </section>

            {/* Transfer Cards */}
            <section className="py-24 bg-snow">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <TransferCard
                            title="Aeropuerto FTE"
                            route="Aeropuerto ⇄ Hotel"
                            price="ARS $12.500"
                            desc="Recepción personalizada con cartel. Traslado directo por la mítica Ruta 40 hasta su alojamiento. Incluye espera de hasta 30 minutos y seguimiento de vuelo."
                            icon={<Plane size={24} />}
                            image={trasladoVan}
                        />
                        <TransferCard
                            title="Centro El Calafate"
                            route="Hoteles ⇄ Restaurantes"
                            price="ARS $4.500"
                            desc="Traslados urbanos en unidades climatizadas. Ideal para disfrutar la gastronomía local sin preocupaciones. Disponible las 24 horas."
                            icon={<Hotel size={24} />}
                            image={transferCentro}
                        />
                        <TransferCard
                            title="Terminal de Bus"
                            route="Terminal ⇄ Hoteles"
                            price="ARS $6.000"
                            desc="Conexiones puntuales para sus viajes a El Chaltén o Puerto Natales. Servicio puerta a puerta con manejo de equipaje incluido."
                            icon={<MapPin size={24} />}
                            image={transferTerminal}
                        />
                    </div>
                </div>
            </section>

            {/* Fleet Section */}
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
                                src={flotaInterior}
                                alt="Interior de nuestros vehículos modernos"
                                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-navy">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para reservar tu traslado?</h2>
                    <p className="text-slate-300 mb-8 text-lg">Contactanos ahora y recibí respuesta inmediata por WhatsApp</p>
                    <button
                        onClick={() => window.open('https://wa.me/5492902123456?text=Hola%20CalafateGo,%20necesito%20un%20traslado', '_blank')}
                        className="bg-ice text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-glacier transition-colors shadow-lg"
                    >
                        Reservar por WhatsApp
                    </button>
                </div>
            </section>
        </>
    );
};

export default Traslados;
