import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bus, MapPin, Calendar, ShieldCheck, Star } from 'lucide-react';
import heroGlaciar from '../assets/images/hero-glaciar.jpg';
import TravelAssistant from '../../components/TravelAssistant';

const Home: React.FC = () => {
    return (
        <div className="font-sans antialiased text-slate-900 bg-white">
            {/* ======= HERO SECTION (Full Screen Parallax) ======= */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
                    style={{ backgroundImage: `url(${heroGlaciar})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                    <div className="max-w-5xl mx-auto animate-fade-in-up">
                        <p className="text-white/90 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base drop-shadow-md font-display">
                            Patagonia Argentina · El Calafate
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none drop-shadow-2xl font-display tracking-wide">
                            Tu Experiencia <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white">en la Patagonia</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-sans">
                            Descubre la tierra de los glaciares con la comodidad y exclusividad que mereces.
                        </p>

                        <Link
                            to="/servicios"
                            className="inline-flex items-center space-x-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-navy transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-white/20 backdrop-blur-sm"
                        >
                            <span>Explorar Experiencias</span>
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* ======= CONCIERGE SECTION (Split & Dark) ======= */}
            <section className="bg-navy py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 blur-3xl rounded-full translate-x-1/3"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left: Text */}
                        <div className="lg:w-1/2 text-left">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="text-ice fill-ice" size={20} />
                                <span className="text-ice font-bold tracking-widest uppercase text-sm">Servicio Premium</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
                                Tu Concierge Digital <br />
                                <span className="text-slate-400">Personalizado</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                                No solo te llevamos, te asesoramos. Preguntale a nuestro asistente inteligente sobre:
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Estado del tiempo en tiempo real',
                                    'Recomendaciones de vestimenta técnica',
                                    'Tiempos exactos de traslado',
                                    'Mejores horarios para visitar el Glaciar'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <div className="w-6 h-6 rounded-full bg-ice/20 flex items-center justify-center mr-3 text-ice">
                                            <ShieldCheck size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Assistant Component */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-ice to-glacier rounded-3xl blur opacity-30"></div>
                                <div className="relative">
                                    <TravelAssistant />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= SERVICES PREVIEW (Grid & Hover Effects) ======= */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-navy font-bold tracking-widest uppercase text-sm mb-3">Nuestra Propuesta</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-display">Viajá con Excelencia</h3>
                        <p className="text-slate-600 text-lg">
                            Seleccionamos las mejores experiencias y garantizamos traslados impecables para que tu única preocupación sea disfrutar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        {/* Card 1: Traslados */}
                        <Link to="/servicios?tab=traslados" className="group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                            {/* Background Image Placeholder - In real app use specific images */}
                            <div className="absolute inset-0 bg-slate-900">
                                {/* Simulating an image with pattern/icon for now as we might lack specific stock photos for each card background */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 to-slate-900"></div>
                                <Bus size={300} className="absolute -bottom-20 -right-20 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-500 group-hover:translate-y-[-10px]">
                                <div className="w-14 h-14 bg-ice rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-ice/30 group-hover:scale-110 transition-transform duration-500">
                                    <Bus size={28} />
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-3 font-display">Traslados Privados</h4>
                                <p className="text-slate-300 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                                    Servicio puerta a puerta desde Aeropuerto FTE y hoteles. Vehículos de alta gama, climatizados y con choferes profesionales.
                                </p>
                                <span className="inline-flex items-center text-white font-bold border-b border-ice pb-1">
                                    Ver Tarifas <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </div>
                        </Link>

                        {/* Card 2: Excursiones */}
                        <Link to="/servicios?tab=excursiones" className="group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                            <div className="absolute inset-0 bg-slate-800">
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-slate-900"></div>
                                <MapPin size={300} className="absolute -bottom-20 -right-20 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-500 group-hover:translate-y-[-10px]">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-navy shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <Mountain size={28} />
                                </div>
                                <h4 className="text-3xl font-bold text-white mb-3 font-display">Excursiones Premium</h4>
                                <p className="text-slate-300 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden">
                                    Navegaciones exclusivas, trekking en El Chaltén y la majestuosidad del Perito Moreno. Viví la Patagonia a tu ritmo.
                                </p>
                                <span className="inline-flex items-center text-white font-bold border-b border-white pb-1">
                                    Ver Experiencias <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ======= CTA FOOTER ======= */}
            <section className="py-24 bg-white relative overflow-hidden text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 font-display">¿Listo para comenzar?</h2>
                    <Link
                        to="/contacto"
                        className="inline-flex items-center space-x-3 bg-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        <span>Contactar Especialista</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
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
