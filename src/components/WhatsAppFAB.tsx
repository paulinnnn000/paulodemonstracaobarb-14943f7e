import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5567991788626?text=ISSO%20%C3%89%20APENAS%20UMA%20DEMONSTRACAO";

const WhatsAppFAB = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
    aria-label="Contato WhatsApp"
  >
    <MessageCircle size={26} className="text-white" />
  </a>
);

export default WhatsAppFAB;
