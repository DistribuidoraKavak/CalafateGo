import React from 'react';
import { Camera, Compass, Ship, ArrowRight, Clock, Users, Star } from 'lucide-react';
import excursionFitzroy from '../assets/images/excursion-fitzroy.jpg';
import excursionGlaciar from '../assets/images/excursion-glaciar.png';
import excursionNavegacion from '../assets/images/excursion-navegacion.png';

interface ExcursionData {
    title: string;
    desc: string;
    longDesc: string;
    image: string;
    tag: string;
    icon: React.ReactNode;
    duration: string;
    groupSize: string;
    highlights: string[];
}

const ExcursionCard: React.FC<ExcursionData> = ({
    title, desc, image, tag, icon, duration, groupSize, highlights
}) => (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
        <div className="relative h-64 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-navy px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {tag}
                </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex items-center gap-2">
                {icon}
                <span className="text-sm font-medium">Experiencia Local</span>
            </div>
        </div>

        <div className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-3">{title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{desc}</p>

            <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                    <Clock size={16} className="text-ice" />
                    {duration}
                </span>
                <span className="flex items-center gap-2">
                    <Users size={16} className="text-ice" />
                    {groupSize}
                </span>
            </div>

            <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase mb-3">Incluye:</p>
                <div className="flex flex-wrap gap-2">
                    {highlights.map((h, i) => (
                        <span key={i} className="bg-snow text-navy text-xs px-3 py-1.5 rounded-full font-medium">
                            {h}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={() => window.open(`https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quisiera%20consultar%20por%20la%20excursion:%20${title}`, '_blank')}
                className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-ice transition-colors flex items-center justify-center gap-2"
            >
                <span>Consultar Disponibilidad</span>
                <ArrowRight size={18} />
            </button>
        </div>
    </div>
);

const Excursiones: React.FC = () => {
    const excursiones: ExcursionData[] = [
        {
            title: "Glaciar Perito Moreno",
            tag: "Clásico",
            icon: <Camera size={16} />,
            image: excursionGlaciar,
            desc: "Visitá el gigante de hielo más accesible del mundo. Te llevamos y esperamos mientras disfrutás de las pasarelas.",
            longDesc: "Traslado privado al Parque Nacional Los Glaciares. Incluye espera en pasarelas con tiempo libre para caminar, fotografiar y almorzar frente al glaciar.",
            duration: "Full Day",
            groupSize: "Hasta 7 pax",
            highlights: ["Traslado privado", "Espera en pasarelas", "Aire acondicionado", "Agua a bordo"]
        },
        {
            title: "Full Day El Chaltén",
            tag: "Aventura",
            icon: <Compass size={16} />,
            image: excursionFitzroy,
            desc: "Traslado a la capital nacional del trekking. Aprovechá los senderos al Fitz Roy con todo el día por delante.",
            longDesc: "Te llevamos temprano para que maximices tu día de trekking. Coordinamos horario de regreso según tus planes.",
            duration: "12-14 horas",
            groupSize: "Hasta 7 pax",
            highlights: ["Salida temprana", "Horario flexible", "GPS en vivo", "Snacks incluidos"]
        },
        {
            title: "Navegación Ríos de Hielo",
            tag: "Exclusivo",
            icon: <Ship size={16} />,
            image: excursionNavegacion,
            desc: "Traslado al Puerto Punta Bandera para conectar con las mejores navegaciones del Lago Argentino.",
            longDesc: "Servicio de traslado coordinado con los horarios de navegación. Incluye espera y regreso al hotel.",
            duration: "Según navegación",
            groupSize: "Hasta 7 pax",
            highlights: ["Coordinado con navegación", "Espera incluida", "Puntualidad garantizada", "Asistencia en puerto"]
        }
    ];

    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy/90">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Descubre la Patagonia</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Excursiones Imperdibles</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Traslados privados exclusivos para que vivas la aventura a tu propio ritmo, sin depender de grupos.
                    </p>
                </div>
            </section>

            {/* Excursion Cards */}
            <section className="py-24 bg-snow">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {excursiones.map((exc, i) => (
                            <ExcursionCard key={i} {...exc} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Lo que dicen nuestros viajeros</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-navy">Experiencias Reales</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "María García", location: "Buenos Aires", text: "Increíble el servicio al Perito Moreno. Puntualidad perfecta y el conductor muy amable. 100% recomendable!" },
                            { name: "John Smith", location: "USA", text: "Best transfer service in Calafate! Very professional and the van was very comfortable for the long trip to El Chaltén." },
                            { name: "Carlos Rodríguez", location: "Chile", text: "Excelente coordinación con la navegación. Llegamos justo a tiempo y la espera fue cómoda. Volveré a usar sus servicios." }
                        ].map((t, i) => (
                            <div key={i} className="bg-snow rounded-3xl p-8">
                                <div className="flex text-yellow-400 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-600 mb-6 italic">"{t.text}"</p>
                                <div>
                                    <p className="font-bold text-navy">{t.name}</p>
                                    <p className="text-sm text-slate-400">{t.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-navy">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Cuál es tu próxima aventura?</h2>
                    <p className="text-slate-300 mb-8 text-lg">Consultanos sin compromiso y armamos tu itinerario ideal</p>
                    <button
                        onClick={() => window.open('https://wa.me/5492902123456?text=Hola%20CalafateGo,%20quiero%20consultar%20por%20excursiones', '_blank')}
                        className="bg-ice text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-glacier transition-colors shadow-lg"
                    >
                        Consultar por WhatsApp
                    </button>
                </div>
            </section>
        </>
    );
};

export default Excursiones;
