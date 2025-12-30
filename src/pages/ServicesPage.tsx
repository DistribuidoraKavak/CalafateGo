import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Bus, Mountain, ArrowRight, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';

// ============== CARD COMPONENT (HORIZONTAL DESKTOP / VERTICAL MOBILE) ==============
interface ServiceData {
    title: string;
    desc: string;
    image: string;
    whatsappText: string;
    tags?: string[];
}

const ServiceCard: React.FC<ServiceData> = ({ title, desc, image, whatsappText, tags }) => (
    <div className="group bg-white rounded-[2rem] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col md:flex-row h-full md:h-[280px]">
        {/* Image Side */}
        <div className="md:w-5/12 relative overflow-hidden h-64 md:h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient for Text Contrast just in case */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
        </div>

        {/* Content Side */}
        <div className="md:w-7/12 p-8 flex flex-col justify-between">
            <div>
                <h3 className="text-2xl font-bold font-display text-navy mb-3 group-hover:text-ice transition-colors">
                    {title}
                </h3>
                {tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map((tag, i) => (
                            <span key={i} className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                )}
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                    {desc}
                </p>
            </div>

            <div className="mt-auto">
                <button
                    onClick={() => window.open(`https://wa.me/5492902123456?text=${encodeURIComponent(whatsappText)}`, '_blank')}
                    className="inline-flex items-center space-x-2 text-ice font-bold hover:text-navy transition-colors group/btn"
                >
                    <span>Consultar Disponibilidad</span>
                    <ExternalLink size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </div>
);

// ============== MAIN COMPONENT ==============
const ServicesPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<'traslados' | 'excursiones'>('traslados');

    // Sync tab with URL
    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'excursiones') setActiveTab('excursiones');
        else setActiveTab('traslados');
    }, [searchParams]);

    const handleTabChange = (tab: 'traslados' | 'excursiones') => {
        setActiveTab(tab);
        setSearchParams({ tab });
    };

    // ====== DATA ======
    const trasladosData: ServiceData[] = [
        {
            title: "Aeropuerto (FTE) - Hotel Céntrico",
            desc: "Recepción personalizada con cartel identificatorio. Traslado seguro y confortable hasta la puerta de su hotel. Unidades hasta 4 pax.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, quisiera consultar por el traslado Aeropuerto - Hotel.",
            tags: ["Privado", "Hasta 4 Pax", "Recepción"]
        },
        {
            title: "Visita al Glaciar Perito Moreno",
            desc: "Traslado privado exclusivo. Te pasamos a buscar, te llevamos al Parque Nacional y te esperamos 4 horas para que recorras las pasarelas a tu ritmo.",
            image: "https://images.unsplash.com/photo-1534234828563-025c8c474d06?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, me interesa el traslado privado al Glaciar Perito Moreno.",
            tags: ["Full Day", "Espera incluida", "Flexible"]
        },
        {
            title: "Full Day El Chaltén",
            desc: "Ida y vuelta en el día a la Capital Nacional del Trekking. Salimos temprano para aprovechar el día en los senderos del Fitz Roy.",
            image: "https://images.unsplash.com/photo-1518182170546-0766bd6f6a56?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, quisiera información sobre el traslado Full Day a El Chaltén.",
            tags: ["Aventura", "12 Horas", "Ruta 40"]
        }
    ];

    const excursionesData: ServiceData[] = [
        {
            title: "Minitrekking",
            desc: "La experiencia de caminar sobre el hielo del Glaciar Perito Moreno. Incluye navegación corta frente a la pared sur y caminata con crampones.",
            image: "https://images.unsplash.com/photo-1517478335359-994df784b806?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, quiero consultar disponibilidad para el Minitrekking.",
            tags: ["Aventura Alta", "Crampones", "Navegación"]
        },
        {
            title: "Navegación Ríos de Hielo",
            desc: "Navegación en catamarán de lujo recorriendo los glaciares Upsala y Spegazzini entre témpanos gigantes. Una experiencia visual inigualable.",
            image: "https://images.unsplash.com/photo-1505537672228-569d585469af?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, me interesa la Navegación Ríos de Hielo.",
            tags: ["Relax", "Todo Público", "Catamarán"]
        },
        {
            title: "Nativo Experience",
            desc: "Ascenso en 4x4 al Cerro Frías, vistas panorámicas del Lago Argentino y cena en cuevas naturales con inmersión en la historia antropológica.",
            image: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, quisiera saber más sobre Nativo Experience.",
            tags: ["4x4", "Cena Incluida", "Cultura"]
        },
        {
            title: "Estancia Cristina",
            desc: "Navegación hasta una estancia histórica inaccesible por tierra. Día de campo, historia patagónica, trekking 4x4 y vistas al Glaciar Upsala.",
            image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
            whatsappText: "Hola, consulta por excursión a Estancia Cristina.",
            tags: ["Full Day", "Historia", "Navegación"]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* ======= HEADER WITH TABS ======= */}
            <section className="bg-navy pt-32 pb-12 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <p className="text-ice font-bold tracking-[0.2em] uppercase text-sm mb-4 font-display">Experiencias CalafateGo</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 font-display">eligí tu próxima aventura</h1>

                    {/* TABS CONTAINER */}
                    <div className="inline-flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-2xl p-1.5 shadow-xl border border-white/10">
                        <button
                            onClick={() => handleTabChange('traslados')}
                            className={`flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full md:w-auto ${activeTab === 'traslados'
                                    ? 'bg-white text-navy shadow-lg scale-105'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Bus size={22} className={activeTab === 'traslados' ? 'text-ice' : ''} />
                            <span>Traslados Privados</span>
                        </button>
                        <button
                            onClick={() => handleTabChange('excursiones')}
                            className={`flex items-center justify-center gap-3 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 w-full md:w-auto ${activeTab === 'excursiones'
                                    ? 'bg-white text-navy shadow-lg scale-105'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Mountain size={22} className={activeTab === 'excursiones' ? 'text-ice' : ''} />
                            <span>Excursiones y Aventuras</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ======= CONTENT GRID ======= */}
            <section className="container mx-auto px-6 -mt-8 relative z-20">
                <div className="max-w-5xl mx-auto space-y-8">
                    {activeTab === 'traslados' ? (
                        <div className="animate-fade-in-up space-y-6">
                            {trasladosData.map((item, index) => (
                                <ServiceCard key={index} {...item} />
                            ))}
                        </div>
                    ) : (
                        <div className="animate-fade-in-up space-y-6">
                            {excursionesData.map((item, index) => (
                                <ServiceCard key={index} {...item} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
