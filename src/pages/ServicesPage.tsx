import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
                                <span>Traslados</span>
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
                                <span>Excursiones</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* ======= GRID CONTENT ======= */}
            <main className="relative z-20 max-w-7xl mx-auto px-4 pt-24 md:pt-32">

                {/* Info Bar for Transfers (Option 1) */}
                {activeTab === 'traslados' && (
                    <div className="max-w-5xl mx-auto mb-20 animate-fade-in-up">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Feature 1: Precio */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 bg-blue-50 text-ice rounded-full flex items-center justify-center mb-4">
                                    <Tag size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-1">Valor por Vehículo</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    La tarifa es total por el servicio, <br /> no por pasajero.
                                </p>
                            </div>

                            {/* Feature 2: Capacidad */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 bg-blue-50 text-ice rounded-full flex items-center justify-center mb-4">
                                    <Users size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-1">Capacidad Estándar</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Hasta <strong>6 personas</strong> por vehículo. <br /> (Max. 4 al Aeropuerto por equipaje)
                                </p>
                            </div>

                            {/* Feature 3: Grupos Grandes */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 bg-blue-50 text-ice rounded-full flex items-center justify-center mb-4">
                                    <MessageCircle size={24} />
                                </div>
                                <h3 className="font-bold text-navy mb-1">¿Grupos Numerosos?</h3>
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
