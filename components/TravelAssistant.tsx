import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Plane, Cloud, Sparkles, ArrowRight, Send, Loader2, MessageCircle } from 'lucide-react';
import { supabase } from '../src/supabaseClient';

const TravelAssistant: React.FC = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [aiResponse, setAiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showChat, setShowChat] = useState(false);

    const quickActions = [
        {
            label: 'Ir al Glaciar',
            icon: <Mountain size={20} />,
            link: '/servicios?tab=excursiones',
            color: 'from-ice to-glacier'
        },
        {
            label: 'Transfer Aeropuerto',
            icon: <Plane size={20} />,
            link: '/servicios?tab=traslados',
            color: 'from-navy to-ice'
        },
        {
            label: 'Ver Clima',
            icon: <Cloud size={20} />,
            onClick: () => window.open('https://www.weather.com/es-AR/tiempo/hoy/l/-50.34,-72.26', '_blank'),
            color: 'from-glacier to-navy'
        },
    ];

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
            // Mensaje amigable cuando falla la IA (probablemente por cuota 429)
            setAiResponse('El asistente está recibiendo muchas consultas en este momento (Límite de cuota alcanzado). Por favor, intentá de nuevo más tarde o contactanos directamente por WhatsApp para una respuesta inmediata.');
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
        <section className="py-16 bg-gradient-to-b from-navy to-slate-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-ice/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-glacier/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="p-3 bg-ice/20 rounded-2xl">
                            <Sparkles className="text-ice" size={28} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Asistente de Viaje
                        </h2>
                    </div>

                    {/* Question */}
                    <p className="text-center text-xl md:text-2xl text-slate-200 mb-8">
                        ¿Qué necesitás en <span className="text-ice font-bold">El Calafate</span>?
                    </p>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
                        {quickActions.map((action, index) => (
                            action.onClick ? (
                                <button
                                    key={index}
                                    onClick={action.onClick}
                                    className={`group bg-gradient-to-r ${action.color} p-5 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
                                >
                                    {action.icon}
                                    <span>{action.label}</span>
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ) : (
                                <Link
                                    key={index}
                                    to={action.link!}
                                    className={`group bg-gradient-to-r ${action.color} p-5 rounded-2xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
                                >
                                    {action.icon}
                                    <span>{action.label}</span>
                                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 max-w-3xl mx-auto mb-8">
                        <div className="flex-1 h-px bg-white/20"></div>
                        <button
                            onClick={() => setShowChat(!showChat)}
                            className="flex items-center gap-2 text-ice hover:text-white transition-colors text-sm font-medium"
                        >
                            <MessageCircle size={18} />
                            {showChat ? 'Ocultar chat' : 'Preguntale a nuestra IA'}
                        </button>
                        <div className="flex-1 h-px bg-white/20"></div>
                    </div>

                    {/* AI Chat Section */}
                    {showChat && (
                        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                            {/* Input */}
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ej: ¿Cuánto se tarda del aeropuerto al centro?"
                                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:border-ice focus:bg-white/15 outline-none transition-all pr-16"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={askAI}
                                    disabled={isLoading || !inputMessage.trim()}
                                    className="absolute right-2 top-2 bottom-2 bg-ice text-white px-5 rounded-xl hover:bg-glacier transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                                </button>
                            </div>

                            {/* AI Response */}
                            {aiResponse && (
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-ice/30 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-ice/20 rounded-lg flex-shrink-0">
                                            <Sparkles size={18} className="text-ice" />
                                        </div>
                                        <p className="text-white leading-relaxed">{aiResponse}</p>
                                    </div>
                                </div>
                            )}

                            {/* Suggestion chips */}
                            <div className="flex flex-wrap gap-2 mt-4 justify-center">
                                {['¿Cuánto cuesta ir al Glaciar?', '¿Qué ropa llevar?', '¿Mejor época para visitar?'].map((suggestion, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setInputMessage(suggestion);
                                        }}
                                        className="text-sm text-slate-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-ice/30 transition-all"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Subtitle */}
                    <p className="text-center text-slate-400 mt-8 text-sm">
                        {!showChat && (
                            <>Elegí una opción o <Link to="/contacto" className="text-ice hover:underline">contactanos por WhatsApp</Link> para atención personalizada</>
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TravelAssistant;
