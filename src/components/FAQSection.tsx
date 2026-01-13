import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'O produto é original e seguro?',
      answer: 'Sim, trabalhamos apenas com produtos 100% originais e verificados. Todos os lotes passam por controle de qualidade rigoroso. Garantimos a autenticidade e eficácia do produto.',
    },
    {
      question: 'Como funciona a entrega?',
      answer: 'A entrega é realizada em embalagem totalmente neutra, sem qualquer identificação do conteúdo ou remetente. Você receberá um código de rastreamento para acompanhar o pedido. A entrega é rápida e discreta.',
    },
    {
      question: 'Terei suporte durante todo o processo?',
      answer: 'Sim! Nossa equipe de profissionais está disponível 24 horas por dia, 7 dias por semana. Você terá acompanhamento antes, durante e após o procedimento, com todas as orientações necessárias.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Oferecemos diversas formas de pagamento seguras. O nome que aparece na fatura é discreto e não identifica o produto. Utilizamos criptografia avançada para proteger suas informações.',
    },
    {
      question: 'Meus dados estão protegidos?',
      answer: 'Absolutamente. Seus dados pessoais são tratados com o máximo sigilo e protegidos por criptografia de última geração. Não compartilhamos nenhuma informação com terceiros.',
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo varia de acordo com sua localização, mas trabalhamos com envio expresso. Após a confirmação do pagamento, você receberá o código de rastreamento. Prazo médio de 2 a 5 dias úteis.',
    },
    {
      question: 'Como funciona o atendimento pelo WhatsApp?',
      answer: 'Nosso atendimento via WhatsApp é direto e humanizado. Você pode tirar todas as suas dúvidas, receber orientações e fazer seu pedido de forma rápida e segura. Atendimento 24h.',
    },
    {
      question: 'Posso confiar no serviço?',
      answer: 'Temos anos de experiência e milhares de atendimentos realizados com sucesso. Nossa prioridade é sua segurança, bem-estar e discrição. Os depoimentos de nossas clientes refletem nosso compromisso.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet/10 rounded-full text-sm font-medium text-violet mb-4">
            FAQ
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas{' '}
            <span className="text-gradient-violet">frequentes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Reunimos as dúvidas mais comuns para te ajudar. Se não encontrar sua 
            resposta, entre em contato conosco.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-foreground hover:text-violet py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div id="contato" className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ainda tem dúvidas? Estamos aqui para ajudar.
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet to-violet-glow text-white rounded-full font-semibold text-lg hover:shadow-glow-violet transition-all duration-300 hover:scale-105"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
