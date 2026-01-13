import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import depoimento1 from '@/assets/testimonials/depoimento-1.jpeg';
import depoimento2 from '@/assets/testimonials/depoimento-2.jpeg';
import depoimento3 from '@/assets/testimonials/depoimento-3.jpeg';
import depoimento4 from '@/assets/testimonials/depoimento-4.jpeg';
import depoimento5 from '@/assets/testimonials/depoimento-5.jpeg';
import depoimento6 from '@/assets/testimonials/depoimento-6.jpeg';
import depoimento7 from '@/assets/testimonials/depoimento-7.jpeg';
import depoimento8 from '@/assets/testimonials/depoimento-8.jpeg';
import depoimento9 from '@/assets/testimonials/depoimento-9.jpeg';
import depoimento10 from '@/assets/testimonials/depoimento-10.jpeg';
import depoimento11 from '@/assets/testimonials/depoimento-11.jpeg';
import depoimento12 from '@/assets/testimonials/depoimento-12.jpeg';
import depoimento13 from '@/assets/testimonials/depoimento-13.jpeg';
import depoimento14 from '@/assets/testimonials/depoimento-14.jpeg';
import depoimento15 from '@/assets/testimonials/depoimento-15.jpeg';
import depoimento16 from '@/assets/testimonials/depoimento-16.jpeg';
import depoimento17 from '@/assets/testimonials/depoimento-17.jpeg';
import depoimento18 from '@/assets/testimonials/depoimento-18.jpeg';
import depoimento19 from '@/assets/testimonials/depoimento-19.jpeg';

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
    depoimento10,
    depoimento11,
    depoimento12,
    depoimento13,
    depoimento14,
    depoimento15,
    depoimento16,
    depoimento17,
    depoimento18,
    depoimento19,
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

        {/* Testimonial Images Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonialImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="relative rounded-2xl overflow-hidden shadow-soft border border-border group hover:shadow-glow-violet transition-all duration-300 hover:scale-[1.02]">
                  <img
                    src={image}
                    alt={`Depoimento de cliente ${index + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  {/* Overlay gradient for consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12 bg-card/80 backdrop-blur-sm border-violet/30 text-violet hover:bg-violet hover:text-white" />
          <CarouselNext className="right-0 md:-right-12 bg-card/80 backdrop-blur-sm border-violet/30 text-violet hover:bg-violet hover:text-white" />
        </Carousel>

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
