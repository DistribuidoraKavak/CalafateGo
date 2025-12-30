import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contacto: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Build WhatsApp message
        const msg = `Hola CalafateGo! Mi nombre es ${formData.name}.%0A%0AServicio: ${formData.service}%0AFecha: ${formData.date}%0A%0A${formData.message}%0A%0AContacto: ${formData.email} / ${formData.phone}`;
        window.open(`https://wa.me/5492902123456?text=${msg}`, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-navy/90">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-ice font-bold tracking-widest uppercase text-sm mb-4">Estamos para ayudarte</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contactanos</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Respondemos en minutos. Elegí el medio que más te guste y empezá a planificar tu aventura.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-6">
                        <a
                            href="https://wa.me/5492902123456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white rounded-2xl p-6 hover:-translate-y-1 transition-transform text-center shadow-lg hover:shadow-xl"
                        >
                            <MessageCircle size={40} className="mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                            <p className="text-green-100 text-sm">Respuesta inmediata</p>
                        </a>

                        <a
                            href="mailto:info@calafatego.com"
                            className="bg-ice text-white rounded-2xl p-6 hover:-translate-y-1 transition-transform text-center shadow-lg hover:shadow-xl"
                        >
                            <Mail size={40} className="mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-1">Email</h3>
                            <p className="text-blue-100 text-sm">info@calafatego.com</p>
                        </a>

                        <a
                            href="tel:+5492902123456"
                            className="bg-navy text-white rounded-2xl p-6 hover:-translate-y-1 transition-transform text-center shadow-lg hover:shadow-xl"
                        >
                            <Phone size={40} className="mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                            <p className="text-slate-300 text-sm">+54 9 2902 123456</p>
                        </a>

                        <div className="bg-snow text-navy rounded-2xl p-6 text-center border border-slate-200">
                            <Clock size={40} className="mx-auto mb-4 text-ice" />
                            <h3 className="font-bold text-lg mb-1">Horario</h3>
                            <p className="text-slate-500 text-sm">24/7 WhatsApp</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form + Map */}
            <section className="py-24 bg-snow">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                            <h2 className="text-2xl font-bold text-navy mb-2">Envianos tu consulta</h2>
                            <p className="text-slate-500 mb-8">Completá el formulario y te contactamos enseguida</p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                                    <h3 className="text-xl font-bold text-navy mb-2">¡Mensaje enviado!</h3>
                                    <p className="text-slate-500">WhatsApp debería abrirse. Te responderemos en minutos.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Nombre completo *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition"
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Teléfono / WhatsApp</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition"
                                                placeholder="+54 9 ..."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-navy mb-2">Servicio *</label>
                                            <select
                                                required
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition bg-white"
                                            >
                                                <option value="">Seleccionar...</option>
                                                <option value="Traslado Aeropuerto">Traslado Aeropuerto</option>
                                                <option value="Traslado Terminal">Traslado Terminal</option>
                                                <option value="Excursión Glaciar">Excursión Glaciar</option>
                                                <option value="Excursión El Chaltén">Excursión El Chaltén</option>
                                                <option value="Navegación">Navegación</option>
                                                <option value="Otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Fecha aproximada</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Mensaje</label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition resize-none"
                                            placeholder="Contanos qué necesitás..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-ice text-white py-4 rounded-xl font-bold text-lg hover:bg-navy transition-colors flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <Send size={20} />
                                        <span>Enviar por WhatsApp</span>
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map + Info */}
                        <div>
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.88869299098!2d-72.28739105!3d-50.3378857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdbb0cc795ca3087%3A0x570c2c0c4a68e3cf!2sEl%20Calafate%2C%20Santa%20Cruz!5e0!3m2!1ses!2sar!4v1703889600000!5m2!1ses!2sar"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación CalafateGo"
                                ></iframe>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <h3 className="text-xl font-bold text-navy mb-6">Información de contacto</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-ice flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-medium text-navy">Ubicación</p>
                                            <p className="text-slate-500">El Calafate, Santa Cruz, Patagonia Argentina</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="text-ice flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-medium text-navy">Teléfono</p>
                                            <p className="text-slate-500">+54 9 2902 123456</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="text-ice flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-medium text-navy">Email</p>
                                            <p className="text-slate-500">info@calafatego.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-ice flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <p className="font-medium text-navy">Horario de atención</p>
                                            <p className="text-slate-500">WhatsApp: 24/7</p>
                                            <p className="text-slate-500">Oficina: 8:00 - 20:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacto;
