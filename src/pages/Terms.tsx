import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-navy mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    <span>Volver al inicio</span>
                </Link>

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-navy/10 rounded-2xl flex items-center justify-center">
                        <FileText className="text-navy" size={28} />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-navy font-display">Términos y Condiciones</h1>
                        <p className="text-slate-500">Última actualización: Enero 2026</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">1. Servicios</h2>
                        <p className="text-slate-600 leading-relaxed">
                            CalafateGo ofrece servicios de traslados privados y excursiones turísticas en la región de El Calafate,
                            El Chaltén y la Patagonia Argentina. Todos nuestros servicios están sujetos a disponibilidad
                            y condiciones climáticas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">2. Reservas y Pagos</h2>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>Las reservas se confirman mediante WhatsApp o email</li>
                            <li>Se requiere una seña del 30% para confirmar servicios</li>
                            <li>El saldo se abona al momento del servicio</li>
                            <li>Aceptamos efectivo (pesos argentinos, dólares) y transferencias bancarias</li>
                            <li>Los precios publicados pueden variar sin previo aviso</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">3. Cancelaciones</h2>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li><strong>Más de 48 horas antes:</strong> Reembolso completo de la seña</li>
                            <li><strong>Entre 24-48 horas:</strong> Reembolso del 50% de la seña</li>
                            <li><strong>Menos de 24 horas:</strong> Sin reembolso</li>
                            <li><strong>Por clima:</strong> Reprogramación sin costo o reembolso completo</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">4. Responsabilidades del Pasajero</h2>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>Estar listo a la hora acordada (tolerancia de 15 minutos)</li>
                            <li>Proporcionar información precisa de vuelos y alojamiento</li>
                            <li>Portar documentación válida (DNI/Pasaporte)</li>
                            <li>Para viajes a Chile: pasaporte vigente obligatorio</li>
                            <li>Respetar las indicaciones del conductor y guía</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">5. Responsabilidades de CalafateGo</h2>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li>Vehículos en óptimas condiciones con seguro al día</li>
                            <li>Conductores profesionales habilitados</li>
                            <li>Puntualidad en los servicios</li>
                            <li>Monitoreo de vuelos para traslados al aeropuerto</li>
                            <li>Asistencia ante cualquier imprevisto durante el servicio</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">6. Limitación de Responsabilidad</h2>
                        <p className="text-slate-600 leading-relaxed">
                            CalafateGo no se hace responsable por demoras causadas por: condiciones climáticas adversas,
                            cortes de ruta, demoras en vuelos, o cualquier situación de fuerza mayor fuera de nuestro control.
                            En estos casos, haremos nuestro mejor esfuerzo para ofrecer alternativas o reprogramaciones.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">7. Contacto</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Para consultas sobre estos términos:
                        </p>
                        <ul className="text-slate-600 mt-3 space-y-1">
                            <li>📧 Email: reservas@calafatego.com</li>
                            <li>📱 WhatsApp: +54 9 2966 53-0638</li>
                        </ul>
                    </section>

                    <section className="bg-slate-50 rounded-2xl p-6">
                        <p className="text-slate-500 text-sm">
                            Al contratar nuestros servicios, aceptás estos términos y condiciones en su totalidad.
                            CalafateGo se reserva el derecho de modificar estos términos en cualquier momento.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
