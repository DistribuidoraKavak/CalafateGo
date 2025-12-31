import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Bus, Mountain, ExternalLink, X, Info, CheckCircle2 } from 'lucide-react';

// ============== TYPES & DATA ==============
interface ServiceItem {
    id: string;
    title: string;
    price: number | string; // number or 'Consultar'
    shortDesc: string;
    fullDesc: string;
    image: string;
}

const TRASLADOS_DATA: ServiceItem[] = [
    {
        id: 'trf-aeropuerto',
        title: 'Aeropuerto FTE IN/OUT',
        price: 30,
        shortDesc: 'Recepción en Aeropuerto y traslado directo a tu hospedaje.',
        fullDesc: 'El servicio IN comienza con la recepción de los pasajeros en el Aeropuerto Internacional Comandante Armando Tola (FTE). Traslado privado directo hasta su hospedaje. El servicio OUT se realiza coordinando el retiro desde su hospedaje en el horario más conveniente según su vuelo. Capacidad: 4 pax con valijas / 6 sin valijas.',
        image: '/images/traslado-aeropuerto.jpg'
    },
    {
        id: 'trf-terminal',
        title: 'Terminal de Ómnibus IN/OUT',
        price: 20,
        shortDesc: 'Conexión rápida entre la terminal y tu hotel.',
        fullDesc: 'Recepción en la Terminal de Ómnibus de El Calafate y traslado privado directo hasta su hospedaje. Ideal para quienes llegan con equipaje o en horarios especiales. Coordinamos el retiro con flexibilidad total.',
        image: '/images/traslado-aeropuerto.jpg'
    },
    {
        id: 'trf-chalten',
        title: 'Traslado a El Chaltén',
        price: 200,
        shortDesc: 'Viaje a la Capital Nacional del Trekking (Ruta 40).',
        fullDesc: 'Traslado privado exclusivo hacia El Chaltén (aprox 220km). Disfruta de las vistas del Fitz Roy y el Cerro Torre en el camino sin esperas ni horarios rígidos de buses regulares.',
        image: '/images/traslado-chalten.jpg'
    },
    {
        id: 'trf-puerto-bandera',
        title: 'Puerto Bandera (Un tramo)',
        price: 90,
        shortDesc: 'Conexión para navegaciones.',
        fullDesc: 'Traslado privado hacia Puerto Bandera (47km), punto de partida de las navegaciones Todo Glaciares o Spegazzini. Te llevamos con puntualidad para tu embarque.',
        image: '/images/navegacion-lago.jpg'
    },
    {
        id: 'trf-rio-gallegos',
        title: 'Traslado a Río Gallegos',
        price: 330,
        shortDesc: 'Capital de Santa Cruz (Ida o Vuelta).',
        fullDesc: 'Traslado privado hacia Río Gallegos. Opción ideal para conexiones aéreas, trámites o visitas a la capital. Coordinamos horarios a medida con flexibilidad total.',
        image: '/images/patagonia-4x4.jpg'
    },
    {
        id: 'trf-glaciarium',
        title: 'Visita al Glaciarium',
        price: 80,
        shortDesc: 'Museo del Hielo Patagónico.',
        fullDesc: 'Te llevamos al centro de interpretación Glaciarium. Conoce cómo se forman los glaciares de manera interactiva. Tiempo de espera incluido para tu visita y regreso al hotel.',
        image: '/images/glaciarium.jpg'
    },
    {
        id: 'trf-lagoroca',
        title: 'Lago Roca / Nibepo Aike',
        price: 180,
        shortDesc: 'Zona sur del Parque Nacional.',
        fullDesc: 'Traslado hacia el sector del Lago Roca o Estancia Nibepo Aike. Ideal para días de campo o trekkings en la zona sur.',
        image: '/images/patagonia-4x4.jpg'
    }
];

const EXCURSIONES_DATA: ServiceItem[] = [
    {
        id: 'exc-perito-moreno',
        title: 'Glaciar Perito Moreno',
        price: 140,
        shortDesc: 'Excursión día completo con espera flexible.',
        fullDesc: 'Recorrido de 80km hasta el Parque Nacional. Podrán caminar libremente por las pasarelas el tiempo que deseen. Sin límite de horas de espera ni horarios rígidos de regreso. Opcional: Navegación cara norte.',
        image: '/images/glaciar-perito.jpg'
    },
    {
        id: 'exc-bandera-moreno',
        title: 'Puerto Bandera + Glaciar Moreno',
        price: 220,
        shortDesc: 'Dos imperdibles en un solo día.',
        fullDesc: 'Combina la navegación por el Lago Argentino (saliendo de Puerto Bandera) con la visita a las pasarelas del Perito Moreno. Optimizamos tu tiempo con un traslado privado que conecta ambos puntos.',
        image: '/images/navegacion-lago.jpg'
    },
    {
        id: 'exc-chalten-full',
        title: 'El Chaltén Full Day',
        price: 280,
        shortDesc: 'Visita por el día a la montaña.',
        fullDesc: 'Ida y vuelta en el día. Ideal para realizar caminatas cortas (Chorrillo del Salto, Mirador de los Cóndores) o disfrutar del pueblo. Regreso coordinado según tus tiempos.',
        image: '/images/traslado-chalten.jpg'
    },
    {
        id: 'exc-torres-paine',
        title: 'Torres del Paine (Chile)',
        price: 'Consultar',
        shortDesc: 'Excursión Full Day internacional.',
        fullDesc: 'Cruce de frontera por Cancha Carrera. Recorrido por los puntos panorámicos del Parque Nacional Torres del Paine (Lago Toro, Río Serrano, Cuernos del Paine, Laguna Amarga). Jornada completa con regreso aprox 21hs.',
        image: '/images/torres-paine.jpg'
    },
    {
        id: 'exc-walichu',
        title: 'Cuevas del Walichu',
        price: 90,
        shortDesc: 'Historia y pinturas rupestres.',
        fullDesc: 'Visita al sitio arqueológico a orillas del Lago Argentino. Recorrido por las cuevas con pinturas rupestres y vistas panorámicas. Experiencia sin apuros.',
        image: '/images/cuevas-walichu.jpg'
    },
    {
        id: 'exc-city-tour',
        title: 'City Tour Panorámico',
        price: 90,
        shortDesc: 'Lo mejor de El Calafate.',
        fullDesc: 'Recorrido por Laguna Nimez (aves), Bahía Redonda, Cisnes de cuello negro y miradores de la ciudad. Ideal para el día de llegada o partida.',
        image: '/images/navegacion-lago.jpg'
    }
];

