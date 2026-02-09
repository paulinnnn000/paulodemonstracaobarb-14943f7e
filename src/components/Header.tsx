import { useState } from "react";
import { Phone, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5567991788626?text=ISSO%20%C3%89%20APENAS%20UMA%20DEMONSTRACAO";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-muted">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-gold font-bold text-xl tracking-wider">
          BARBEARIA<span className="text-white font-light ml-1">DEMO</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className="text-white/80 hover:text-gold transition-colors text-sm">Quem Somos</a>
          <a href="#servicos" className="text-white/80 hover:text-gold transition-colors text-sm">Serviços</a>
          <a href="#galeria" className="text-white/80 hover:text-gold transition-colors text-sm">Galeria</a>
          <a href="#depoimentos" className="text-white/80 hover:text-gold transition-colors text-sm">Depoimentos</a>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://instagram.com/barbeariademo" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="tel:+5567991788626" className="text-white/70 hover:text-gold transition-colors">
              <Phone size={18} />
            </a>
          </div>
          <Button asChild className="bg-gold hover:bg-gold-dark text-dark font-semibold transition-all duration-300 hover:scale-105">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar Agora</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-dark border-t border-dark-muted px-4 pb-4 flex flex-col gap-3">
          <a href="#sobre" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-gold transition-colors py-2">Quem Somos</a>
          <a href="#servicos" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-gold transition-colors py-2">Serviços</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-gold transition-colors py-2">Galeria</a>
          <a href="#depoimentos" onClick={() => setMenuOpen(false)} className="text-white/80 hover:text-gold transition-colors py-2">Depoimentos</a>
          <div className="flex items-center gap-4 py-2">
            <a href="https://instagram.com/barbeariademo" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="tel:+5567991788626" className="text-white/70 hover:text-gold transition-colors">
              <Phone size={20} />
            </a>
          </div>
          <Button asChild className="bg-gold hover:bg-gold-dark text-dark font-semibold w-full">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar Agora</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
