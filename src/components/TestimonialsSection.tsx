import depoimento1 from '@/assets/testimonials/depoimento-1.jpeg';
import depoimento2 from '@/assets/testimonials/depoimento-2.jpeg';
import depoimento3 from '@/assets/testimonials/depoimento-3.jpeg';
import depoimento4 from '@/assets/testimonials/depoimento-4.jpeg';
import depoimento5 from '@/assets/testimonials/depoimento-5.jpeg';
import depoimento6 from '@/assets/testimonials/depoimento-6.jpeg';
import depoimento7 from '@/assets/testimonials/depoimento-7.jpeg';
import depoimento8 from '@/assets/testimonials/depoimento-8.jpeg';
import depoimento9 from '@/assets/testimonials/depoimento-9.jpeg';

const TestimonialsSection = () => {
  const testimonialImages = [
    depoimento1,
    depoimento2,
    depoimento3,
    depoimento4,
    depoimento5,
    depoimento6,
    depoimento7,
    depoimento8,
    depoimento9,
  ];

  return (
    <section id="depoimentos" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Depoimentos Reais
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Histórias de{' '}
            <span className="text-gradient-gold">confiança</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Milhares de mulheres já passaram por esse momento e encontraram em nós 
            o suporte que precisavam. Veja o que elas dizem.
          </p>
        </div>

        {/* Testimonial Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonialImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-soft border border-border group hover:shadow-glow-violet transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={image}
                alt={`Depoimento de cliente ${index + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay gradient for consistency */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <p className="font-serif text-4xl font-bold text-gradient-violet mb-1">98%</p>
            <p className="text-muted-foreground">Satisfação</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <p className="font-serif text-4xl font-bold text-gradient-violet mb-1">10k+</p>
            <p className="text-muted-foreground">Atendimentos</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <p className="font-serif text-4xl font-bold text-gradient-violet mb-1">24h</p>
            <p className="text-muted-foreground">Suporte</p>
          </div>
          <div className="text-center p-6 bg-secondary rounded-2xl">
            <p className="font-serif text-4xl font-bold text-gradient-violet mb-1">100%</p>
            <p className="text-muted-foreground">Sigilo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
