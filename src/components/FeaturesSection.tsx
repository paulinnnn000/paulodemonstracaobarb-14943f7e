import { Crown, Building2, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Atendimento Premium",
    desc: "Experiência personalizada do início ao fim. Cada cliente é único e merece atenção exclusiva.",
  },
  {
    icon: Building2,
    title: "Ambiente Moderno",
    desc: "Espaço sofisticado e confortável, projetado para você relaxar enquanto cuidamos do seu visual.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preço Acessível",
    desc: "Qualidade premium sem pesar no bolso. Valores justos para serviços de alto padrão.",
  },
];

const FeaturesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Nossos <span className="text-gold">Diferenciais</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto" />
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="text-center p-8 rounded-xl border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300 group bg-card">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
              <f.icon className="text-gold" size={28} />
            </div>
            <h3 className="text-foreground font-bold text-lg mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