// ============== CARD COMPONENT ==============
interface ServiceCardProps {
    data: ServiceItem;
    category: 'traslados' | 'excursiones';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, category }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Using local image directly
    const imageUrl = data.image;

    const formattedPrice = typeof data.price === 'number'
        ? `US$ ${data.price}`
        : data.price;

    const handleWhatsAppClick = () => {
        const message = `Hola, quiero reservar ${data.title}`;
        const url = `https://wa.me/5219988044284?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            {/* CARD CERRADA */}
            <div
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-500 transform hover:scale-[1.02] border border-slate-100 group cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900/10">
                    <img
                        src={imageUrl}
                        alt={data.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-emerald-600 shadow-lg z-10 animate-fade-in">
                        {formattedPrice}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                    <h3 className="text-xl font-bold text-navy mb-3 font-display leading-tight group-hover:text-emerald-600 transition-colors">
                        {data.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                        {data.shortDesc}
                    </p>

                    <button
                        className="w-full py-3 rounded-xl font-bold text-sm bg-slate-100 text-navy hover:bg-navy hover:text-white transition-all flex items-center justify-center gap-2 group/btn mt-auto"
                    >
                        <span>Ver Detalle</span>
                        <ExternalLink size={16} className="opacity-70 group-hover/btn:opacity-100 transition-all" />
                    </button>
                </div>
            </div>

            {/* EXPANDED MODAL OVERLAY */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Modal Header Image */}
                        <div className="relative h-56 md:h-72 w-full shrink-0 group">
                            <img
                                src={imageUrl}
                                alt={data.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70"></div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 backdrop-blur-md p-2 rounded-full text-white transition-all hover:rotate-90 z-20"
                            >
                                <X size={24} />
                            </button>

                            <div className="absolute bottom-0 left-0 w-full p-6 text-white text-shadow-lg z-10">
                                <h2 className="text-2xl md:text-3xl font-bold font-display mb-2 leading-tight">{data.title}</h2>
                                <div className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-lg font-bold shadow-lg">
                                    {formattedPrice}
                                </div>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-white">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Info size={14} className="text-emerald-500" /> Descripción del Servicio
                                    </h4>
                                    <p className="text-slate-600 leading-loose text-base md:text-lg">
                                        {data.fullDesc}
                                    </p>
                                </div>

                                {/* Vehicle Info Badge - Only for Traslados */}
                                {category === 'traslados' && (
                                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="bg-navy/10 p-2.5 rounded-lg text-navy shrink-0">
                                            <Bus size={24} />
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-navy mb-1 text-sm md:text-base">Unidad: JAC JS8 PRO 2025</h5>
                                            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                                                Hasta 4 pax con equipaje / 6 pax sin equipaje. <br className="hidden md:block" />Confort premium y seguridad garantizada.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                <div className="pt-2">
                                    <button
                                        onClick={handleWhatsAppClick}
                                        className="w-full py-4 rounded-xl font-bold text-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform active:scale-[0.98]"
                                    >
                                        <span>Reservar por WhatsApp</span>
                                        <CheckCircle2 size={24} />
                                    </button>
                                    <p className="text-center text-xs text-slate-400 mt-3">
                                        Te responderemos a la brevedad para confirmar disponibilidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
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

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">

            {/* ======= HEADER ======= */}
            <header className="relative h-[60vh] flex items-center justify-center overflow-visible z-20">

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

                {/* TABS FLOTANTES */}
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
            <main className="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32">
                <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-fade-in-up">
                    {activeTab === 'traslados' ? (
                        TRASLADOS_DATA.map((item) => <ServiceCard key={item.id} data={item} category="traslados" />)
                    ) : (
                        EXCURSIONES_DATA.map((item) => <ServiceCard key={item.id} data={item} category="excursiones" />)
                    )}
                </div>

                <div className="mt-20 text-center border-t border-slate-200 pt-10">
                    <p className="text-slate-400 mb-4 font-medium text-sm uppercase tracking-widest">Atención Personalizada</p>
                    <a
                        href="https://wa.me/5219988044284"
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
