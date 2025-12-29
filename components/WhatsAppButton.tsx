
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5492902123456?text=Hola! Me gustaría cotizar un traslado.', '_blank');
  };

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center space-x-2"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-semibold whitespace-nowrap px-0 group-hover:px-2">
        ¡Consultanos ahora!
      </span>
    </button>
  );
};

export default WhatsAppButton;
