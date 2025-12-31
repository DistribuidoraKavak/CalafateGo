import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy text-white pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="text-2xl font-bold font-display tracking-tight text-white mb-6 block">
                            Calafate<span className="text-ice">Go</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Servicios de transporte privado y turismo premium en El Calafate y Patagonia Argentina. Tu confianza es nuestro destino.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ice hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ice hover:text-white transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-ice hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-slate-800 pb-2 inline-block">Navegación</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-ice transition-colors flex items-center group">
                                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios?tab=traslados" className="text-slate-400 hover:text-ice transition-colors flex items-center group">
                                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Traslados
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios?tab=excursiones" className="text-slate-400 hover:text-ice transition-colors flex items-center group">
                                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Excursiones
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-slate-400 hover:text-ice transition-colors flex items-center group">
                                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-slate-800 pb-2 inline-block">Destinos Populares</h4>
                        <ul className="space-y-4">
                            <li><span className="text-slate-400 hover:text-white transition-colors cursor-default">Glaciar Perito Moreno</span></li>
                            <li><span className="text-slate-400 hover:text-white transition-colors cursor-default">El Chaltén Full Day</span></li>
                            <li><span className="text-slate-400 hover:text-white transition-colors cursor-default">Aeropuerto FTE</span></li>
                            <li><span className="text-slate-400 hover:text-white transition-colors cursor-default">Puerto Natales (Chile)</span></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white border-b border-slate-800 pb-2 inline-block">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone size={20} className="text-ice mr-3 mt-1 flex-shrink-0" />
                                <span className="text-slate-400">+54 9 2902 12-3456</span>
                            </li>
                            <li className="flex items-start">
                                <Mail size={20} className="text-ice mr-3 mt-1 flex-shrink-0" />
                                <span className="text-slate-400">reservas@calafatego.com</span>
                            </li>
                            <li className="flex items-start">
                                <MapPin size={20} className="text-ice mr-3 mt-1 flex-shrink-0" />
                                <span className="text-slate-400">Av. del Libertador 1234<br />El Calafate, Santa Cruz</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} CalafateGo. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
