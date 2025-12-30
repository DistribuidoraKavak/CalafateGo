import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Bus, MapPin } from 'lucide-react';
import heroGlaciar from '../assets/images/hero-glaciar.jpg';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroGlaciar})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="animate-fade-in">
                        <p className="text-ice font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                            El Calafate · Patagonia Argentina
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Viví la Patagonia <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice to-glacier">sin límites</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Traslados privados, excursiones personalizadas y la comodidad que tu aventura merece. Desde el Aeropuerto hasta el corazón del Glaciar Perito Moreno.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/traslados"
                                className="group flex items-center justify-center space-x-2 bg-ice text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-glacier transition-all duration-300 shadow-lg hover:shadow-ice/30"
                            >
                                <span>Ver Traslados</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link
                                to="/contacto"
                                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
                            >
                                <span>Contactanos</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Services Preview Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Nuestros Servicios</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-navy mb-6">¿Qué ofrecemos?</h3>
                        <div className="w-20 h-1 gradient-ice mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service Card 1 */}
                        <Link to="/traslados" className="group bg-snow rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="bg-glacier/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Bus className="text-ice" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-navy mb-4">Traslados Privados</h4>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Aeropuerto, Terminal, Hoteles y más. Servicio puerta a puerta con vehículos modernos y conductores locales.
                            </p>
                            <span className="text-ice font-bold flex items-center group-hover:gap-3 transition-all">
                                Ver más <ArrowRight size={18} className="ml-2" />
                            </span>
                        </Link>

                        {/* Service Card 2 */}
                        <Link to="/excursiones" className="group bg-snow rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="bg-glacier/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <Mountain className="text-ice" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-navy mb-4">Excursiones</h4>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Glaciar Perito Moreno, El Chaltén, Navegaciones y más. Traslados exclusivos para las mejores experiencias.
                            </p>
                            <span className="text-ice font-bold flex items-center group-hover:gap-3 transition-all">
                                Ver más <ArrowRight size={18} className="ml-2" />
                            </span>
                        </Link>

                        {/* Service Card 3 */}
                        <Link to="/contacto" className="group bg-snow rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="bg-glacier/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                <MapPin className="text-ice" size={32} />
                            </div>
                            <h4 className="text-2xl font-bold text-navy mb-4">Reservá Ahora</h4>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Contactanos por WhatsApp o completá el formulario. Respuesta inmediata y atención personalizada.
                            </p>
                            <span className="text-ice font-bold flex items-center group-hover:gap-3 transition-all">
                                Contactar <ArrowRight size={18} className="ml-2" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-navy">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-ice mb-2">500+</p>
                            <p className="text-slate-300 font-medium">Viajeros Felices</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-ice mb-2">8</p>
                            <p className="text-slate-300 font-medium">Años de Experiencia</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-ice mb-2">4.9★</p>
                            <p className="text-slate-300 font-medium">Calificación Google</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-bold text-ice mb-2">24/7</p>
                            <p className="text-slate-300 font-medium">Atención WhatsApp</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
