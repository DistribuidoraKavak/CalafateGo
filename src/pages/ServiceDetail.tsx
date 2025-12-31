import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle2, Bus, MapPin, MessageCircle } from 'lucide-react';
import { getServiceById } from '../data/servicesData';

const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Debug Logs
    console.log("ServiceDetail - URL ID:", id);

    // Ensure we have an ID before searching
    const service = id ? getServiceById(id) : undefined;
    console.log("ServiceDetail - Found Service:", service);

    // If service not found, show error state
    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center py-20 bg-slate-50">
                <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <MapPin size={48} className="text-slate-400" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-display">Experiencia no encontrada</h1>
                <p className="text-slate-500 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                    El servicio que buscas no existe o ha sido movido.
                    <br />
                    <span className="text-sm mt-2 block text-slate-400">
                        ID buscado: <span className="font-mono bg-slate-200 px-2 py-1 rounded text-slate-600">{id || 'Ninguno'}</span>
                    </span>
                </p>
                <Link
                    to="/servicios"
                    className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    <ArrowLeft size={20} />
                    Volver a Servicios
                </Link>
            </div>
        );
    }

    const formattedPrice = typeof service.price === 'number'
        ? `US$ ${service.price}`
        : service.price;

    const handleWhatsAppClick = () => {
        const message = `Hola, quiero reservar: ${service.title}`;
        const url = `https://wa.me/5219988044284?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const isTraslado = service.category === 'traslados';

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* ======= HERO IMAGE ======= */}
            <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-20 bg-white/90 hover:bg-white backdrop-blur-md px-4 py-2 rounded-full text-navy font-bold flex items-center gap-2 shadow-lg transition-all hover:shadow-xl"
                >
                    <ArrowLeft size={20} />
                    <span className="hidden sm:inline">Volver</span>
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-ice font-bold tracking-widest uppercase text-xs mb-2">
                            {isTraslado ? 'Traslado Privado' : 'Excursión Premium'}
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-display leading-tight drop-shadow-lg">
                            {service.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="bg-emerald-500 text-white px-5 py-2 rounded-full text-xl md:text-2xl font-bold shadow-lg">
                                {formattedPrice}
                            </span>
                            {service.duration && (
                                <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                                    <Clock size={16} />
                                    {service.duration}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= CONTENT ======= */}
            <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
                {/* Description Card */}
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8">
                    <h2 className="text-xl font-bold text-navy mb-4 font-display flex items-center gap-2">
                        <span className="w-8 h-1 bg-ice rounded-full"></span>
                        Descripción del Servicio
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        {service.fullDesc}
                    </p>
                </div>

                {/* Vehicle Info (Traslados only) */}
                {isTraslado && (
                    <div className="bg-navy rounded-3xl shadow-xl p-6 md:p-10 mb-8 text-white">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded-2xl shrink-0">
                                <Bus size={32} className="text-ice" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 font-display">Unidad: JAC JS8 PRO 2025</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Vehículo premium con capacidad para hasta 4 pasajeros con equipaje o 6 sin equipaje.
                                    Aire acondicionado, asientos de cuero, y todo el confort para tu viaje.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Features List */}
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-8">
                    <h2 className="text-xl font-bold text-navy mb-6 font-display flex items-center gap-2">
                        <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                        ¿Qué incluye?
                    </h2>
                    <ul className="space-y-4">
                        {[
                            'Vehículo privado exclusivo',
                            'Chofer profesional bilingüe',
                            'Flexibilidad de horarios',
                            'Seguro de pasajeros incluido',
                            isTraslado ? 'Agua mineral a bordo' : 'Tiempo libre en destino'
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700">
                                <CheckCircle2 size={22} className="text-emerald-500 shrink-0" />
                                <span className="text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* WhatsApp CTA Section */}
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl shadow-2xl p-6 md:p-10 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display">¿Listo para reservar?</h2>
                    <p className="text-emerald-100 mb-6 max-w-md mx-auto">
                        Contáctanos por WhatsApp y te responderemos en minutos con disponibilidad y confirmación.
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="inline-flex items-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        <MessageCircle size={24} />
                        Reservar por WhatsApp
                    </button>
                </div>
            </main>

            {/* ======= FIXED BOTTOM CTA (Mobile) ======= */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 md:hidden z-40">
                <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center justify-center gap-3 bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-transform"
                >
                    <MessageCircle size={24} />
                    Reservar {formattedPrice}
                </button>
            </div>

            {/* Spacer for fixed button on mobile */}
            <div className="h-24 md:hidden"></div>
        </div>
    );
};

export default ServiceDetail;
