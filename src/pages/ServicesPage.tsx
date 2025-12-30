import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Bus, Mountain, Plane, Hotel, MapPin, ChevronRight, ShieldCheck, Snowflake, Users, Wifi, Camera, Compass, Ship, ArrowRight, Clock, Star } from 'lucide-react';

// Import images for Traslados
import trasladoVan from '../assets/images/traslado-van.jpg';
import transferCentro from '../assets/images/transfer-centro.png';
import transferTerminal from '../assets/images/transfer-terminal.png';
import flotaInterior from '../assets/images/flota-interior.png';

// Import images for Excursiones
import excursionFitzroy from '../assets/images/excursion-fitzroy.jpg';
import excursionGlaciar from '../assets/images/excursion-glaciar.png';
import excursionNavegacion from '../assets/images/excursion-navegacion.png';

// ============== TRANSFER CARD COMPONENT ==============
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

// ============== EXCURSION CARD COMPONENT ==============
interface ExcursionData {
    title: string;
    desc: string;
    image: string;
    tag: string;
    icon: React.ReactNode;
    duration: string;
    groupSize: string;
    highlights: string[];
}

const ExcursionCard: React.FC<ExcursionData> = ({
    title, desc, image, tag, icon, duration, groupSize, highlights
}) => (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
        <div className="relative h-64 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-navy px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {tag}
                </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2">
                {icon}
                <span className="text-sm font-medium">Experiencia Local</span>
            </div>
        </div>

        <div className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>

            <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                    <Clock size={16} className="text-ice" />
                    {duration}
                </span>
                <span className="flex items-center gap-2">
                    <Users size={16} className="text-ice" />
                    {groupSize}
                </span>
            </div>

            <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Incluye:</p>
                <div className="flex flex-wrap gap-2">
                    {highlights.map((h, i) => (
                        <span key={i} className="bg-snow text-navy text-xs px-3 py-1.5 rounded-full font-medium">
                            {h}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={() => window.open(`https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20la%20excursion:%20${title}`, '_blank')}
                className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-ice transition-colors flex items-center justify-center gap-2"
            >
                <span>Consultar Disponibilidad</span>
                <ArrowRight size={18} />
            </button>
        </div>
    </div>
);

// ============== MAIN SERVICES PAGE ==============
const ServicesPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'traslados' | 'excursiones'>('traslados');

    // Handle URL query param for tab
    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'excursiones') {
            setActiveTab('excursiones');
        } else {
            setActiveTab('traslados');
        }
    }, [searchParams]);

    const handleTabChange = (tab: 'traslados' | 'excursiones') => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    // Traslados data
    const transfers = [
        {
            title: "Aeropuerto FTE",
            route: "Aeropuerto ⇄ Hotel",
            price: "ARS $12.500",
            desc: "Recepción personalizada con cartel. Traslado directo por la mítica Ruta 40 hasta su alojamiento.",
            icon: <Plane size={24} />,
            image: trasladoVan
        },
        {
            title: "Centro El Calafate",
            route: "Hoteles ⇄ Restaurantes",
            price: "ARS $4.500",
            desc: "Traslados urbanos en unidades climatizadas. Ideal para disfrutar la gastronomía local.",
            icon: <Hotel size={24} />,
            image: transferCentro
        },
        {
            title: "Terminal de Bus",
            route: "Terminal ⇄ Hoteles",
            price: "ARS $6.000",
            desc: "Conexiones puntuales para viajes a El Chaltén o Puerto Natales. Servicio puerta a puerta.",
            icon: <MapPin size={24} />,
            image: transferTerminal
        }
    ];

    const features = [
        { icon: <ShieldCheck className="text-ice" size={32} />, title: "Seguridad en Ruta", desc: "Expertos en conducción patagónica." },
        { icon: <Snowflake className="text-ice" size={32} />, title: "Confort Térmico", desc: "Calefacción de alto rendimiento." },
        { icon: <Users className="text-ice" size={32} />, title: "Conductores Locales", desc: "Años de experiencia en la zona." },
        { icon: <Wifi className="text-ice" size={32} />, title: "Unidades Modernas", desc: "Mantenimiento diario garantizado." },
    ];

    // Excursiones data
    const excursiones: ExcursionData[] = [
        {
            title: "Glaciar Perito Moreno",
            tag: "Clásico",
            icon: <Camera size={16} />,
            image: excursionGlaciar,
            desc: "Visitá el gigante de hielo más accesible del mundo. Te llevamos y esperamos mientras disfrutás de las pasarelas.",
            duration: "Full Day",
            groupSize: "Hasta 7 pax",
            highlights: ["Traslado privado", "Espera en pasarelas", "Aire acondicionado", "Agua a bordo"]
        },
        {
            title: "Full Day El Chaltén",
            tag: "Aventura",
            icon: <Compass size={16} />,
            image: excursionFitzroy,
            desc: "Traslado a la capital nacional del trekking. Aprovechá los senderos al Fitz Roy con todo el día por delante.",
            duration: "12-14 horas",
            groupSize: "Hasta 7 pax",
            highlights: ["Salida temprana", "Horario flexible", "GPS en vivo", "Snacks incluidos"]
        },
        {
            title: "Navegación Ríos de Hielo",
            tag: "Exclusivo",
            icon: <Ship size={16} />,
            image: excursionNavegacion,
            desc: "Traslado al Puerto Punta Bandera para las mejores navegaciones del Lago Argentino.",
            duration: "Según navegación",
            groupSize: "Hasta 7 pax",
            highlights: ["Coordinado con navegación", "Espera incluida", "Puntualidad garantizada", "Asistencia en puerto"]
        }
    ];

    const testimonials = [
        { name: "María García", location: "Buenos Aires", text: "Increíble el servicio al Perito Moreno. Puntualidad perfecta y el conductor muy amable. 100% recomendable!" },
        { name: "John Smith", location: "USA", text: "Best transfer service in Calafate! Very professional and the van was very comfortable for the long trip to El Chaltén." },
        { name: "Carlos Rodríguez", location: "Chile", text: "Excelente coordinación con la navegación. Llegamos justo a tiempo y la espera fue cómoda." }
    ];

    return (
        <>
            {/* Page Header con Tabs */}
            <section className="pt-32 pb-8 bg-gradient-to-b from-navy to-navy/90">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Nuestros Servicios</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        {activeTab === 'traslados' ? 'Traslados Privados' : 'Excursiones Imperdibles'}
                    </h1>

                    {/* Tab Buttons */}
                    <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                        <button
                            onClick={() => handleTabChange('traslados')}
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === 'traslados'
                                    ? 'bg-white text-navy shadow-lg'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            <Bus size={22} />
                            <span>Traslados</span>
                        </button>
                        <button
                            onClick={() => handleTabChange('excursiones')}
                            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${activeTab === 'excursiones'
                                    ? 'bg-white text-navy shadow-lg'
                                    : 'text-white hover:bg-white/10'
                                }`}
                        >
                            <Mountain size={22} />
                            <span>Excursiones</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ============ TRASLADOS VIEW ============ */}
            {activeTab === 'traslados' && (
                <>
                    {/* Transfer Cards */}
                    <section className="py-20 bg-snow">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-3 gap-8">
                                {transfers.map((t, i) => (
                                    <TransferCard key={i} {...t} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Fleet Section */}
                    <section className="py-20 bg-white overflow-hidden">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col lg:flex-row items-center gap-16">
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Flota Moderna y Confort Sin Límites</h2>
                                    <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                        Disponemos de vehículos preparados para las exigencias de la Patagonia, garantizando suavidad y seguridad en cada kilómetro.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                        className="relative rounded-3xl shadow-2xl object-cover h-[400px] w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* ============ EXCURSIONES VIEW ============ */}
            {activeTab === 'excursiones' && (
                <>
                    {/* Excursion Cards */}
                    <section className="py-20 bg-snow">
                        <div className="container mx-auto px-6">
                            <div className="grid lg:grid-cols-3 gap-8">
                                {excursiones.map((exc, i) => (
                                    <ExcursionCard key={i} {...exc} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-12">
                                <h2 className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Lo que dicen nuestros viajeros</h2>
                                <h3 className="text-3xl md:text-4xl font-bold text-navy">Experiencias Reales</h3>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((t, i) => (
                                    <div key={i} className="bg-snow rounded-3xl p-8">
                                        <div className="flex text-yellow-400 mb-4">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                                        </div>
                                        <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                                        <div>
                                            <p className="font-bold text-navy">{t.name}</p>
                                            <p className="text-sm text-slate-400">{t.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* CTA Section (shared) */}
            <section className="py-16 bg-navy">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {activeTab === 'traslados' ? '¿Listo para reservar tu traslado?' : '¿Cuál es tu próxima aventura?'}
                    </h2>
                    <p className="text-slate-300 mb-8 text-lg">Contactanos ahora y recibí respuesta inmediata por WhatsApp</p>
                    <button
                        onClick={() => window.open('https://wa.me/5492902123456?text=Hola%20CalafateGo,%20necesito%20información', '_blank')}
                        className="bg-ice text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-glacier transition-colors shadow-lg"
                    >
                        Reservar por WhatsApp
                    </button>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
