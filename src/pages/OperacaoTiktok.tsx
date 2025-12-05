import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Star,
  TrendingUp,
  Play,
  Package,
  BarChart3,
  Gift,
  BookOpen,
  Video,
  MessageCircle,
  UsersRound,
  Award,
  Lock,
  X
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import creatorsLogo from "@/assets/creators-logo.png";

const OperacaoTiktok = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToCTA = () => {
    const ctaButton = document.getElementById('cta-button');
    ctaButton?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* FAIXA DO EVENTO NO TOPO */}
      <div className="bg-primary text-primary-foreground py-3 px-4 text-center">
        <p className="text-sm md:text-base font-semibold tracking-wide">
          Masterclass Operação Sem Estoque • 100% online e gratuita
        </p>
      </div>

      {/* SEÇÃO 1 - HERO */}
      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] min-h-[90vh] md:min-h-screen py-12 md:py-20 px-4 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* COLUNA ESQUERDA - TEXTO */}
            <div className="order-1 lg:order-1 text-center lg:text-left">
              {/* Logo */}
              <div className="mb-6">
                <img 
                  src={creatorsLogo} 
                  alt="Sou Drop CREATORS" 
                  className="h-16 md:h-20 mx-auto lg:mx-0 object-contain"
                />
              </div>

              {/* Badge Gratuito */}
              <div className="flex justify-center lg:justify-start mb-6">
                <Badge className="bg-badge-success text-badge-success-foreground text-sm px-5 py-2 rounded-full font-semibold">
                  ✓ MASTERCLASS 100% GRATUITA
                </Badge>
              </div>

              {/* Título Principal */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
                Aprenda a vender{" "}
                <span className="text-primary">SEM ESTOQUE</span>{" "}
                e fature de R$5.000 a R$30.000/mês
              </h1>

              {/* Subtítulo */}
              <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl mx-auto lg:mx-0">
                Descubra o método que já gerou milhões em vendas online, 
                mesmo para quem está começando do zero.
              </p>

              {/* Benefícios com ícones */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-200 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>Sem investimento inicial</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Package className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>Sem estoque</span>
                </div>
                <div className="flex items-center gap-2 text-gray-200 text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span>Sem experiência</span>
                </div>
              </div>

              {/* Botão CTA */}
              <div className="flex flex-col items-center lg:items-start gap-3" id="cta-button">
                <Button 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_60px_rgba(var(--primary-rgb),0.5)] hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  GARANTIR MINHA VAGA GRATUITA
                </Button>
                
                {/* Linha de urgência */}
                <p className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  Vagas limitadas • Pode sair do ar a qualquer momento
                </p>
              </div>
            </div>

            {/* COLUNA DIREITA - FOTO */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gradiente de fundo estilo G4 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-3xl blur-2xl scale-110"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 rounded-3xl"></div>
                
                {/* Container da imagem */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-2 border border-gray-700/50 backdrop-blur-sm">
                  <img 
                    src="/lovable-uploads/1f926195-0aa4-4cb4-ae07-1803732511ce.jpg" 
                    alt="Renan Ferreira - Especialista em vendas sem estoque" 
                    className="w-[280px] md:w-[380px] lg:w-[420px] h-auto rounded-2xl object-cover shadow-2xl"
                  />
                  
                  {/* Badge flutuante */}
                  <div className="absolute -bottom-4 -left-4 bg-card-dark border border-gray-700 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center gap-2">
                      <Award className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-white font-bold text-sm">+R$10 milhões</p>
                        <p className="text-gray-400 text-xs">em vendas geradas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - O QUE VOCÊ VAI APRENDER */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              O que você vai aprender na Máquina de Vendas no TikTok?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Um método completo e atualizado para você começar a vender hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <Play className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conta TikTok Shop</h3>
              <p className="text-gray-600">
                Como criar e configurar sua conta no TikTok Shop do zero
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <Package className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Produtos Sou Drop</h3>
              <p className="text-gray-600">
                Como divulgar os produtos da marca de forma estratégica
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estratégias de Vendas</h3>
              <p className="text-gray-600">
                Conteúdos que geram vendas automaticamente
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
              <Gift className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Receber Comissões</h3>
              <p className="text-gray-600">
                Como receber suas comissões por cada venda realizada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - POR QUE ESTE CURSO É DIFERENTE */}
      <section className="bg-gradient-to-b from-dark-gradient-from to-dark-gradient-to py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Por que este curso é DIFERENTE?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Mesmo sem seguidores, sem experiência e sem investir um centavo em tráfego pago!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Aulas Passo a Passo</h3>
              <p className="text-gray-300">
                Do zero às vendas, sem pular nenhuma etapa importante
              </p>
            </div>

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Video className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Mentorias Semanais</h3>
              <p className="text-gray-300">
                Encontros ao vivo com Renan Ferreira para tirar dúvidas e acelerar resultados
              </p>
            </div>

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Suporte no Whatsapp</h3>
              <p className="text-gray-300">
                Acompanhamento direto para nunca ficar perdido
              </p>
            </div>

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <UsersRound className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Comunidade Ativa</h3>
              <p className="text-gray-300">
                Estratégias em tempo real com outros alunos
              </p>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER GRÁTIS AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - GARANTIA / CUSTO */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="bg-gray-900 text-white text-sm md:text-base px-8 py-3 rounded-full font-semibold mb-6 inline-flex items-center gap-2">
              <Lock className="w-5 h-5" />
              GARANTIA TOTAL DE SATISFAÇÃO
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              O participante NÃO VAI GASTAR NADA
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              nem com o curso, nem com tráfego pago. A única coisa que você precisa é dedicar algumas horas por dia para aplicar o que será ensinado.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary rounded-3xl p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
              Estrutura pronta + Produtos que vendem + Método comprovado = 
              <span className="text-primary"> Seu sucesso!</span>
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - FAQ */}
      <section className="bg-gradient-to-b from-dark-gradient-from to-dark-gradient-to py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Tire suas dúvidas antes de se inscrever
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card-dark border border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-primary text-left">
                Preciso ter seguidores no TikTok para começar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Não! Este curso foi desenvolvido especialmente para quem está começando do zero. Você aprenderá estratégias comprovadas para gerar vendas mesmo sem ter seguidores, usando as ferramentas e recursos disponíveis no TikTok Shop.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card-dark border border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-primary text-left">
                É de graça mesmo? Não tem pegadinha?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim, é 100% gratuito! A Máquina de Vendas no TikTok é um treinamento completo oferecido pela Sou Drop para capacitar novos afiliados. Nosso objetivo é criar uma rede de vendedores bem-sucedidos que promovam nossos produtos de forma profissional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card-dark border border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-primary text-left">
                Quando começam as aulas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Assim que você se inscrever, você receberá acesso imediato à plataforma com todas as aulas gravadas. Além disso, participará das mentorias ao vivo semanais com Renan Ferreira, onde poderá tirar suas dúvidas em tempo real.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card-dark border border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-primary text-left">
                Vou ter que investir em tráfego pago?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Não! Todo o método é baseado em tráfego orgânico do TikTok. Você aprenderá a criar conteúdos que naturalmente alcançam milhares de pessoas sem precisar investir um centavo em anúncios. O único investimento necessário é seu tempo e dedicação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card-dark border border-gray-700 rounded-xl px-6">
              <AccordionTrigger className="text-white hover:text-primary text-left">
                Quanto tempo leva para ver os primeiros resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Os resultados variam de pessoa para pessoa, mas muitos alunos conseguem suas primeiras vendas nas primeiras semanas aplicando o método corretamente. Com dedicação e consistência, é possível construir uma renda recorrente entre R$3.000 e R$15.000 por mês em poucos meses.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Botão CTA Final */}
          <div className="flex justify-center mt-12">
            <Button 
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER GRÁTIS AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Modal de Inscrição */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 bg-white">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
              Preencha seus dados para liberar o acesso
            </DialogTitle>
          </DialogHeader>
          <div className="px-6 pb-6 overflow-y-auto">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfz26PKDg764nbjLyvKcG2PuSu4RaSXlNMh18dXAXWeRv0mHg/viewform?embedded=true"
              width="100%"
              height="643"
              className="border-0 rounded-lg"
              title="Formulário de Inscrição"
            >
              Carregando…
            </iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OperacaoTiktok;
