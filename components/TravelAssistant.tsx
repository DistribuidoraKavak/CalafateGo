import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send, Loader2, MessageCircle, User, Bot } from 'lucide-react';
import { supabase } from '../src/supabaseClient';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    text: string;
}

const TravelAssistant: React.FC = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            text: '¡Hola! Soy tu asistente virtual de CalafateGo. ¿En qué puedo ayudarte hoy? Preguntame sobre el clima, distancias o nuestros servicios.'
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const askAI = async () => {
        if (!inputMessage.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: inputMessage
        };

        setMessages(prev => [...prev, userMsg]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const { data, error } = await supabase.functions.invoke('gemini-chat', {
                body: { prompt: inputMessage }
            });

            if (error) throw error;

            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                text: data?.response || 'Disculpa, no pude procesar eso. ¿Podrías intentar de nuevo?'
            };

            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            console.error('Error calling AI:', error);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                text: 'Lo siento, estoy teniendo dificultades técnicas. Por favor contáctanos por WhatsApp.'
            }]);
        } finally {
            setIsLoading(false);
            // Focus back on input for continued conversation
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            askAI();
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
            {/* Glassmorphism Card */}
            <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 flex flex-col overflow-hidden">

                {/* Header */}
                <div className="p-4 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-ice to-glacier rounded-lg shadow-sm">
                        <Sparkles className="text-white" size={20} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-navy leading-none">Asistente CalafateGo</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <p className="text-xs text-slate-500 font-medium">En línea</p>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                        >
                            {/* Avatar */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-navy text-white' : 'bg-white text-glacier border border-slate-200'
                                }`}>
                                {msg.role === 'user' ? <User size={14} /> : <Bot size={16} />}
                            </div>

                            {/* Bubble */}
                            <div className={`rounded-2xl px-4 py-3 max-w-[80%] shadow-sm text-sm md:text-base leading-relaxed ${msg.role === 'user'
                                    ? 'bg-navy text-white rounded-tr-none'
                                    : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                                }`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isLoading && (
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-white text-glacier border border-slate-200 flex items-center justify-center flex-shrink-0">
                                <Bot size={16} />
                            </div>
                            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Suggestions Chips (Only if messages length is 1 i.e., just welcome) */}
                {messages.length === 1 && (
                    <div className="px-4 pb-2 bg-slate-50/50">
                        <p className="text-xs text-slate-400 mb-2 pl-1">Sugerencias:</p>
                        <div className="flex flex-wrap gap-2">
                            {['¿Qué servicios ofrecen?', '¿Qué ropa llevar?', 'Clima en el Glaciar'].map((suggestion, i) => (
                                <button
                                    key={i}
                                    onClick={() => setInputMessage(suggestion)}
                                    className="text-xs text-navy bg-white hover:bg-ice/10 px-3 py-1.5 rounded-full border border-slate-200 transition-colors shadow-sm"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100">
                    <div className="relative flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Escribe tu consulta aquí..."
                            className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-navy placeholder:text-slate-400 focus:border-ice focus:ring-2 focus:ring-ice/20 outline-none transition-all"
                            disabled={isLoading}
                        />
                        <button
                            onClick={askAI}
                            disabled={isLoading || !inputMessage.trim()}
                            className="p-3 bg-navy text-white rounded-xl hover:bg-glacier transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                        >
                            {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/contacto" className="text-xs text-slate-400 hover:text-glacier transition-colors inline-flex items-center gap-1">
                            <MessageCircle size={12} />
                            ¿Preferís hablar por WhatsApp?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelAssistant;
