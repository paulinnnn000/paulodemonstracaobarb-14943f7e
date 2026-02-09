import { Scissors, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import haircutImg from "@/assets/service-haircut.jpg";
import beardImg from "@/assets/service-beard.jpg";
import eyebrowImg from "@/assets/service-eyebrow.jpg";

const BASE_WA = "https://wa.me/5567991788626?text=";

const services = [
  {
    title: "Corte Masculino",
    desc: "Cortes modernos e clássicos, feitos sob medida para o seu estilo. Degradê, navalhado, social e muito mais.",
    icon: Scissors,
    img: haircutImg,
    wa: `${BASE_WA}${encodeURIComponent("Olá! Gostaria de agendar um Corte Masculino na Barbearia Demonstrativa.")}`,
  },
  {
    title: "Barba",
    desc: "Modelagem e tratamento completo da barba com navalha, toalha quente e produtos premium.",
    icon: Sparkles,
    img: beardImg,
    wa: `${BASE_WA}${encodeURIComponent("Olá! Gostaria de agendar um serviço de Barba na Barbearia Demonstrativa.")}`,
  },
  {
    title: "Design de Sobrancelha",
    desc: "Sobrancelha alinhada e com design que realça seu olhar. Precisão e cuidado em cada detalhe.",
    icon: Eye,
    img: eyebrowImg,
    wa: `${BASE_WA}${encodeURIComponent("Olá! Gostaria de agendar um Design de Sobrancelha na Barbearia Demonstrativa.")}`,
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 bg-dark">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Nossos <span className="text-gold">Serviços</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-4" />
        <p className="text-white/60 max-w-lg mx-auto">Cada serviço é executado com atenção aos detalhes e produtos de alta qualidade.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-dark-secondary rounded-xl overflow-hidden border border-dark-muted group hover:border-gold/40 transition-all duration-300">
            <div className="h-56 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <s.icon className="text-gold" size={20} />
                </div>
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              </div>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">{s.desc}</p>
              <Button asChild className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold transition-all duration-300 hover:scale-[1.02]">
                <a href={s.wa} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
