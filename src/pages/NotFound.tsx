import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Mountain, Phone } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-slate-900 to-navy flex items-center justify-center px-6 py-20">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ice/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <div className="mb-8">
                    <span className="text-[150px] md:text-[200px] font-bold font-display leading-none bg-gradient-to-r from-ice via-emerald-400 to-ice bg-clip-text text-transparent">
                        404
                    </span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center text-ice">
                        <Mountain size={40} />
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                    ¡Ups! Parece que te perdiste en la Patagonia
                </h1>
                <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
                    No te preocupes, hasta los mejores exploradores se desvían del camino.
                    Esta página no existe, pero nosotros sí podemos ayudarte.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-ice to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-ice/25 hover:shadow-xl hover:shadow-ice/40 hover:scale-105 transition-all duration-300"
                    >
                        <Home size={22} />
                        Ir al Inicio
                    </Link>
                    <Link
                        to="/servicios"
                        className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                        <ArrowLeft size={22} />
                        Ver Servicios
                    </Link>
                </div>

                {/* Contact hint */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-slate-500 text-sm mb-3">¿Necesitás ayuda?</p>
                    <a
                        href="https://wa.me/5492966530638?text=Hola%20CalafateGo,%20necesito%20ayuda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-ice hover:text-emerald-400 transition-colors font-medium"
                    >
                        <Phone size={18} />
                        Contactanos por WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
