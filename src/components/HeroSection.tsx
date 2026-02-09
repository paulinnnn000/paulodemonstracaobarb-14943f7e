import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import heroImg from "@/assets/hero-barbershop.jpg";

const WHATSAPP_LINK = "https://wa.me/5567991788626?text=ISSO%20%C3%89%20APENAS%20UMA%20DEMONSTRACAO";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Interior da Barbearia Demonstrativa" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-32 text-center md:text-left md:max-w-3xl">
      <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6 text-gold text-sm font-medium">
        <Scissors size={14} />
        Centro, Campo Grande
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
        Seu Visual Perfeito <br />
        <span className="text-gold">Começa Aqui</span>
      </h1>
      <p className="text-white/70 text-lg sm:text-xl mb-8 max-w-xl">
        Especialistas em corte masculino, barba e design de sobrancelha.
        Tradição e estilo em cada detalhe.
      </p>
      <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-dark font-bold text-base px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/25">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          Agendar pelo WhatsApp
        </a>
      </Button>
    </div>
  </section>
);

export default HeroSection;
