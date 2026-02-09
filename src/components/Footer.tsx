import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark border-t border-dark-muted py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-gold font-bold text-xl tracking-wider mb-4">
            BARBEARIA<span className="text-white font-light ml-1">DEMO</span>
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">
            Tradição e estilo em cada detalhe. Sua barbearia premium no centro de Campo Grande.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+5567991788626" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
              <Phone size={16} /> +55 67 99178-8626
            </a>
            <a href="https://instagram.com/barbeariademo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
              <Instagram size={16} /> @barbeariademo
            </a>
            <a href="https://wa.me/5567991788626" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Localização</h4>
          <a href="https://goo.gl/maps/demonstracao12345" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-white/60 hover:text-gold transition-colors text-sm">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            Centro, Campo Grande – MS
          </a>
        </div>
      </div>

      <div className="border-t border-dark-muted mt-10 pt-6 text-center">
        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Barbearia Demonstrativa. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
