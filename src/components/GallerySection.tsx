import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Corte fade moderno", tall: true },
  { src: g2, alt: "Barba estilizada", tall: false },
  { src: g3, alt: "Ferramentas premium", tall: true },
  { src: g4, alt: "Corte texturizado", tall: false },
  { src: g5, alt: "Barbeiro em ação", tall: true },
  { src: g6, alt: "Cliente satisfeito", tall: false },
];

const GallerySection = () => (
  <section id="galeria" className="py-20 bg-dark">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Nossa <span className="text-gold">Galeria</span>
        </h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto" />
      </div>

      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid overflow-hidden rounded-lg group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
