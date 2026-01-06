import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
                        <Shield className="text-navy" size={28} />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-navy font-display">Política de Privacidad</h1>
                        <p className="text-slate-500">Última actualización: Enero 2026</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">1. Información que recopilamos</h2>
                        <p className="text-slate-600 leading-relaxed">
                            En CalafateGo recopilamos información personal mínima necesaria para brindar nuestros servicios de transporte y turismo.
                            Esto incluye: nombre, número de teléfono, correo electrónico, información de vuelos (cuando aplica),
                            y preferencias de servicio que nos compartas a través de WhatsApp o nuestro formulario de contacto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">2. Cómo usamos tu información</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Utilizamos tu información exclusivamente para:
                        </p>
                        <ul className="list-disc list-inside text-slate-600 mt-3 space-y-2">
                            <li>Coordinar y confirmar tus reservas de traslados y excursiones</li>
                            <li>Comunicarnos contigo sobre cambios o actualizaciones de tu servicio</li>
                            <li>Mejorar la calidad de nuestros servicios</li>
                            <li>Enviarte información relevante sobre promociones (solo si lo autorizás)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">3. Protección de datos</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Tu información personal está protegida y nunca será vendida, alquilada o compartida con terceros
                            sin tu consentimiento explícito, excepto cuando sea requerido por ley.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">4. Cookies y análisis</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Utilizamos Google Analytics para entender cómo los visitantes usan nuestro sitio web.
                            Esta información es anónima y nos ayuda a mejorar la experiencia de usuario.
                            Podés desactivar las cookies en la configuración de tu navegador.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">5. Tus derechos</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Tenés derecho a acceder, corregir o eliminar tu información personal en cualquier momento.
                            Para ejercer estos derechos, contactanos a través de WhatsApp o por email a reservas@calafatego.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-navy mb-4">6. Contacto</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Si tenés preguntas sobre esta política de privacidad, podés contactarnos:
                        </p>
                        <ul className="text-slate-600 mt-3 space-y-1">
                            <li>📧 Email: reservas@calafatego.com</li>
                            <li>📱 WhatsApp: +54 9 2966 53-0638</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
