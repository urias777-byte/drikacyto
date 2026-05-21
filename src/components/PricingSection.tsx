import { Pill } from 'lucide-react';

const tiers = [
  { weeks: '1 a 3', range: '1 a 3 semanas', units: 4, price: 'R$ 650,00' },
  { weeks: '4 a 6', range: '4 a 6 semanas', units: 6, price: 'R$ 750,00' },
  { weeks: '7 a 8', range: '7 a 8 semanas', units: 8, price: 'R$ 850,00' },
  { weeks: '9 a 11', range: '9 a 11 semanas', units: 10, price: 'R$ 1.100,00' },
  { weeks: '12 a 13', range: '12 a 13 semanas', units: 12, price: 'R$ 1.150,00' },
  { weeks: '14 a 15', range: '14 a 15 semanas', units: 14, price: 'R$ 1.250,00' },
  { weeks: '16 a 17', range: '16 a 17 semanas', units: 16, price: 'R$ 1.750,00' },
  { weeks: '18 a 19', range: '18 a 19 semanas', units: 18, price: 'R$ 1.850,00' },
];

const WHATSAPP = '553498332213';

const PricingSection = () => {
  return (
    <section id="precos" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet/10 rounded-full text-sm font-medium text-violet mb-4">
            Tabela de Valores
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-violet-400">
            Escolha o{' '}
            <span className="text-gradient-violet">plano ideal</span>
          </h2>
          <p className="text-lg text-violet-300">
            Valores transparentes de acordo com o tempo. Pagamento via{' '}
            <span className="text-gold font-semibold">Pix</span>,{' '}
            <span className="text-gold font-semibold">Boleto</span> ou{' '}
            <span className="text-gold font-semibold">Cartão em 2x sem juros</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier, i) => {
            const msg = encodeURIComponent(`Olá, quero comprar para ${tier.range}.`);
            return (
              <div
                key={i}
                className="pricing-card group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-violet/40 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
              >
                {/* Animated pill */}
                <div className="relative mb-4 h-14 flex items-center justify-center">
                  <div className="pill-float">
                    <div className="pill-shape">
                      <div className="pill-half pill-half-left" />
                      <div className="pill-half pill-half-right" />
                    </div>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  {tier.weeks} <span className="text-violet-300 text-base font-normal">semanas</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.units} unidades
                </p>

                <div className="mb-6">
                  <p className="font-serif text-3xl font-bold text-gradient-gold">
                    {tier.price}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet to-violet-glow text-white rounded-full font-semibold hover:shadow-glow-violet transition-all duration-300 hover:scale-105"
                >
                  Comprar agora
                </a>
              </div>
            );
          })}
        </div>

        {/* Payment methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-violet-300 mb-3">Formas de pagamento</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Pix', 'Boleto', 'Cartão 2x sem juros'].map((m) => (
              <span
                key={m}
                className="px-5 py-2 rounded-full border border-gold/40 bg-gold/5 text-gold font-medium text-sm"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
