
import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askGemini = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres el Asistente Experto de CalafateGo. Ayuda al usuario con dudas sobre traslados en El Calafate. 
        Promociona discretamente nuestros servicios: Traslado Aeropuerto (FTE), Glaciar Perito Moreno y El Chaltén. 
        Sé amable, profesional y usa un tono patagónico. El usuario pregunta: ${input}`,
      });
      setResponse(res.text || 'No pude procesar tu solicitud en este momento.');
    } catch (error) {
      console.error(error);
      setResponse('Lo siento, el clima patagónico interfiere con mi conexión. Por favor, intenta de nuevo o contáctanos por WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-glacier/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
          
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-blue-100 rounded-lg text-ice">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy">Asistente Inteligente CalafateGo</h3>
          </div>
          
          <p className="text-slate-600 mb-8">
            ¿Tienes dudas sobre los tiempos de viaje o qué ropa traer? Pregúntale a nuestra IA local.
          </p>

          <div className="relative mb-6">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && askGemini()}
              placeholder="Ej: ¿Cuánto se tarda del aeropuerto al centro?" 
              className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 bg-white text-gray-900 placeholder:text-slate-400 focus:border-ice outline-none transition-all pr-16"
            />
            <button 
              onClick={askGemini}
              disabled={isLoading}
              className="absolute right-2 top-2 bottom-2 bg-navy text-white px-6 rounded-xl hover:bg-ice transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
            </button>
          </div>

          {response && (
            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <p className="text-navy leading-relaxed italic">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
