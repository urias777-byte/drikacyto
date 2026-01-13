import { Shield, Clock, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-violet" />
            <span className="text-sm font-medium text-secondary-foreground">
              Atendimento 100% Sigiloso e Seguro
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Você não está{' '}
            <span className="text-gradient-violet">sozinha</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Oferecemos suporte, orientação e soluções seguras para momentos delicados da sua vida. 
            Com discrição absoluta e acompanhamento profissional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#solucao"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet to-violet-glow text-white rounded-full font-semibold text-lg hover:shadow-glow-violet transition-all duration-300 hover:scale-105"
            >
              Conhecer Solução
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card border-2 border-violet/30 text-violet rounded-full font-semibold text-lg hover:bg-secondary transition-all duration-300"
            >
              Tire suas Dúvidas
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Envio Discreto</p>
                <p className="text-sm text-muted-foreground">Embalagem neutra</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-6 h-6 text-violet" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Suporte 24h</p>
                <p className="text-sm text-muted-foreground">Sempre disponíveis</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-card/60 backdrop-blur-sm rounded-2xl shadow-soft">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Produto Original</p>
                <p className="text-sm text-muted-foreground">Garantia de qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
