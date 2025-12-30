import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Bus, Mountain, ExternalLink, Users, Clock, MapPin } from 'lucide-react';

// ============== CARD COMPONENT ==============
interface ServiceData {
    title: string;
    desc: string;
    imageUrl: string;
    whatsappText: string;
    meta: { icon: any, text: string }[];
    price?: string;
}

const ServiceCard: React.FC<ServiceData> = ({ title, desc, imageUrl, whatsappText, meta, price }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-500 transform hover:scale-[1.02] border border-slate-100 group">
            {/* Image Container - h-64 for prominence */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-900/10">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {price && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-navy shadow-lg z-10 animate-fade-in">
                        {price}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow relative z-10 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3 font-display leading-tight group-hover:text-ice transition-colors">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {meta.map((m, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
                            <m.icon size={14} className="text-ice" />
                            <span>{m.text}</span>
                        </div>
                    ))}
                </div>

                <p className="text-slate-600 text-sm mb-8 flex-grow leading-relaxed">
                    {desc}
                </p>

                <button
                    onClick={() => window.open(`https://wa.me/5492902123456?text=${encodeURIComponent(whatsappText)}`, '_blank')}
                    className="w-full py-4 rounded-xl font-bold text-sm bg-navy text-white hover:bg-ice transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl mt-auto group/btn"
                >
                    <span>Consultar Disponibilidad</span>
                    <ExternalLink size={16} className="opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </button>
            </div>
        </div>
    );
};

