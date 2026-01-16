import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Bus, MapPin, Calendar, ShieldCheck, Star } from 'lucide-react';
import TravelAssistant from '../../components/TravelAssistant';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home: React.FC = () => {
    useScrollReveal();

    return (
        <div className="font-sans antialiased text-slate-900 bg-white">
            <Helmet>
                <title>CalafateGo | Traslados Privados y Excursiones en El Calafate</title>
                <meta name="description" content="Servicio premium de traslados y excursiones en El Calafate, Patagonia Argentina. Glaciar Perito Moreno, El Chaltén, Torres del Paine." />
                <meta property="og:title" content="CalafateGo | Traslados Privados y Excursiones en El Calafate" />
                <meta property="og:description" content="Servicio premium de traslados y excursiones en El Calafate, Patagonia Argentina." />
                <meta property="og:url" content="https://calafatego.com/" />
            </Helmet>
            {/* ======= HERO SECTION (Diseño Limpio) ======= */}
            <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/images/glaciar-perito.jpg')` }}
                ></div>
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-balanced">
                    <p className="text-ice font-bold tracking-[0.4em] uppercase mb-6 text-sm md:text-base drop-shadow-md font-display animate-fade-in-up">
                        Patagonia Argentina · El Calafate
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-none drop-shadow-2xl font-display tracking-wide animate-fade-in-up delay-100">
                        Tu Experiencia <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-ice to-white">en la Patagonia</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-12 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-sans animate-fade-in-up delay-200 text-relaxed">
                        Descubre la tierra de los glaciares con la comodidad y exclusividad que mereces.
                    </p>

                    <Link
                        to="/servicios"
                        className="btn-premium inline-flex items-center space-x-3 bg-white text-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-ice hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-fade-in-up delay-300"
                    >
                        <span>Explorar Experiencias</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* ======= SERVICES PREVIEW (Bloque Rectangular) ======= */}
            <section className="py-24 bg-slate-50 relative z-10 reveal">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
                        <h2 className="text-navy font-bold tracking-widest uppercase text-sm mb-3">Nuestra Propuesta</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-display">Viajá con Excelencia</h3>
                        <p className="text-slate-600 text-lg text-relaxed">
                            Seleccionamos las mejores experiencias y garantizamos traslados impecables para que tu única preocupación sea disfrutar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                        <ServiceCard
                            to="/servicios?tab=traslados"
                            title="Traslados Privados"
                            icon={<Bus size={28} />}
                            description="Tu vehículo, tus horarios. Servicio exclusivo solo para vos y tu grupo. Sin esperas ni compartir con desconocidos, con la flexibilidad total para disfrutar la ruta a tu ritmo."
                            cta="Ver Tarifas"
                            images={[
                                '/images/glaciar-pasarelas.jpg',      // Moreno
                                '/images/chalten-ruta-fitzroy.jpg',   // Ruta Chalten
                                '/images/torres-paine-lake-bridge.jpg', // Torres
                                '/images/aeropuerto-vista-terminal.jpg', // Aeropuerto / Bienvenida
                                '/images/lago-roca-cover.png'          // Lago Roca / Estepa
                            ]}
                        />

                        <ServiceCard
                            to="/servicios?tab=excursiones"
                            title="Excursiones"
                            icon={<Mountain size={28} />}
                            description="Actividades regulares en grupo compartido. Únete a otros viajeros para vivir las mejores experiencias guiadas: navegaciones, caminatas sobre hielo y aventuras 4x4."
                            cta="Ver Experiencias"
                            delay={200}
                            images={[
                                '/images/excursion-home-trekking.jpg', // Trekking hielo
                                '/images/excursion-home-boat.png',     // Barco
                                '/images/excursion-home-safari.png',    // Safari 4x4
                                '/images/glaciar-barco.png',            // Navegación grupal
                                '/images/chalten-full-condores.png'     // Trekking grupal
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* ======= CONCIERGE SECTION (Bloque Rectangular) ======= */}
            <section className="bg-navy py-24 relative overflow-hidden reveal">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 blur-3xl rounded-full translate-x-1/3"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left: Text */}
                        <div className="lg:w-1/2 text-left animate-fade-in-up">
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="text-ice fill-ice" size={20} />
                                <span className="text-ice font-bold tracking-widest uppercase text-sm">Servicio Premium</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
                                Tu Concierge Digital <br />
                                <span className="text-slate-400">Personalizado</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-relaxed">
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
                        <div className="lg:w-1/2 w-full animate-fade-in-up delay-200">
                            <TravelAssistant />
                        </div>
                    </div>
                </div>
            </section>

            {/* ======= CTA FOOTER (Bloque Rectangular) ======= */}
            <section className="py-24 bg-white relative overflow-hidden text-center reveal">
                <div className="container mx-auto px-6 animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 font-display">¿Listo para comenzar?</h2>
                    <Link
                        to="/contacto"
                        className="btn-premium inline-flex items-center space-x-3 bg-navy text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-2"
                    >
                        <span>Contactar Especialista</span>
                        <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};


// --- Helper Components ---

// Animated Carousel Card Component
interface ServiceCardProps {
    to: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    cta: string;
    images: string[];
    delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ to, title, icon, description, cta, images, delay = 0 }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    // Auto-cycle images every 3 seconds
    React.useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <Link
            to={to}
            className={`group relative h-[500px] overflow-hidden rounded-3xl shadow-2xl animate-fade-in-up border border-slate-100/10`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Animated Background Images */}
            {images.map((img, index) => (
                <div
                    key={img}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-[3000ms] ease-linear group-hover:scale-105"
                        style={{ transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)' }}
                    />
                </div>
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-500 group-hover:translate-y-[-10px]">
                <div className={`w-14 h-14 ${to.includes('traslados') ? 'bg-ice/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-navy shadow-lg shadow-ice/30 group-hover:scale-110 transition-transform duration-500`}>
                    {icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-3 font-display">{title}</h4>
                <p className="text-slate-200 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden text-sm md:text-base">
                    {description}
                </p>
                <span className={`inline-flex items-center text-white font-bold border-b-2 ${to.includes('traslados') ? 'border-ice' : 'border-white'} pb-1 hover:text-ice transition-colors`}>
                    {cta} <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
            </div>
        </Link>
    );
};

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
