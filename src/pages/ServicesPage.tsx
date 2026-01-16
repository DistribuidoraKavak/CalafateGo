import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bus, Mountain, ExternalLink, ArrowRight, Tag, Users, MessageCircle } from 'lucide-react';
import { TRASLADOS_DATA, EXCURSIONES_DATA, ServiceItem } from '../data/servicesData';

// ============== CARD COMPONENT ==============
interface ServiceCardProps {
    data: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
    const formattedPrice = typeof data.price === 'number'
        ? `Desde US$ ${data.price}`
        : data.price;

    return (
        <Link
            to={`/experiencia/${data.id}`}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-500 transform hover:scale-[1.02] border border-slate-100 group"
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-emerald-600 shadow-lg">
                    {formattedPrice}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="text-xl font-bold text-navy mb-3 font-display leading-tight group-hover:text-emerald-600 transition-colors">
                    {data.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {data.shortDesc}
                </p>

                <div className="w-full py-3 rounded-xl font-bold text-sm bg-slate-100 text-navy group-hover:bg-navy group-hover:text-white transition-all flex items-center justify-center gap-2 mt-auto">
                    <span>Ver Detalle</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

// ============== MAIN COMPONENT ==============
const ServicesPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'traslados' | 'excursiones'>('traslados');
    const [hoveredTab, setHoveredTab] = useState<'traslados' | 'excursiones' | null>(null);

    // Scroll Reveal Logic
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const infoRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInfoVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (infoRef.current) observer.observe(infoRef.current);
        return () => observer.disconnect();
    }, [activeTab]);

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'excursiones') setActiveTab('excursiones');
        else setActiveTab('traslados');
    }, [searchParams]);

    const handleTabChange = (tab: 'traslados' | 'excursiones') => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    const currentData = activeTab === 'traslados' ? TRASLADOS_DATA : EXCURSIONES_DATA;

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">
            <Helmet>
                <title>Traslados y Excursiones | CalafateGo</title>
                <meta name="description" content="Explora nuestra oferta de traslados privados y excursiones premium en El Calafate. Glaciar Perito Moreno, El Chaltén, navegaciones y más." />
                <meta property="og:title" content="Traslados y Excursiones | CalafateGo" />
                <meta property="og:description" content="Explora nuestra oferta de traslados privados y excursiones premium en El Calafate." />
                <meta property="og:url" content="https://calafatego.com/servicios" />
            </Helmet>

            {/* ======= HEADER ======= */}
            <header className="relative h-[60vh] flex items-center justify-center pointer-events-none">

                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/images/navegacion-lago.jpg"
                        alt="Patagonia Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-10">
                    <p className="text-ice font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 font-display">
                        Patagonia Argentina
                    </p>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl font-display leading-tight">
                        Elegí tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white">Experiencia</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-light drop-shadow-md max-w-2xl mx-auto">
                        Viajes diseñados para transformar tu manera de ver el mundo.
                    </p>
                </div>

                {/* TABS */}
                {/* TABS SOBRIOS CON AURA FLÚOR - Estilo Original Mejorado */}
                <div className="absolute -bottom-8 left-0 w-full flex justify-center z-30 px-4 pointer-events-auto">
                    {/* Contenedor con Aura Flúor (El efecto que gustó) */}
                    <div className="relative group w-full max-w-lg">
                        <div className="absolute -inset-1 bg-gradient-to-r from-ice to-blue-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

                        {/* Contenedor Blanco (Sobrio) */}
                        <div className="relative bg-navy rounded-full p-2 flex w-full shadow-2xl ring-1 ring-white/20 isolate">

                            {/* BARRA AZUL DESLIZANTE (FONDO ANIMADO) */}
                            <div
                                className={`absolute top-2 bottom-2 w-[calc(50%-8px)] rounded-full bg-white shadow-lg transition-transform duration-300 ease-out -z-10 left-2
                                ${(hoveredTab || activeTab) === 'excursiones' ? 'translate-x-[100%]' : 'translate-x-0'}
                                `}
                                style={{ width: 'calc(50% - 8px)' }}
                            ></div>

                            {/* Botón Traslados */}
                            <button
                                onClick={() => handleTabChange('traslados')}
                                onMouseEnter={() => setHoveredTab('traslados')}
                                onMouseLeave={() => setHoveredTab(null)}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base md:text-lg transition-colors duration-300 z-10 bg-transparent
                                    ${(hoveredTab || activeTab) === 'traslados' ? 'text-navy' : 'text-white'}`}
                            >
                                <Bus size={20} className={(hoveredTab || activeTab) === 'traslados' ? 'text-navy' : 'text-slate-300 group-hover:text-white'} />
                                <span className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>Traslados</span>
                            </button>

                            {/* Botón Excursiones */}
                            <button
                                onClick={() => handleTabChange('excursiones')}
                                onMouseEnter={() => setHoveredTab('excursiones')}
                                onMouseLeave={() => setHoveredTab(null)}
                                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold text-base md:text-lg transition-colors duration-300 z-10 bg-transparent
                                    ${(hoveredTab || activeTab) === 'excursiones' ? 'text-navy' : 'text-white'}`}
                            >
                                <Mountain size={20} className={(hoveredTab || activeTab) === 'excursiones' ? 'text-navy' : 'text-slate-300 group-hover:text-white'} />
                                <span className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>Excursiones</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ======= GRID CONTENT ======= */}
            <main className="relative z-20 max-w-7xl mx-auto px-4 pt-24 md:pt-32">

                {/* Info Bar for Transfers (Option 1) */}
                {activeTab === 'traslados' && (
                    <div ref={infoRef} className="max-w-5xl mx-auto mb-20 perspective-1000">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Feature 1: Precio */}
                            <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center 
                                group hover:shadow-xl hover:border-blue-200 hover:-translate-y-2
                                transition-all duration-500 ease-out transform
                                ${isInfoVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-12'}`}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-ice rounded-full flex items-center justify-center mb-4 min-w-[3rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-100">
                                    <Tag size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-1 group-hover:text-blue-600 transition-colors">Valor por Vehículo</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    La tarifa es total por el servicio, <br /> no por pasajero.
                                </p>
                            </div>

                            {/* Feature 2: Capacidad */}
                            <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center 
                                group hover:shadow-xl hover:border-blue-200 hover:-translate-y-2
                                transition-all duration-500 delay-100 ease-out transform
                                ${isInfoVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-12'}`}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-ice rounded-full flex items-center justify-center mb-4 min-w-[3rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-100">
                                    <Users size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-1 group-hover:text-blue-600 transition-colors">Capacidad Estándar</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Hasta <span className="font-bold text-navy group-hover:text-blue-700 transition-colors">6 personas</span> por vehículo. <br />
                                    (Max. 4 al Aeropuerto por equipaje)
                                </p>
                            </div>

                            {/* Feature 3: Grupos */}
                            <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center 
                                group hover:shadow-xl hover:border-blue-200 hover:-translate-y-2
                                transition-all duration-500 delay-200 ease-out transform
                                ${isInfoVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-12 rotate-x-12'}`}
                            >
                                <div className="w-12 h-12 bg-blue-50 text-ice rounded-full flex items-center justify-center mb-4 min-w-[3rem] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-100">
                                    <MessageCircle size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-1 group-hover:text-blue-600 transition-colors">¿Grupos Numerosos?</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Para más pasajeros, solicitá <br /> una cotización a medida.
                                </p>
                            </div>

                        </div>
                    </div>
                )}

                <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-fade-in-up">
                    {currentData.map((item) => (
                        <ServiceCard key={item.id} data={item} />
                    ))}
                </div>

                <div className="mt-20 text-center border-t border-slate-200 pt-10">
                    <p className="text-slate-400 mb-4 font-medium text-sm uppercase tracking-widest">Atención Personalizada</p>
                    <a
                        href="https://wa.me/5492966530638"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-navy font-bold hover:text-ice transition-colors gap-2 text-lg group"
                    >
                        <span>Chatear con un experto ahora</span>
                        <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </main>
        </div>
    );
};

export default ServicesPage;