// ============== MAIN COMPONENT ==============
const ServicesPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'traslados' | 'excursiones'>('traslados');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'excursiones') setActiveTab('excursiones');
        else setActiveTab('traslados');
    }, [searchParams]);

    const handleTabChange = (tab: 'traslados' | 'excursiones') => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    // ====== POLLINATIONS AI IMAGES (Generated on demand) ======
    const trasladosData: ServiceData[] = [
        {
            title: "Aeropuerto (FTE) - Hotel Céntrico",
            desc: "Recepción VIP. Vehículos Mercedes Sprinter climatizados. Traslado seguro y directo desde el aeropuerto hasta el lobby de tu hotel.",
            imageUrl: "https://image.pollinations.ai/prompt/luxury%20mercedes%20sprinter%20van%20black%20transfer%20airport%20snow%20mountains%20patagonia%20cinematic?width=800&height=600&nologo=true",
            whatsappText: "Hola, consulta por traslado Aeropuerto - Hotel.",
            meta: [{ icon: Users, text: "Privado / Shared" }, { icon: MapPin, text: "Puerta a Puerta" }],
            price: "Desde $12.500"
        },
        {
            title: "Glaciar Perito Moreno (Privado)",
            desc: "Tu tiempo, tus reglas. Te llevamos al Parque Nacional y te esperamos 4 horas para que disfrutes de las pasarelas sin apuro.",
            imageUrl: "https://image.pollinations.ai/prompt/perito%20moreno%20glacier%20ice%20walls%20blue%20water%20argentina%20cinematic%20photorealistic?width=800&height=600&nologo=true",
            whatsappText: "Hola, cotización por traslado privado al Glaciar.",
            meta: [{ icon: Clock, text: "Full Day" }, { icon: Users, text: "Exclusivo" }]
        },
        {
            title: "Full Day El Chaltén",
            desc: "Ruta 40 hacia el norte. Contemplá el Fitz Roy y hacé los senderos más famosos de la Argentina. Regreso en el día.",
            imageUrl: "https://image.pollinations.ai/prompt/mount%20fitz%20roy%20patagonia%20road%20trip%20mountains%20landscape%20sunny?width=800&height=600&nologo=true",
            whatsappText: "Hola, info sobre traslado a El Chaltén.",
            meta: [{ icon: Clock, text: "12 Horas" }, { icon: Mountain, text: "Trekking" }]
        }
    ];

    const excursionesData: ServiceData[] = [
        {
            title: "Minitrekking Glaciar Moreno",
            desc: "Ponete los crampones y caminá sobre el hielo vivo. Incluye navegación corta y brindis con whisky y hielo de glaciar.",
            imageUrl: "https://image.pollinations.ai/prompt/people%20hiking%20on%20blue%20glacier%20ice%20with%20crampons%20adventure%20pov?width=800&height=600&nologo=true",
            whatsappText: "Hola, quiero reservar Minitrekking.",
            meta: [{ icon: Mountain, text: "Dificultad Media" }, { icon: Clock, text: "Día Completo" }]
        },
        {
            title: "Navegación Ríos de Hielo",
            desc: "Navegación premium visitando los glaciares Spegazzini (el más alto) y Upsala. Una experiencia visual incomparable.",
            imageUrl: "https://image.pollinations.ai/prompt/modern%20catamaran%20boat%20sailing%20near%20iceberg%20glacier%20lake%20argentina?width=800&height=600&nologo=true",
            whatsappText: "Hola, info Navegación Ríos de Hielo.",
            meta: [{ icon: Bus, text: "Traslado Incluido" }, { icon: Users, text: "Familiar" }]
        },
        {
            title: "Nativo Experience 4x4",
            desc: "Adrenalina 4x4 y cultura. Ascenso al Cerro Frías en Land Rover, vistas panorámicas y almuerzo en cuevas históricas.",
            imageUrl: "https://image.pollinations.ai/prompt/land%20rover%20defender%20offroad%20patagonia%20steppe%20sunset?width=800&height=600&nologo=true",
            whatsappText: "Hola, me interesa Nativo Experience.",
            meta: [{ icon: Mountain, text: "4x4 Offroad" }, { icon: Users, text: "Almuerzo/Cena" }]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">

            {/* ======= HEADER ======= */}
            {/* Added relative and increased height */}
            <header className="relative h-[65vh] flex items-center justify-center overflow-visible z-20">

                {/* Background Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://image.pollinations.ai/prompt/patagonia%20mountains%20landscape%20lake%20panoramic%20cinematic%20dark?width=1920&height=1080&nologo=true"
                        alt="Patagonia Banner"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-10 animate-fade-in-up">
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

                {/* TABS FLOTANTES (Fixed positioning) */}
                {/* z-30 ensures clickable. -bottom-7 puts it halfway out. */}
                <div className="absolute -bottom-8 left-0 w-full flex justify-center z-30 px-4">
                    <div className="bg-white rounded-full shadow-2xl p-2 flex w-full max-w-lg ring-4 ring-slate-50/50 backdrop-blur-xl">
                        <button
                            onClick={() => handleTabChange('traslados')}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all duration-300 text-sm md:text-lg ${activeTab === 'traslados'
                                    ? 'bg-navy text-white shadow-lg transform scale-105'
                                    : 'text-slate-400 hover:text-navy hover:bg-slate-100'
                                }`}
                        >
                            <Bus size={20} />
                            <span>Traslados</span>
                        </button>
                        <button
                            onClick={() => handleTabChange('excursiones')}
                            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all duration-300 text-sm md:text-lg ${activeTab === 'excursiones'
                                    ? 'bg-navy text-white shadow-lg transform scale-105'
                                    : 'text-slate-400 hover:text-navy hover:bg-slate-100'
                                }`}
                        >
                            <Mountain size={20} />
                            <span>Excursiones</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ======= GRID CONTENT ======= */}
            {/* Increased padding top (pt-24) to account for the floating tabs overlapping */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32">
                <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-fade-in-up">
                    {activeTab === 'traslados' ? (
                        trasladosData.map((item, index) => <ServiceCard key={index} {...item} />)
                    ) : (
                        excursionesData.map((item, index) => <ServiceCard key={index} {...item} />)
                    )}
                </div>

                <div className="mt-20 text-center border-t border-slate-200 pt-10">
                    <p className="text-slate-400 mb-4 font-medium text-sm uppercase tracking-widest">Atención Personalizada</p>
                    <a
                        href="https://wa.me/5492902123456"
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
