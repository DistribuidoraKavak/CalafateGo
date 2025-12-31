import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
    // Parallax effect logic or just scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax-like fixed attachment or absolute */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-6 animate-in fade-in zoom-in duration-700">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight">
                        Pasión por la Patagonia
                    </h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-gray-200">
                        Tu anfitrión local en la tierra de los glaciares.
                    </p>
                </div>
            </section>

            {/* 2. Nuestra Historia (Split Screen) */}
            <section className="py-20 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Left */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold text-navy border-l-4 border-ice pl-4">
                            Más que una agencia, <br /> somos locales.
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed text-justify">
                            Nacimos y crecimos con el viento patagónico en la cara. Conocemos cada curva del camino hacia el Glaciar Perito Moreno y los secretos mejor guardados de El Calafate.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed text-justify">
                            En <strong>CalafateGo</strong>, no solo te llevamos de un punto a otro. Te recibimos en nuestra casa. Nuestro compromiso es transformar tu traslado o excursión en una experiencia sin preocupaciones, donde la puntualidad y la calidez humana son nuestra bandera.
                        </p>
                        <p className="text-lg font-medium text-navy italic">
                            "Queremos que te lleves de la Patagonia no solo fotos, sino la sensación de haber sido cuidado por amigos."
                        </p>
                    </div>

                    {/* Image Right */}
                    <div className="w-full md:w-1/2">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-ice to-navy rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="/images/team-meeting.jpg"
                                alt="Nuestro equipo planificando tu viaje"
                                className="relative rounded-3xl shadow-2xl w-full object-cover transform transition duration-500 hover:scale-[1.01]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. ¿Por Qué Elegirnos? (Grid de 3 Tarjetas) */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-ice font-bold uppercase tracking-widest text-sm">Nuestros Valores</span>
                        <h2 className="text-4xl font-bold text-navy mt-2">¿Por Qué Elegirnos?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Puntualidad */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-ice/10 transition-colors">
                                <Clock className="w-8 h-8 text-ice" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Puntualidad Garantizada</h3>
                            <p className="text-slate-600">
                                Tu tiempo vale oro. Monitoreamos los vuelos y coordinamos cada recogida para respetar cada minuto de tu itinerario.
                            </p>
                        </div>

                        {/* Card 2: Conocimiento Local */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-ice/10 transition-colors">
                                <MapPin className="w-8 h-8 text-ice" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Conocimiento Local</h3>
                            <p className="text-slate-600">
                                Somos de acá. Te brindamos los mejores tips gastronómicos y te llevamos a los rincones que solo los locales conocen.
                            </p>
                        </div>

                        {/* Card 3: Confort y Seguridad */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-ice/10 transition-colors">
                                <ShieldCheck className="w-8 h-8 text-ice" />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">Confort y Seguridad</h3>
                            <p className="text-slate-600">
                                Nuestras unidades son modernas, habilitadas y están preparadas para el clima patagónico. Viajá seguro y relajado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Banner CTA Final */}
            <section className="py-20 bg-navy relative overflow-hidden">
                {/* Background Image Integration if desired, otherwise solid navy/pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/images/fleet-generic.jpg')] bg-cover bg-fixed bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            ¿Listo para planear tu viaje?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl max-w-xl">
                            Dejanos ocuparnos de la logística para que vos solo te ocupes de disfrutar.
                        </p>
                    </div>

                    <Link
                        to="/contacto"
                        className="group flex items-center space-x-3 bg-white text-navy px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
                    >
                        <span>Contactar Ahora</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
