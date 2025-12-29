
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Pongámonos en Marcha</h2>
            <p className="text-slate-600 mb-12 text-lg">
              Estamos listos para hacer tu estadía en El Calafate inolvidable. Escríbenos para presupuestos personalizados o consultas grupales.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-glacier/20 rounded-2xl text-ice">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">WhatsApp 24/7</p>
                  <p className="text-xl text-navy font-semibold">+54 9 2902 123456</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-4 bg-glacier/20 rounded-2xl text-ice">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-xl text-navy font-semibold">reservas@calafatego.com.ar</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="p-4 bg-glacier/20 rounded-2xl text-ice">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Oficina Central</p>
                  <p className="text-xl text-navy font-semibold">Av. del Libertador 123, El Calafate</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-4">
              <a href="#" className="p-3 bg-slate-100 rounded-xl text-navy hover:bg-ice hover:text-white transition-all"><Instagram size={24} /></a>
              <a href="#" className="p-3 bg-slate-100 rounded-xl text-navy hover:bg-ice hover:text-white transition-all"><Facebook size={24} /></a>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-inner border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Nombre</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:border-ice" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">WhatsApp</label>
                  <input type="tel" className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:border-ice" placeholder="+54..." />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Servicio de interés</label>
                <select className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:border-ice bg-white">
                  <option>Traslado Aeropuerto</option>
                  <option>Glaciar Perito Moreno</option>
                  <option>El Chaltén</option>
                  <option>Otros traslados</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-navy mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:border-ice" placeholder="¿Cuándo llegas? ¿Cuántas personas son?"></textarea>
              </div>
              <button className="w-full py-4 gradient-ice text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all text-lg">
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
