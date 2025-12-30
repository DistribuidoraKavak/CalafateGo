import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bus, MapPin, Calendar, ShieldCheck } from 'lucide-react';
import heroGlaciar from '../assets/images/hero-glaciar.jpg';
import TravelAssistant from '../../components/TravelAssistant';

const Home: React.FC = () => {
    return (
        <>
            {/* ======= HERO SECTION ======= */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-32 md:py-0">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: `url(${heroGlaciar})` }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">

                        {/* Title & Subtitle */}
                        <div className="mb-10 animate-fade-in-up">
                            <p className="text-ice font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
                                Patagonia Argentina · El Calafate
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl font-sans">
                                Tu Experiencia en la Patagonia <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-white">Comienza Aquí</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-slate-100 mb-0 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                                Traslados privados y excursiones exclusivas diseñadas para vos.
                            </p>
                        </div>

                        {/* Central Assistant Integration */}
                        <div className="w-full animate-fade-in-up delay-[200ms]">
                            <TravelAssistant />
                        </div>

                        {/* Quick Links below assistant */}
                        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-in-up delay-[400ms]">
                            <Link
                                to="/servicios"
                                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105"
                            >
                                <span>Ver Todos los Servicios</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* ======= SERVICES PREVIEW ======= */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-navy font-bold tracking-widest uppercase text-sm mb-3">Nuestra Propuesta</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">Viajá con Excelencia</h3>
                        <div className="w-16 h-1 bg-ice mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Card 1: Traslados con estilo */}
                        <Link to="/servicios?tab=traslados" className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Bus size={120} className="text-navy" />
                            </div>
                            <div className="p-10 relative z-10">
                                <div className="w-14 h-14 bg-ice/10 rounded-2xl flex items-center justify-center mb-6 text-ice">
                                    <Bus size={28} />
                                </div>
                                <h4 className="text-2xl font-bold text-navy mb-3">Traslados Privados</h4>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Olvidate de las esperas. Te recibimos en el aeropuerto y te llevamos directo a tu hotel con la máxima comodidad y seguridad.
                                </p>
                                <span className="inline-flex items-center text-ice font-bold group-hover:gap-2 transition-all">
                                    Ver flota y tarifas <ArrowRight size={18} className="ml-2" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 2: Excursiones */}
                        <Link to="/servicios?tab=excursiones" className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MapPin size={120} className="text-navy" />
                            </div>
                            <div className="p-10 relative z-10">
                                <div className="w-14 h-14 bg-ice/10 rounded-2xl flex items-center justify-center mb-6 text-ice">
                                    <Mountain size={28} /> {/* Using Mountain icon manually since import might be missing */}
                                </div>
                                <h4 className="text-2xl font-bold text-navy mb-3">Excursiones Premium</h4>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Glaciar Perito Moreno, El Chaltén y navegaciones. Viví la naturaleza sin prisas y con guías expertos locales.
                                </p>
                                <span className="inline-flex items-center text-ice font-bold group-hover:gap-2 transition-all">
                                    Explorar aventuras <ArrowRight size={18} className="ml-2" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ======= FEATURES / VALUE PROP ======= */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 text-navy">
                                <ShieldCheck size={32} />
                            </div>
                            <h5 className="text-xl font-bold text-navy mb-3">Seguridad Garantizada</h5>
                            <p className="text-slate-600">Vehículos habilitados y conductores profesionales con amplia experiencia en rutas patagónicas.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 text-navy">
                                <Calendar size={32} />
                            </div>
                            <h5 className="text-xl font-bold text-navy mb-3">Puntualidad Absoluta</h5>
                            <p className="text-slate-600">Tu tiempo vale. Organizamos tu logística para que aproveches cada minuto de tu viaje.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 text-navy">
                                <MapPin size={32} />
                            </div>
                            <h5 className="text-xl font-bold text-navy mb-3">Conocimiento Local</h5>
                            <p className="text-slate-600">Somos de acá. Te brindamos los mejores consejos para que vivas El Calafate como un local.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= CTA SECTION ======= */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para tu viaje soñado?</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                        Contactanos hoy mismo y dejanos organizar tu llegada a la Tierra de Glaciares.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center space-x-2 bg-ice text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-glacier transition-all shadow-lg hover:shadow-ice/30 hover:-translate-y-1"
                    >
                        <span>Reservar Ahora</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
};

// Helper component for Mountain icon since it was missing in lucide import
const Mountain = ({ size = 24, className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
);

export default Home;
