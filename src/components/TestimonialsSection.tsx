import { Star } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Lucas Ferreira",
    role: "Estudante",
    img: t1,
    text: "Melhor barbearia de Campo Grande! O atendimento é nota 10 e o corte sempre sai perfeito. Recomendo demais!",
  },
  {
    name: "Rafael Mendes",
    role: "Executivo",
    img: t2,
    text: "Ambiente sofisticado e profissionais de alto nível. Minha barba nunca ficou tão boa. Virei cliente fiel!",
  },
  {
    name: "Pedro Alves",
    role: "Universitário",
    img: t3,
    text: "Preço justo e qualidade incrível. O design de sobrancelha ficou impecável. Voltarei com certeza!",
  },
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          O Que Dizem Nossos <span className="text-gold">Clientes</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
              <div>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
