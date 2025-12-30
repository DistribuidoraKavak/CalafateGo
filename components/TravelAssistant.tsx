import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send, Loader2, MessageCircle } from 'lucide-react';
import { supabase } from '../src/supabaseClient';

const TravelAssistant: React.FC = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Initial greeting or empty state can be handled here if needed

    // Function to call Supabase Edge Function
    const askAI = async () => {
        if (!inputMessage.trim()) return;

        setIsLoading(true);
        setAiResponse('');

        try {
            const { data, error } = await supabase.functions.invoke('gemini-chat', {
                body: { prompt: inputMessage }
            });

            if (error) {
                console.error('Supabase Function Error:', error);
                throw error;
            }

            if (data?.response) {
                setAiResponse(data.response);
            } else {
                throw new Error('No valid response from AI');
            }
        } catch (error) {
            console.error('Error calling AI:', error);
            setAiResponse('El asistente está recibiendo muchas consultas (Límite de cuota). Por favor, contactanos por WhatsApp para respuesta inmediata.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            askAI();
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Glassmorphism Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border border-white/50">

                {/* Header of the Card */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-br from-ice to-glacier rounded-lg shadow-sm">
                        <Sparkles className="text-white" size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-navy">Asistente CalafateGo</h3>
                        <p className="text-sm text-slate-500">Tu guía inteligente en la Patagonia</p>
                    </div>
                </div>

                {/* Chat Input Area */}
                <div className="relative mb-6">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ej: ¿Cuánto cuesta ir al Glaciar?"
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-400 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition-all pr-14 shadow-inner"
                        disabled={isLoading}
                    />
                    <button
                        onClick={askAI}
                        disabled={isLoading || !inputMessage.trim()}
                        className="absolute right-2 top-2 bottom-2 aspect-square bg-navy text-white rounded-lg hover:bg-glacier transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                    </button>
                </div>

                {/* AI Response Area */}
                {aiResponse && (
                    <div className="bg-ice/10 rounded-xl p-5 border border-ice/20 mb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex items-start gap-3">
                            <Sparkles size={18} className="text-glacier mt-1 flex-shrink-0" />
                            <p className="text-navy/80 leading-relaxed text-sm md:text-base">{aiResponse}</p>
                        </div>
                    </div>
                )}

                {/* Suggestion Chips */}
                {!aiResponse && (
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['¿Precios de traslados?', '¿Qué ropa llevar?', 'Clima en el Glaciar'].map((suggestion, i) => (
                            <button
                                key={i}
                                onClick={() => setInputMessage(suggestion)}
                                className="text-xs md:text-sm text-slate-600 bg-slate-100 hover:bg-ice/20 hover:text-navy px-3 py-1.5 rounded-full border border-slate-200 hover:border-ice/30 transition-all font-medium"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                )}

                {/* WhatsApp Fallback */}
                {aiResponse && (
                    <div className="text-center mt-4">
                        <Link to="/contacto" className="text-sm text-glacier hover:text-navy font-medium inline-flex items-center gap-1 transition-colors">
                            <MessageCircle size={14} />
                            ¿Necesitás hablar con un humano?
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TravelAssistant;
