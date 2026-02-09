import aboutImg from "@/assets/about-barbershop.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img src={aboutImg} alt="Ambiente da Barbearia Demonstrativa" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Quem <span className="text-gold">Somos</span>
          </h2>
          <div className="w-16 h-1 bg-gold rounded mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Somos uma barbearia moderna que combina tradição e estilo, oferecendo cortes e serviços de qualidade com atendimento personalizado.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Localizada no coração do Centro de Campo Grande, a Barbearia Demonstrativa é o lugar ideal para quem busca visual impecável, ambiente sofisticado e preço justo. Nossa equipe é treinada para entregar excelência a cada visita.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
