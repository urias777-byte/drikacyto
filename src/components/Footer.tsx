import { Pill, Shield, Lock, Heart } from 'lucide-react';
const Footer = () => {
  return <footer className="relative py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-primary flex items-center justify-center">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl md:text-2xl font-bold bg-gradient-to-r from-violet via-violet-glow to-violet bg-clip-text text-transparent drop-shadow-[0_0_10px_hsl(var(--violet)/0.5)]">
                DRIKA CYTO
              </span>
            </a>
            <p className="text-white/70">
              Suporte e soluções para a saúde feminina com discrição, 
              segurança e acompanhamento profissional.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-white/70 hover:text-violet-light transition-colors">
                Início
              </a>
              <a href="#solucao" className="block text-white/70 hover:text-violet-light transition-colors">
                Solução
              </a>
              <a href="#seguranca" className="block text-white/70 hover:text-violet-light transition-colors">
                Segurança
              </a>
              <a href="#depoimentos" className="block text-white/70 hover:text-violet-light transition-colors">
                Depoimentos
              </a>
              <a href="#faq" className="block text-white/70 hover:text-violet-light transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Trust badges */}
          <div>
            <h4 className="font-semibold text-white mb-4">Garantias</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <Shield className="w-5 h-5 text-violet-light" />
                <span>Sigilo Total Garantido</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Lock className="w-5 h-5 text-violet-light" />
                <span>Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Heart className="w-5 h-5 text-violet-light" />
                <span>Atendimento Humanizado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            © 2020 DRIKA CYTO. Todos os direitos reservados.
          </p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;