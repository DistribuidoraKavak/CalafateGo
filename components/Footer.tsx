import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold mb-6">Calafate<span className="text-ice">Go</span></div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Empresa líder en servicios de transporte privado y turismo receptivo en la provincia de Santa Cruz, Argentina. Calidad, puntualidad y pasión por el servicio.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link to="/" className="hover:text-ice transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/traslados" className="hover:text-ice transition-colors">
                  Traslados
                </Link>
              </li>
              <li>
                <Link to="/excursiones" className="hover:text-ice transition-colors">
                  Excursiones
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-ice transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/terminos" className="hover:text-ice transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-ice transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/faq" className="hover:text-ice transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} CalafateGo. Todos los derechos reservados. Desarrollado con ❤️ en la Patagonia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
