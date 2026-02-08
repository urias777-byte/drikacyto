import { Shield, Clock, Heart, Play } from 'lucide-react';
import { useState, useRef } from 'react';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Video */}
            <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-glow-violet border-4 border-violet/30 aspect-[9/16] max-w-sm mx-auto">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                  onClick={handlePlayClick}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/20"
                    onClick={handlePlayClick}
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet to-violet-glow flex items-center justify-center shadow-glow-violet animate-pulse-glow">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6 animate-fade-in">
                <Shield className="w-4 h-4 text-violet" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Atendimento 100% Sigiloso e Seguro
                </span>
              </div>

              {/* Main heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Você não está{' '}
                <span className="text-gradient-violet">sozinha</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Oferecemos suporte, orientação e soluções seguras para momentos delicados da sua vida. 
                Com discrição absoluta e acompanhamento profissional.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3 p-3 bg-card/60 backdrop-blur-sm rounded-xl shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm">Envio Discreto</p>
                    <p className="text-xs text-muted-foreground">Embalagem neutra</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-card/60 backdrop-blur-sm rounded-xl shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-violet" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm">Suporte 24h</p>
                    <p className="text-xs text-muted-foreground">Sempre disponíveis</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-card/60 backdrop-blur-sm rounded-xl shadow-soft">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground text-sm">Produto Original</p>
                    <p className="text-xs text-muted-foreground">Garantia de qualidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
