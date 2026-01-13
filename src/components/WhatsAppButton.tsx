import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet to-violet-glow shadow-lg hover:scale-110 transition-all duration-300 whatsapp-glow group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-20 bg-card px-4 py-2 rounded-lg shadow-soft text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco 24h
      </span>
    </button>
  );
};

export default WhatsAppButton;
