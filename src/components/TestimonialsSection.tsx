import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marina S.',
      location: 'São Paulo, SP',
      text: 'Estava com muito medo e insegura, mas o suporte que recebi foi incrível. Me senti acolhida do início ao fim. O produto chegou rápido e a embalagem era totalmente discreta.',
      rating: 5,
    },
    {
      name: 'Carla M.',
      location: 'Rio de Janeiro, RJ',
      text: 'A equipe estava disponível 24h, responderam todas as minhas dúvidas com paciência e cuidado. Recomendo muito para quem precisa de suporte nesse momento.',
      rating: 5,
    },
    {
      name: 'Ana P.',
      location: 'Belo Horizonte, MG',
      text: 'Confiei no serviço e não me arrependi. O processo foi seguro, discreto e tive acompanhamento profissional durante todo o tempo. Muito grata pelo suporte.',
      rating: 5,
    },
    {
      name: 'Juliana R.',
      location: 'Curitiba, PR',
      text: 'Precisava de ajuda urgente e encontrei esse serviço. Fui muito bem atendida, com respeito e sem julgamentos. A entrega foi mais rápida do que eu esperava.',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Depoimentos
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 bg-card rounded-2xl shadow-soft border border-border"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-violet/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
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
