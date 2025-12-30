import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const Contacto: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Added phone field as requested by "professional" forms
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct WhatsApp message
        const text = `Hola, mi nombre es ${formData.name}. Email: ${formData.email}. Tel: ${formData.phone}. Mensaje: ${formData.message}`;
        window.open(`https://wa.me/5492902123456?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Header Text */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-navy mb-4">Hablemos de tu viaje</h1>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Estamos acá para ayudarte a planificar tu experiencia perfecta en la Patagonia. Contactanos por cualquier vía.
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto">

                    {/* LEFT COLUMN: INFO & MAP */}
                    <div className="lg:w-5/12 bg-navy p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between">
                        {/* Blob Accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-ice/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-glacier/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-display mb-8">Información de Contacto</h3>

                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-ice">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold uppercase mb-1">Teléfono / WhatsApp</p>
                                        <p className="text-lg font-semibold cursor-pointer hover:text-ice transition-colors">+54 9 2902 12-3456</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-ice">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold uppercase mb-1">Email Corporativo</p>
                                        <p className="text-lg font-semibold cursor-pointer hover:text-ice transition-colors">reservas@calafatego.com</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-ice">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400 font-bold uppercase mb-1">Oficina Central</p>
                                        <p className="text-lg font-semibold leading-snug">Av. del Libertador 1234<br />El Calafate, Santa Cruz</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <p className="text-sm text-slate-400 font-bold uppercase mb-4">Seguinos</p>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ice transition-colors"><Instagram size={20} /></a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ice transition-colors"><Facebook size={20} /></a>
                                    <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-ice transition-colors"><Twitter size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="mt-10 rounded-2xl overflow-hidden h-48 border border-white/10 shadow-lg relative z-10 grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20055.539763784!2d-72.28588046777342!3d-50.33798935408753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb81c4e72506e67%3A0xc391136b6cb60029!2sEl%20Calafate%2C%20Santa%20Cruz!5e0!3m2!1ses!2sar!4v1703649033306!5m2!1ses!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: FORM */}
                    <div className="lg:w-7/12 p-10 md:p-14 bg-white">
                        <h3 className="text-2xl font-bold font-display text-navy mb-6">Envianos un mensaje</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Tu nombre"
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy focus:border-ice focus:ring-4 focus:ring-ice/10 outline-none transition-all placeholder:text-slate-400"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+54 9..."
                                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy focus:border-ice focus:ring-4 focus:ring-ice/10 outline-none transition-all placeholder:text-slate-400"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy focus:border-ice focus:ring-4 focus:ring-ice/10 outline-none transition-all placeholder:text-slate-400"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Consulta</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy focus:border-ice focus:ring-4 focus:ring-ice/10 outline-none transition-all placeholder:text-slate-400 resize-none"
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-ice transition-all shadow-lg hover:shadow-ice/30 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                            >
                                <span>Enviar Mensaje</span>
                                <Send size={20} />
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-4">
                                Te responderemos a la brevedad vía WhatsApp o Email.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacto;
