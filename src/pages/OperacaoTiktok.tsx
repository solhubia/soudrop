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
  Lock
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import creatorsLogo from "@/assets/creators-logo.png";

const OperacaoTiktok = () => {
  const scrollToCTA = () => {
    const ctaButton = document.getElementById('cta-button');
    ctaButton?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* SEÇÃO 1 - HERO */}
      <section className="bg-gradient-to-b from-dark-gradient-from to-dark-gradient-to py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Logo */}
          <div className="text-center mb-6">
            <img 
              src={creatorsLogo} 
              alt="Sou Drop CREATORS" 
              className="h-20 md:h-24 mx-auto object-contain"
            />
          </div>

          {/* Badge Gratuito */}
          <div className="flex justify-center mb-8">
            <Badge className="bg-badge-success text-badge-success-foreground text-sm md:text-base px-6 py-2 rounded-full font-semibold">
              ✓ CURSO 100% GRATUITO
            </Badge>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-6 leading-tight">
            OPERAÇÃO TIKTOK<br />
            <span className="text-primary">DE LUCRO</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-200 text-center max-w-4xl mx-auto mb-4">
            Descubra como pessoas comuns estão ganhando R$3.000 a R$15.000 por mês vendendo produtos da Sou Drop no TikTok Shop
          </p>

          <p className="text-base md:text-lg text-gray-300 text-center max-w-3xl mx-auto mb-8">
            Mesmo sem seguidores, sem experiência e sem investir um centavo em tráfego pago!
          </p>

          {/* Botão CTA */}
          <div className="flex justify-center mb-12" id="cta-button">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER GRÁTIS AGORA
            </Button>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-3xl font-bold text-white mb-2">+52.000</h3>
              <p className="text-gray-300 text-sm">
                Afiliados já faturam diariamente com produtos Sou Drop!
              </p>
            </div>

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <Star className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">Programa Sou Drop para Afiliados</h3>
              <p className="text-gray-300 text-sm">
                Ganhe prêmios incríveis ao conquistar suas metas!
              </p>
            </div>

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">Resultados Comprovados</h3>
              <p className="text-gray-300 text-sm">
                Produtos TOP 1 de vendas no TikTok Shop!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - O QUE VOCÊ VAI APRENDER */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              O que você vai aprender na Operação TikTok de Lucro?
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
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

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Premiações</h3>
              <p className="text-gray-300">
                Conquiste suas metas e ganhe prêmios. De Kits Sou Drop até uma Porsche 911!
              </p>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center">
            <Button 
              size="lg"
              onClick={scrollToCTA}
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
                Sim, é 100% gratuito! A Operação TikTok de Lucro é um treinamento completo oferecido pela Sou Drop para capacitar novos afiliados. Nosso objetivo é criar uma rede de vendedores bem-sucedidos que promovam nossos produtos de forma profissional.
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
              onClick={scrollToCTA}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base md:text-lg px-10 py-6 h-auto rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-300"
            >
              QUERO ME INSCREVER GRÁTIS AGORA
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperacaoTiktok;
