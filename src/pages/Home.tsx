import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bus, MapPin, Calendar, ShieldCheck } from 'lucide-react';
import heroGlaciar from '../assets/images/hero-glaciar.jpg';
import TravelAssistant from '../../components/TravelAssistant';

const Home: React.FC = () => {
    return (
        <>
            {/* ======= HERO SECTION ======= */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: `url(${heroGlaciar})` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <div className="max-w-4xl mx-auto animate-fade-in-up">
                        <p className="text-white/90 font-bold tracking-[0.2em] uppercase mb-6 text-sm md:text-base drop-shadow-md">
                            Patagonia Argentina · El Calafate
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl font-sans tracking-tight">
                            Tu Experiencia <br />
                            en la Patagonia
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                            Traslados privados y excursiones exclusivas diseñadas a tu medida.
                        </p>

                        <Link
                            to="/servicios"
                            className="inline-flex items-center space-x-3 bg-ice text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-glacier transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-ice/50"
                        >
                            <span>Ver Servicios y Tarifas</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ======= ASSISTANT SECTION (Overlap) ======= */}
            <section className="relative z-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="-mt-24 md:-mt-32 max-w-4xl mx-auto">
                        <TravelAssistant />
                    </div>
                </div>
            </section>

            {/* ======= SERVICES PREVIEW ======= */}
            <section className="py-24 bg-slate-50 pt-32"> {/* Added pt-32 to account for overlap space */}
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-navy font-bold tracking-widest uppercase text-sm mb-3">Nuestra Propuesta</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">Viajá con Excelencia</h3>
                        <div className="w-16 h-1 bg-ice mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Card 1: Traslados con estilo */}
                        <Link to="/servicios?tab=traslados" className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Bus size={180} className="text-navy" />
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
                        <Link to="/servicios?tab=excursiones" className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block">
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <MapPin size={180} className="text-navy" />
                            </div>
                            <div className="p-10 relative z-10">
                                <div className="w-14 h-14 bg-ice/10 rounded-2xl flex items-center justify-center mb-6 text-ice">
                                    <Mountain size={28} />
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

// Helper component for Mountain icon
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
