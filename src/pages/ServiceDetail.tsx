// ServiceDetail.tsx - Premium Architecture (Airbnb Luxe Style)
// Features: Mosaic Gallery, Visual Itinerary, Enhanced Sticky, FAQ

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Clock, CheckCircle2, Bus, MapPin,
    MessageCircle, Star, ShieldCheck, Users, Calendar,
    Camera, Info, ChevronDown, Check, ArrowRight
} from 'lucide-react';
import { getServiceById } from '../data/servicesData';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

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
    const formattedPrice = typeof service.price === 'number' ? `US$ ${service.price}` : service.price;

    const handleWhatsAppClick = () => {
        const message = `Hola, quiero reservar: ${service.title}`;
        const url = `https://wa.me/5219988044284?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // --- Dynamic Gallery Images ---
    // Generate derived images using Pollinations AI based on keywords
    const keywords = service.galleryKeywords || (isTraslado ? 'car road trip' : 'nature landscape');
    const galleryImages = [
        service.image, // Main image
        `https://image.pollinations.ai/prompt/${encodeURIComponent(keywords + ' close up detail elegant 4k photorealistic')}?width=800&height=600&nologo=true&seed=1`,
        `https://image.pollinations.ai/prompt/${encodeURIComponent(keywords + ' wide angle scenery cinematic lighting 4k')}?width=800&height=600&nologo=true&seed=2`,
        `https://image.pollinations.ai/prompt/${encodeURIComponent(keywords + ' tourists enjoying happy lifestyle 4k')}?width=800&height=600&nologo=true&seed=3`,
    ];

    return (
        <div className="bg-white min-h-screen font-sans pb-24 lg:pb-0">

            {/* ================= HERO CINEMÁTICO ================= */}
            <header className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-700"
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

                {/* ================= MOSAIC GALLERY (BENTO GRID) ================= */}
                <section className="mb-16 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                    {/* Main Large Image */}
                    <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-slate-100">
                        <img
                            src={galleryImages[0]}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Main view"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                    </div>

                    {/* Secondary Images */}
                    <div className="hidden md:block relative group overflow-hidden bg-slate-100">
                        <img src={galleryImages[1]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail 1" />
                    </div>
                    <div className="hidden md:block relative group overflow-hidden bg-slate-100 md:col-start-4">
                        <img src={galleryImages[2]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail 2" />
                    </div>
                    <div className="hidden md:block md:col-span-2 relative group overflow-hidden bg-slate-100">
                        <img src={galleryImages[3]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Detail 3" />
                        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                            + Ver Galería
                        </div>
                    </div>
                </section>

                {/* ================= 2-COLUMN LAYOUT ================= */}
                <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-20 items-start">

                    {/* --- COLUMNA IZQUIERDA (CONTENIDO) --- */}
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">

                        {/* Descripción Grande */}
                        <div className="prose prose-lg text-slate-600 leading-relaxed">
                            <h3 className="text-2xl font-bold text-navy font-display mb-4">Sobre esta experiencia</h3>
                            <p className="whitespace-pre-line text-lg">
                                {service.fullDesc}
                            </p>
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

                        {/* Enhanced Vehicle Card (Traslados Only) */}
                        {isTraslado && (
                            <div className="border border-slate-100 rounded-3xl p-2 bg-slate-50 flex flex-col md:flex-row gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                                <div className="md:w-1/3 h-48 md:h-auto bg-navy rounded-2xl flex items-center justify-center text-white relative overflow-hidden">
                                    {/* Abstract vehicle visual */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:10px_10px]"></div>
                                    <Bus size={64} strokeWidth={1} className="relative z-10" />
                                </div>
                                <div className="p-4 md:py-6 md:pr-6 flex-1 flex flex-col justify-center">
                                    <h4 className="text-lg font-bold text-navy mb-2">Unidad Premium: JAC JS8 PRO</h4>
                                    <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                        Viaja con el máximo confort. Asientos de cuero, climatización bizona y amplio espacio para equipaje.
                                    </p>
                                    <div className="flex gap-4 text-xs font-bold text-navy uppercase tracking-wider">
                                        <span className="bg-white px-3 py-1 rounded-md shadow-sm border border-slate-100">4 Pax</span>
                                        <span className="bg-white px-3 py-1 rounded-md shadow-sm border border-slate-100">Cuero</span>
                                        <span className="bg-white px-3 py-1 rounded-md shadow-sm border border-slate-100">A/C</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Grid "¿Qué incluye?" */}
                        <div className="border-t border-slate-100 pt-10">
                            <h3 className="text-xl font-bold text-navy font-display mb-8">Lo que incluye</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
                                {[
                                    { icon: Users, text: 'Servicio Privado Exclusivo' },
                                    { icon: ShieldCheck, text: 'Seguro de Pasajeros' },
                                    { icon: Bus, text: 'Vehículo Moderno' },
                                    { icon: Calendar, text: 'Flexibilidad Horaria' },
                                    ...(isTraslado
                                        ? [{ icon: CheckCircle2, text: 'Agua Mineral' }, { icon: Star, text: 'Chofer Guía' }]
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
                                        {typeof service.price === 'number' && <span className="text-slate-500">USD</span>}
                                    </div>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Precio Final</span>
                                </div>

                                <div className="border border-slate-100 rounded-xl my-6 divide-y divide-slate-100 text-sm">
                                    <div className="p-4 flex justify-between">
                                        <span className="text-slate-500">Duración</span>
                                        <span className="font-bold text-navy">{service.duration || 'Flexible'}</span>
                                    </div>
                                    <div className="p-4 flex justify-between">
                                        <span className="text-slate-500">Tipo</span>
                                        <span className="font-bold text-navy">Privado</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full bg-navy hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-lg flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                                >
                                    <MessageCircle size={22} />
                                    Reservar Ahora
                                </button>

                                {/* Guarantees */}
                                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <ShieldCheck size={14} className="text-emerald-500" />
                                        <span>Reserva Segura</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Star size={14} className="text-amber-500" />
                                        <span>Choferes Pro</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Check size={14} className="text-blue-500" />
                                        <span>Sin Comisiones</span>
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
                        {typeof service.price === 'number' && <span className="text-xs text-slate-500 font-bold">USD</span>}
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
