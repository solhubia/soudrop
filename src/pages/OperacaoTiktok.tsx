import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Star, TrendingUp, Play, Package, BarChart3, Gift, BookOpen, Video, MessageCircle, UsersRound, Award, Lock, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import creatorsLogo from "@/assets/creators-logo.png";

declare global {
  interface Window {
    Eduzz: (type: string, args: { id: number }, caller: EventTarget | null) => void;
  }
}

const OperacaoTiktok = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isDropboxVideoPlaying, setIsDropboxVideoPlaying] = useState(false);
  const [isVideo3Playing, setIsVideo3Playing] = useState(false);
  
  const openEduzzWidget = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (window.Eduzz) {
      window.Eduzz('Widget', { id: 2927424 }, e.currentTarget);
    }
  };

  const scrollToCTA = () => {
    const ctaButton = document.getElementById('cta-button');
    ctaButton?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen">
      {/* FAIXA DO EVENTO NO TOPO */}
      

      {/* SEÇÃO 1 - HERO CENTRALIZADO */}
      <section className="relative min-h-[90vh] md:min-h-screen py-16 md:py-24 px-4 overflow-hidden bg-[#030712]">
        {/* Background degradê azul/preto com vinheta */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#050a14] to-[#030712]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)]"></div>
        
        {/* Glow sutil centralizado */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center text-center">
          {/* Logo SouDrop Creators */}
          <div className="mb-8">
            <img src={creatorsLogo} alt="Sou Drop CREATORS" className="h-14 md:h-20 object-contain" />
          </div>

          {/* Pill branca - MASTERCLASS GRATUITA */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm md:text-base font-semibold px-5 py-2.5 rounded-full shadow-lg">
              ✓ CURSO 100% GRATUITO
            </span>
          </div>

          {/* Título H1 gigante em CAPS */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight uppercase">
            MÉTODO TIKTOK <br />
            <span className="text-primary">LUCRATIVO</span>
          </h1>

          {/* Subtítulo com valor em negrito */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-3 max-w-3xl">
            Descubra como pessoas comuns estão ganhando{" "}
            <strong className="text-white font-bold">R$3.000 a R$15.000 por mês</strong>{" "}
            vendendo produtos da SouDrop no TikTok Shop
          </p>

          {/* Linha menor com opacity baixa */}
          <p className="text-sm md:text-base text-gray-400 mb-10 max-w-2xl">
            Mesmo sem seguidores, sem experiência e sem investir um centavo em tráfego pago
          </p>

          {/* Botão CTA amarelo pill */}
          <div className="mb-12 flex justify-center w-full" id="cta-button">
            <Button 
              size="lg" 
              onClick={openEduzzWidget}
              className="max-w-[90%] md:max-w-none bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs md:text-xl px-6 md:px-14 py-2.5 md:py-7 h-auto rounded-full font-semibold md:font-black shadow-none md:shadow-[0_0_50px_rgba(250,204,21,0.4)] hover:shadow-none md:hover:shadow-[0_0_70px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              QUERO ME INSCREVER GRÁTIS
            </Button>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
            {/* Card 1 */}
            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl md:text-3xl font-black text-white mb-1">+2.500</p>
              <p className="text-gray-400 text-sm">
                Alunos/afiliados já vendem com o catálogo SouDrop
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xl md:text-2xl font-black text-white mb-1">Operação SouDrop</p>
              <p className="text-gray-400 text-sm">
                A gente cuida de estoque, separação, embalagem e envio
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xl md:text-2xl font-black text-white mb-1">Resultados na prática</p>
              <p className="text-gray-400 text-sm">
                Produtos validados + método simples pra começar
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
              O que você vai aprender no Método TikTok Lucrativo?
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

      {/* SEÇÃO DEPOIMENTOS */}
      <section className="bg-gradient-to-b from-gray-100 to-white py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary text-sm md:text-base px-6 py-2 rounded-full font-semibold mb-4">
              RESULTADOS REAIS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Resultados dos afiliados
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              O método funciona e já tem gente fazendo dar certo          
            </p>
          </div>

          {/* Cards de Depoimento com Vídeo Inline */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-12">
            {/* Card 1 - Vídeo MP4 Dropbox */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full md:w-1/3 max-w-xs">
              {/* Container do vídeo (9:16) */}
              <div 
                className="aspect-[9/16] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => {
                  if (!isVideoPlaying) {
                    setIsVideoPlaying(true);
                    const video = document.getElementById('afiliado1-video') as HTMLVideoElement;
                    video?.play();
                  }
                }}
              >
                <video
                  id="afiliado1-video"
                  src="https://www.dropbox.com/scl/fi/d6ab0dhwvk0ftvi3wac77/DEPOIMENTO-2.mp4?rlkey=kzriobr6hljt3fcc7zro492e7&raw=1"
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={isVideoPlaying}
                />
                
                {!isVideoPlaying && (
                  <>
                    {/* Overlay escuro no hover */}
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300 z-10"></div>
                    
                    {/* Ícone de Play */}
                    <div className="relative z-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </>
                )}
              </div>

              {/* Bloco de texto */}
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Andreza</h4>
                <p className="text-sm text-gray-600 mb-1">
                  Total Faturado: <span className="font-semibold text-gray-800">450K+</span>
                </p>
                <p className="text-sm text-gray-600">
                  Comissão: <span className="font-semibold text-primary">70K+</span>
                </p>
              </div>
            </div>

            {/* Card 2 - Vídeo MP4 Dropbox */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full md:w-1/3 max-w-xs">
              {/* Container do vídeo (9:16) */}
              <div 
                className="aspect-[9/16] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => {
                  if (!isDropboxVideoPlaying) {
                    setIsDropboxVideoPlaying(true);
                    const video = document.getElementById('dropbox-video') as HTMLVideoElement;
                    video?.play();
                  }
                }}
              >
                <video
                  id="dropbox-video"
                  src="https://www.dropbox.com/scl/fi/xi32e0l0r1j2gd4thxpfr/1229-1-1.mp4?rlkey=o4azalg12txbi3ub5p36caz41&raw=1"
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={isDropboxVideoPlaying}
                />
                
                {!isDropboxVideoPlaying && (
                  <>
                    {/* Overlay escuro no hover */}
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300 z-10"></div>
                    
                    {/* Ícone de Play */}
                    <div className="relative z-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </>
                )}
              </div>

              {/* Bloco de texto */}
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Thalia</h4>
                <p className="text-sm text-gray-600 mb-1">
                  Total Faturado: <span className="font-semibold text-gray-800">380K+</span>
                </p>
                <p className="text-sm text-gray-600">
                  Comissão: <span className="font-semibold text-primary">60K+</span>
                </p>
              </div>
            </div>

            {/* Card 3 - Vídeo MP4 Dropbox */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 w-full md:w-1/3 max-w-xs">
              {/* Container do vídeo (9:16) */}
              <div 
                className="aspect-[9/16] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 relative flex items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => {
                  if (!isVideo3Playing) {
                    setIsVideo3Playing(true);
                    const video = document.getElementById('afiliado3-video') as HTMLVideoElement;
                    video?.play();
                  }
                }}
              >
                <video
                  id="afiliado3-video"
                  src="https://www.dropbox.com/scl/fi/b8ykve4e1c99m80g5n7fo/DEPOIMNETO-3.mp4?rlkey=rm0auyheigoj4lqom9w0qulnr&raw=1"
                  className="absolute inset-0 w-full h-full object-cover"
                  playsInline
                  preload="metadata"
                  controls={isVideo3Playing}
                />
                
                {!isVideo3Playing && (
                  <>
                    {/* Overlay escuro no hover */}
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors duration-300 z-10"></div>
                    
                    {/* Ícone de Play */}
                    <div className="relative z-20 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </>
                )}
              </div>

              {/* Bloco de texto */}
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Emanuel</h4>
                <p className="text-sm text-gray-600 mb-1">
                  Total Faturado: <span className="font-semibold text-gray-800">728K+</span>
                </p>
                <p className="text-sm text-gray-600">
                  Comissão: <span className="font-semibold text-primary">100K+</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center w-full">
            <Button 
              size="lg" 
              onClick={openEduzzWidget}
              className="max-w-[90%] md:max-w-none bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs md:text-xl px-6 md:px-14 py-2.5 md:py-7 h-auto rounded-full font-semibold md:font-black shadow-none md:shadow-[0_0_50px_rgba(250,204,21,0.4)] hover:shadow-none md:hover:shadow-[0_0_70px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              QUERO COMEÇAR AGORA
            </Button>
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

            <div className="bg-card-dark border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 md:col-span-2">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Premiações Exclusivas</h3>
              <p className="text-gray-300">
                Conquiste suas metas e ganhe prêmios. De Kits SouDrop até uma Porsche 911!
              </p>
            </div>
          </div>

          {/* Botão CTA */}
          <div className="flex justify-center w-full">
            <Button 
              size="lg" 
              onClick={openEduzzWidget}
              className="max-w-[90%] md:max-w-none bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs md:text-xl px-6 md:px-14 py-2.5 md:py-7 h-auto rounded-full font-semibold md:font-black shadow-none md:shadow-[0_0_50px_rgba(250,204,21,0.4)] hover:shadow-none md:hover:shadow-[0_0_70px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              QUERO ME INSCREVER GRÁTIS
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
          <div className="flex justify-center mt-12 w-full">
            <Button 
              size="lg" 
              onClick={openEduzzWidget}
              className="max-w-[90%] md:max-w-none bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xs md:text-xl px-6 md:px-14 py-2.5 md:py-7 h-auto rounded-full font-semibold md:font-black shadow-none md:shadow-[0_0_50px_rgba(250,204,21,0.4)] hover:shadow-none md:hover:shadow-[0_0_70px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              QUERO ME INSCREVER GRÁTIS
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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfz26PKDg764nbjLyvKcG2PuSu4RaSXlNMh18dXAXWeRv0mHg/viewform?embedded=true" width="100%" height="643" className="border-0 rounded-lg" title="Formulário de Inscrição">
              Carregando…
            </iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default OperacaoTiktok;