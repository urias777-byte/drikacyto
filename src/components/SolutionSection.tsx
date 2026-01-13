import { CheckCircle, Package, Clock, Shield } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    'Eficácia comprovada internacionalmente',
    'Uso aprovado pela OMS',
    'Acompanhamento profissional incluso',
    'Orientação completa de uso',
    'Sigilo e discrição garantidos',
    'Suporte antes, durante e após',
  ];

  return (
    <section id="solucao" className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-sm font-medium text-violet mb-4">
              Nossa Solução
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              CETOTYC - Sua escolha{' '}
              <span className="text-gradient-gold">segura</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Oferecemos um medicamento reconhecido mundialmente por sua eficácia e segurança. 
              Com orientação profissional e suporte completo, garantimos que você tenha toda a 
              informação e acompanhamento necessários.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-violet flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-glow text-white rounded-full font-semibold text-lg shadow-gold hover:scale-105 transition-all duration-300"
            >
              Solicitar Informações
            </a>
          </div>

          {/* Product Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border">
              {/* Gold accent */}
              <div className="absolute -top-3 left-8 px-4 py-1.5 bg-gradient-to-r from-gold to-gold-glow rounded-full text-white text-sm font-semibold">
                ✦ Original Garantido
              </div>

              <div className="mt-4">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Kit Completo CETOTYC
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tudo que você precisa com suporte profissional incluso
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <Package className="w-8 h-8 text-violet" />
                    <div>
                      <p className="font-semibold text-foreground">Embalagem Discreta</p>
                      <p className="text-sm text-muted-foreground">Sem identificação externa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <Clock className="w-8 h-8 text-violet" />
                    <div>
                      <p className="font-semibold text-foreground">Entrega Expressa</p>
                      <p className="text-sm text-muted-foreground">Rastreamento em tempo real</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-secondary rounded-xl">
                    <Shield className="w-8 h-8 text-violet" />
                    <div>
                      <p className="font-semibold text-foreground">Pagamento Seguro</p>
                      <p className="text-sm text-muted-foreground">Criptografia avançada</p>
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-violet/10 to-primary/10 rounded-2xl">
                  <p className="text-sm text-muted-foreground mb-2">Fale conosco para valores</p>
                  <p className="font-serif text-3xl font-bold text-gradient-violet">
                    Consulte-nos
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Atendimento personalizado
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-violet/10 rounded-full blur-2xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
