import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Plane, Cloud, Sparkles, ArrowRight } from 'lucide-react';

const TravelAssistant: React.FC = () => {
    const quickActions = [
        {
            label: 'Ir al Glaciar',
            icon: <Mountain size={20} />,
            link: '/servicios?tab=excursiones',
            color: 'from-ice to-glacier'
        },
        {
            label: 'Transfer Aeropuerto',
            icon: <Plane size={20} />,
            link: '/servicios?tab=traslados',
            color: 'from-navy to-ice'
        },
        {
            label: 'Ver Clima',
            icon: <Cloud size={20} />,
            onClick: () => window.open('https://www.weather.com/es-AR/tiempo/hoy/l/-50.34,-72.26', '_blank'),
            color: 'from-glacier to-navy'
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-navy to-slate-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-ice/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-glacier/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 bg-ice/20 rounded-2xl">
                            <Sparkles className="text-ice" size={28} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Asistente de Viaje
                        </h2>
                    </div>

                    {/* Question */}
                    <p className="text-center text-xl md:text-2xl text-slate-200 mb-10">
                        ¿Qué necesitás en <span className="text-ice font-bold">El Calafate</span>?
                    </p>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {quickActions.map((action, index) => (
                            action.onClick ? (
                                <button
                                    key={index}
                                    onClick={action.onClick}
                                    className={`group bg-gradient-to-r ${action.color} p-6 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
                                >
                                    {action.icon}
                                    <span>{action.label}</span>
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ) : (
                                <Link
                                    key={index}
                                    to={action.link!}
                                    className={`group bg-gradient-to-r ${action.color} p-6 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
                                >
                                    {action.icon}
                                    <span>{action.label}</span>
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Subtitle */}
                    <p className="text-center text-slate-400 mt-8 text-sm">
                        Elegí una opción o <Link to="/contacto" className="text-ice hover:underline">contactanos por WhatsApp</Link> para atención personalizada
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TravelAssistant;
