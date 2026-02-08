import { Lock, Truck, CreditCard, Headphones, CheckCircle, Award } from 'lucide-react';

const TrustSection = () => {
  const trustItems = [
    {
      icon: Lock,
      title: 'Sigilo Total',
      description: 'Seus dados são protegidos com criptografia de ponta. Nenhuma informação é compartilhada.',
    },
    {
      icon: Truck,
      title: 'Envio Discreto',
      description: 'Embalagem neutra sem qualquer identificação. Ninguém saberá o conteúdo.',
    },
    {
      icon: CreditCard,
      title: 'Pagamento Seguro',
      description: 'Múltiplas formas de pagamento com proteção anti-fraude e nome discreto na fatura.',
    },
    {
      icon: Headphones,
      title: 'Suporte 24h',
      description: 'Nossa equipe está disponível a qualquer momento para tirar suas dúvidas.',
    },
    {
      icon: CheckCircle,
      title: 'Produto Original',
      description: 'Garantimos 100% de autenticidade. Todos os lotes são verificados.',
    },
    {
      icon: Award,
      title: 'Anos de Experiência',
      description: 'Milhares de mulheres já confiaram em nosso serviço e suporte.',
    },
  ];

  return (
    <section id="seguranca" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-4">
            Sua Segurança
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Confiança em cada{' '}
            <span className="text-gradient-violet">detalhe</span>
          </h2>
          
          <p className="text-lg text-foreground/80">
            Entendemos a importância da discrição e segurança. Por isso, cada etapa do nosso 
            processo é pensada para garantir sua tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft border border-violet/20 hover:border-violet/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-violet" />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-violet to-violet-glow rounded-3xl text-white text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Pronta para dar o próximo passo?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Nossa equipe está preparada para te acolher e esclarecer todas as suas dúvidas 
            com carinho e profissionalismo.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-violet rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
