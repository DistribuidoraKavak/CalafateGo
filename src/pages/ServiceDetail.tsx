// ServiceDetail.tsx - Premium Architecture (Airbnb Luxe Style)
// Features: Mosaic Gallery, Visual Itinerary, Enhanced Sticky, FAQ

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ArrowLeft, Clock, CheckCircle2, Bus, MapPin,
    MessageCircle, Star, ShieldCheck, Users, Calendar,
    Camera, Info, ChevronDown, ChevronUp, Check, ArrowRight,
    CalendarRange, Languages, Ban, AlertCircle, PlusCircle
} from 'lucide-react';
import { getServiceById } from '../data/servicesData';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = React.useState(false);

    // Synchronous data fetch
    const service = id ? getServiceById(id) : undefined;
    const isTraslado = service?.category === 'traslados';

    // --- Error Views ---
    if (!id || !service) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-slate-50">
                <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                    <MapPin size={40} className="text-slate-400" />
                </div>
                <h1 className="text-2xl font-bold text-navy mb-2">Experiencia no encontrada</h1>
                <Link to="/servicios" className="text-emerald-600 font-bold hover:underline">
                    Volver a todos los servicios
                </Link>
            </div>
        );
    }

    // --- Helpers ---
    const formattedPrice = typeof service.price === 'number' ? `Desde US$ ${service.price}` : service.price;

    const handleWhatsAppClick = () => {
        const message = `Hola, quiero reservar: ${service.title}`;
        const url = `https://wa.me/5492966530638?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // --- Dynamic Gallery Images ---
    // --- Dynamic Gallery Images ---
    // Use uploaded gallery images if available, otherwise generate with AI
    const keywords = service.galleryKeywords || (isTraslado ? 'car road trip' : 'nature landscape');

    // Priority: 1. service.gallery, 2. AI Generated Fallback
    const galleryImages = service.gallery && service.gallery.length > 0
        ? service.gallery
        : [
            service.image, // Main image
            `https://image.pollinations.ai/prompt/${encodeURIComponent(keywords + ' close up detail elegant 4k photorealistic')}?width=800&height=600&nologo=true&seed=1`,
            `https://image.pollinations.ai/prompt/${encodeURIComponent(keywords + ' wide angle scenery cinematic lighting 4k')}?width=800&height=600&nologo=true&seed=2`,
            `https://image.pollinations.ai/prompt/${encodeURIComponent(keywords + ' tourists enjoying happy lifestyle 4k')}?width=800&height=600&nologo=true&seed=3`,
        ];

    return (
        <div className="bg-white min-h-screen font-sans pb-24 lg:pb-0">
            <Helmet>
                <title>{service.title} | CalafateGo</title>
                <meta name="description" content={service.shortDesc} />
                <meta property="og:title" content={`${service.title} | CalafateGo`} />
                <meta property="og:description" content={service.shortDesc} />
                <meta property="og:url" content={`https://calafatego.com/experiencia/${service.id}`} />
            </Helmet>

            {/* ================= HERO CINEMÁTICO ================= */}
            <header className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className={`absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700 
                        ${['exc-chalten-full', 'exc-torres-paine', 'trf-lagoroca'].includes(service.id) ? 'object-top' : ''}
                        ${service.id === 'trf-chalten' ? 'object-[center_25%]' : ''}
                        ${service.id === 'trf-puerto-bandera' ? 'object-[center_25%]' : ''}
                        ${service.id === 'trf-rio-gallegos' ? 'object-[center_75%]' : ''}
                        ${service.id === 'exc-safari-azul' ? 'object-[center_20%]' : ''}
                        ${service.id === 'exc-glaciares-gourmet' ? 'object-[center_75%]' : ''}
                        ${service.image.includes('glaciar-personas') ? 'object-bottom' : ''}
                        ${!['exc-chalten-full', 'exc-torres-paine', 'trf-lagoroca', 'trf-chalten', 'trf-puerto-bandera', 'trf-rio-gallegos', 'exc-safari-azul', 'exc-glaciares-gourmet'].includes(service.id) && !service.image.includes('glaciar-personas') ? 'object-center' : ''}
                    `}
                />

                {/* Gradient Bleed Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>

                {/* Navbar Placeholder for Back Button */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-30">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-white/90 hover:bg-white backdrop-blur-md px-4 py-2.5 rounded-full text-navy font-bold flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                    >
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline">Volver</span>
                    </button>
                </div>
            </header>

            {/* ================= MAIN CONTAINER ================= */}
            <main className="max-w-7xl mx-auto px-6 relative z-20 -mt-20 lg:-mt-32">

                {/* Title Section (Animate Up) */}
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-sm ${isTraslado ? 'bg-sky-500' : 'bg-emerald-500'}`}>
                            {isTraslado ? 'Traslado Privado' : 'Excursión Premium'}
                        </span>
                        {service.duration && (
                            <span className="bg-white/90 backdrop-blur text-slate-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                                <Clock size={12} /> {service.duration}
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy mb-2 font-display tracking-tight leading-none drop-shadow-sm">
                        {service.title}
                    </h1>
                    <div className="flex items-center gap-2 text-slate-500 font-medium">
                        <MapPin size={18} className="text-emerald-500" />
                        <span>El Calafate, Santa Cruz</span>
                        <span className="mx-2">•</span>
                        <Star size={18} className="text-amber-400 fill-amber-400" />
                        <span className="text-navy font-bold">5.0</span>
                        <span className="underline decoration-slate-300">(Reseñas verificadas)</span>
                    </div>
                </div>

                {/* ================= MOSAIC GALLERY - DESKTOP (BENTO GRID) ================= */}
                <section className="mb-16 hidden md:grid md:grid-cols-4 grid-rows-2 gap-3 h-[500px] rounded-3xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                    {/* Main Large Image */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-slate-100">
                        <img
                            src={galleryImages[0]}
                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${galleryImages[0]?.includes('glaciar-personas') ? 'object-bottom' : ''}`}
                            alt="Main view"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>

                    {/* Secondary Images */}
                    <div className="relative group overflow-hidden bg-slate-100">
                        <img src={galleryImages[1]} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${galleryImages[1]?.includes('glaciar-personas') ? 'object-bottom' : ''}`} alt="Detail 1" loading="lazy" />
                    </div>
                    <div className="relative group overflow-hidden bg-slate-100 md:col-start-4">
                        <img src={galleryImages[2]} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${galleryImages[2]?.includes('glaciar-personas') ? 'object-bottom' : ''}`} alt="Detail 2" loading="lazy" />
                    </div>
                    <div className="md:col-span-2 relative group overflow-hidden bg-slate-100">
                        <img src={galleryImages[3]} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${galleryImages[3]?.includes('glaciar-personas') ? 'object-bottom' : ''}`} alt="Detail 3" loading="lazy" />
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            + Ver Galería
                        </div>
                    </div>
                </section>

                {/* ================= MOBILE GALLERY (Horizontal Scroll) ================= */}
                <section className="mb-8 md:hidden">
                    <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
                        {galleryImages.map((img, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[80vw] h-[250px] rounded-2xl overflow-hidden shadow-lg snap-center bg-slate-100"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-2 mt-3">
                        {galleryImages.map((_, index) => (
                            <div key={index} className="w-2 h-2 rounded-full bg-slate-300"></div>
                        ))}
                    </div>
                </section>

                {/* ================= 2-COLUMN LAYOUT ================= */}
                <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-20 items-start">

                    {/* --- COLUMNA IZQUIERDA (CONTENIDO) --- */}
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">

                        {/* Descripción Grande */}
                        <div className="prose prose-lg text-slate-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-navy font-display mb-4">Sobre esta experiencia</h3>
                            <div className="relative">
                                <p className={`whitespace-pre-line text-lg transition-all duration-500 ${!isExpanded && service.fullDesc.length > 500 ? 'max-h-[300px] overflow-hidden mask-linear-fade' : ''}`}>
                                    {service.fullDesc}
                                </p>
                                {service.fullDesc.length > 500 && !isExpanded && (
                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                                )}
                            </div>

                            {service.fullDesc.length > 500 && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-emerald-600 font-bold hover:text-emerald-700 mt-4 flex items-center gap-2 transition-colors group"
                                >
                                    {isExpanded ? 'Leer menos' : 'Leer más'}
                                    {isExpanded ? (
                                        <ChevronUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                                    ) : (
                                        <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
                                    )}
                                </button>
                            )}
                        </div>

                        {/* VISUAL ITINERARY (TIMELINE) */}
                        {service.itinerary && service.itinerary.length > 0 && (
                            <div className="border-t border-slate-100 pt-10">
                                <h3 className="text-xl font-bold text-navy font-display mb-8">Itinerario del Viaje</h3>
                                <div className="space-y-0 relative pl-4">
                                    {/* Vertical Dotted Line */}
                                    <div className="absolute top-2 bottom-6 left-[27px] w-px border-l-2 border-dashed border-slate-200"></div>

                                    {service.itinerary.map((step, idx) => (
                                        <div key={idx} className="flex gap-6 relative pb-10 last:pb-0 group">
                                            {/* Node Circle */}
                                            <div className="w-6 h-6 rounded-full bg-white border-4 border-emerald-500 shrink-0 relative z-10 mt-1 shadow-sm group-hover:scale-110 transition-transform"></div>

                                            <div className="flex-1 -mt-1">
                                                <h4 className="text-lg font-bold text-navy">{step.title}</h4>
                                                {step.subtitle && (
                                                    <p className="text-slate-500 mt-1 text-base">{step.subtitle}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}



                        {/* Grid "¿Qué incluye?" O "Características" */}
                        <div className="border-t border-slate-100 pt-10">
                            {service.activityDetails ? (
                                <>
                                    <h3 className="text-xl font-bold text-navy font-display mb-6">Características de la actividad</h3>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                                            <Clock className="text-emerald-500 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="block font-bold text-navy text-sm">Duración</span>
                                                <span className="text-slate-600 text-sm">{service.activityDetails.duration}</span>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                                            <CalendarRange className="text-emerald-500 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="block font-bold text-navy text-sm">Temporada</span>
                                                <span className="text-slate-600 text-sm">{service.activityDetails.season}</span>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                                            <Languages className="text-emerald-500 shrink-0 mt-1" size={20} />
                                            <div>
                                                <span className="block font-bold text-navy text-sm">Idiomas</span>
                                                <span className="text-slate-600 text-sm">{service.activityDetails.languages}</span>
                                            </div>
                                        </div>
                                        {service.activityDetails.optional && (
                                            <div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3">
                                                <PlusCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                                                <div>
                                                    <span className="block font-bold text-navy text-sm">Opcional</span>
                                                    <span className="text-slate-600 text-sm">{service.activityDetails.optional}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Qué Incluye (Custom List) */}
                                    {service.activityDetails.included && (
                                        <div className="mb-6 bg-emerald-50/50 border border-emerald-100 rounded-xl p-5">
                                            <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                                                <CheckCircle2 size={18} className="text-emerald-600" />
                                                Qué incluye
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.activityDetails.included.map((item, idx) => (
                                                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                                                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Requisitos (Age & Physical) */}
                                    {service.activityDetails.requirements && (
                                        <div className="mb-6 bg-amber-50 border border-amber-100 rounded-xl p-5">
                                            <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                                                <AlertCircle size={18} className="text-amber-500" />
                                                Requisitos Importantes
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.activityDetails.requirements.map((req, idx) => (
                                                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0"></span>
                                                        {req}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* No Incluye */}
                                    {service.activityDetails.notIncluded && (
                                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                            <h4 className="font-bold text-navy mb-3 flex items-center gap-2">
                                                <Ban size={18} className="text-rose-400" />
                                                No incluye
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.activityDetails.notIncluded.map((item, idx) => (
                                                    <span key={idx} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs text-slate-600">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-navy font-display mb-8">Lo que incluye</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                                        {[
                                            { icon: Users, text: 'Servicio Privado Exclusivo' },
                                            { icon: ShieldCheck, text: 'Seguro de Pasajeros' },
                                            { icon: Bus, text: 'Vehículo Moderno' },
                                            { icon: Calendar, text: 'Flexibilidad Horaria' },
                                            ...(isTraslado
                                                ? [{ icon: Star, text: 'Chofer Profesional' }]
                                                : [{ icon: MapPin, text: 'Paradas Panorámicas' }, { icon: Camera, text: 'Tiempo para Fotos' }]
                                            )
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-navy shrink-0">
                                                    <item.icon size={24} strokeWidth={1.5} />
                                                </div>
                                                <span className="text-slate-700 font-medium">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* "WHAT TO KNOW" Tips Section */}
                        {service.tips && service.tips.length > 0 && (
                            <div className="pt-8">
                                <h3 className="text-xl font-bold text-navy font-display mb-6">Qué debes saber</h3>
                                <div className="grid gap-4">
                                    {service.tips.map((tip, idx) => (
                                        <div key={idx} className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 flex gap-4 items-start">
                                            <Info size={20} className="text-amber-500 shrink-0 mt-0.5" />
                                            <p className="text-slate-700 text-sm md:text-base">{tip}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Espaciador final para desktop */}
                        <div className="h-20 hidden lg:block"></div>
                    </div>

                    {/* --- COLUMNA DERECHA (STICKY CARD) --- */}
                    <div className="hidden lg:block relative h-full">
                        <div className="sticky top-24 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-t-4 border-navy animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

                            {/* Card Content */}
                            <div className="p-6 md:p-8">
                                <div className="flex items-end justify-between mb-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-navy tracking-tight">{formattedPrice}</span>
                                    </div>
                                </div>

                                <div className="border border-slate-100 rounded-xl my-6 divide-y divide-slate-100 text-sm">
                                    {service.duration && (
                                        <div className="p-4 flex justify-between">
                                            <span className="text-slate-500">Duración</span>
                                            <span className="font-bold text-navy">{service.activityDetails?.duration?.split('.')[0] || service.duration}</span>
                                        </div>
                                    )}

                                    {isTraslado ? (
                                        <div className="p-4 flex justify-between">
                                            <span className="text-slate-500">Tipo</span>
                                            <span className="font-bold text-navy">Privado</span>
                                        </div>
                                    ) : (
                                        <>
                                            {service.activityDetails?.difficulty && (
                                                <div className="p-4 flex justify-between">
                                                    <span className="text-slate-500">Dificultad</span>
                                                    <span className="font-bold text-navy px-2 py-0.5 bg-slate-100 rounded-lg">{service.activityDetails.difficulty}</span>
                                                </div>
                                            )}
                                            <div className="p-4 flex justify-between">
                                                <span className="text-slate-500">Modalidad</span>
                                                <span className="font-bold text-navy">Excursión Regular</span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full bg-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    <MessageCircle size={22} />
                                    {typeof service.price === 'number' ? 'Reservar Ahora' : 'Consultar Disponibilidad'}
                                </button>

                                {/* Guarantees */}
                                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <ShieldCheck size={14} className="text-emerald-500" />
                                        <span>Reserva Segura</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Star size={14} className="text-amber-500" />
                                        <span>{isTraslado ? 'Choferes Pro' : 'Guías Expertos'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Check size={14} className="text-blue-500" />
                                        <span>{isTraslado ? 'Sin Comisiones' : 'Atención Directa'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            {/* ================= MOBILE STICKY BOTTOM BAR ================= */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-50 lg:hidden flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom-full duration-500">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total</span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-navy">{formattedPrice}</span>
                    </div>
                </div>
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-navy text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-slate-800 active:scale-95 transition-all"
                >
                    Reservar
                    <ArrowRight size={18} />
                </button>
            </div>

        </div>
    );
};

export default ServiceDetail;
