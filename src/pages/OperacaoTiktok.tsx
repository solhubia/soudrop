import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign,
  BookOpen,
  Share2,
  Target,
  Wallet,
  Video,
  MessageCircle,
  Award,
  Shield,
  Play
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OperacaoTiktok = () => {
  const scrollToCTA = () => {
    const heroSection = document.getElementById('hero-cta');
    heroSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section id="hero-cta" className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/creators-logo.png" 
              alt="Logo" 
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* Badge */}
          <Badge className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-6 py-2">
            CURSO 100% GRATUITO
          </Badge>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Operação TikTok <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              de Lucro
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Aprenda a faturar no TikTok Shop vendendo produtos como afiliado, sem investir nada em tráfego pago!
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg md:text-xl px-8 py-6 h-auto rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            QUERO ME INSCREVER GRATUITAMENTE!
          </Button>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-orange-400 mb-3 mx-auto" />
              <p className="text-white font-bold text-lg">Afiliados faturando</p>
              <p className="text-orange-400 text-2xl font-bold">+ R$ 10 MIL/mês</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <Target className="w-12 h-12 text-pink-400 mb-3 mx-auto" />
              <p className="text-white font-bold text-lg">Produtos já prontos</p>
              <p className="text-pink-400 text-2xl font-bold">para promover</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <DollarSign className="w-12 h-12 text-green-400 mb-3 mx-auto" />
              <p className="text-white font-bold text-lg">Mais de</p>
              <p className="text-green-400 text-2xl font-bold">R$ 1 MILHÃO</p>
              <p className="text-white">em vendas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O que você vai aprender no <br />
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Método Tiktok Milionário
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <BookOpen className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Configuração Completa</h3>
            <p className="text-gray-300">Como configurar sua conta no TikTok Shop do zero</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <Share2 className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Divulgação Eficaz</h3>
            <p className="text-gray-300">Como divulgar produtos de forma eficaz e viral</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Estratégias Diárias</h3>
            <p className="text-gray-300">Estratégias para gerar vendas todos os dias</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
            <Wallet className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Receba Comissões</h3>
            <p className="text-gray-300">Como receber suas comissões rapidamente</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Resultado dos <span className="text-pink-500">Afiliados!</span>
          </h2>
          <p className="text-xl text-gray-300">
            O Método Funciona e já tem gente fazendo dar certo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/30 to-orange-600/30 backdrop-blur-lg border border-orange-500/50 rounded-2xl p-6 relative group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-full h-48 bg-orange-500/20 rounded-xl mb-4 relative overflow-hidden">
              <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Alânia</h3>
            <p className="text-orange-400 font-semibold">GMV Total: 300K+</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/30 to-pink-600/30 backdrop-blur-lg border border-pink-500/50 rounded-2xl p-6 relative group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-full h-48 bg-pink-500/20 rounded-xl mb-4 relative overflow-hidden">
              <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Lethicia</h3>
            <p className="text-pink-400 font-semibold">GMV Total: 300K+</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-lg border border-green-500/50 rounded-2xl p-6 relative group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-full h-48 bg-green-500/20 rounded-xl mb-4 relative overflow-hidden">
              <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Joan</h3>
            <p className="text-green-400 font-semibold">GMV Total: 300K+</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-lg border border-blue-500/50 rounded-2xl p-6 relative group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-full h-48 bg-blue-500/20 rounded-xl mb-4 relative overflow-hidden">
              <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h3 className="text-white font-bold text-xl mb-1">Danilow</h3>
            <p className="text-blue-400 font-semibold">GMV Total: 300K+</p>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            O que torna esse curso <span className="text-orange-500">diferente?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Video className="w-12 h-12 text-purple-400 mb-3 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Aulas Passo a Passo</h3>
            <p className="text-gray-300 text-sm">Conteúdo didático e prático</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Users className="w-12 h-12 text-pink-400 mb-3 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Mentorias Semanais</h3>
            <p className="text-gray-300 text-sm">Tire suas dúvidas ao vivo</p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <MessageCircle className="w-12 h-12 text-green-400 mb-3 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Suporte no Whatsapp</h3>
            <p className="text-gray-300 text-sm">Ajuda sempre que precisar</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <CheckCircle className="w-12 h-12 text-orange-400 mb-3 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Comunidade Ativa</h3>
            <p className="text-gray-300 text-sm">Networking e troca de experiências</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <Award className="w-12 h-12 text-blue-400 mb-3 mx-auto" />
            <h3 className="text-white font-bold text-lg mb-2">Premiações</h3>
            <p className="text-gray-300 text-sm">Bônus para melhores alunos</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToCTA}
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-lg md:text-xl px-8 py-6 h-auto rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            GARANTIR MINHA VAGA GRATUITA
          </Button>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-gradient-to-b from-transparent via-green-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-6 py-2 mb-4">
              GARANTIA TOTAL DE SATISFAÇÃO
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              O participante <span className="text-green-400">NÃO VAI GASTAR NADA</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              nem com o curso, nem com tráfego pago...
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-lg border-2 border-green-500/50 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <Shield className="w-20 h-20 text-green-400 mb-6 mx-auto" />
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-white text-lg md:text-xl">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold">Estrutura pronta</span>
              </div>
              <div className="text-green-400 text-2xl font-bold">+</div>
              <div className="flex items-center justify-center gap-3 text-white text-lg md:text-xl">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold">Produtos que vendem</span>
              </div>
              <div className="text-green-400 text-2xl font-bold">+</div>
              <div className="flex items-center justify-center gap-3 text-white text-lg md:text-xl">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold">Método comprovado</span>
              </div>
              <div className="text-green-400 text-2xl font-bold">=</div>
              <div className="bg-green-500/30 border border-green-400 rounded-xl p-6 mt-6">
                <p className="text-white text-2xl md:text-3xl font-bold">
                  Seu sucesso!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            Perguntas <span className="text-pink-500">Frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem 
              value="item-1" 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg border border-purple-500/30 rounded-xl px-6"
            >
              <AccordionTrigger className="text-white hover:text-pink-400 text-left font-semibold">
                Preciso ter seguidores no TikTok para começar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Não! Você pode começar do zero. O método ensina como crescer organicamente enquanto faz vendas como afiliado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-2" 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg border border-purple-500/30 rounded-xl px-6"
            >
              <AccordionTrigger className="text-white hover:text-pink-400 text-left font-semibold">
                É de graça mesmo? Não tem pegadinha?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Sim, é 100% gratuito! Não cobramos nada pelo curso. Nossa missão é formar novos afiliados de sucesso no TikTok Shop.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-3" 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg border border-purple-500/30 rounded-xl px-6"
            >
              <AccordionTrigger className="text-white hover:text-pink-400 text-left font-semibold">
                Quando começam as aulas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Assim que você se inscrever, terá acesso imediato ao conteúdo. As mentorias ao vivo acontecem semanalmente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-4" 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg border border-purple-500/30 rounded-xl px-6"
            >
              <AccordionTrigger className="text-white hover:text-pink-400 text-left font-semibold">
                Vou ter que investir em tráfego pago?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Não! O método é focado em tráfego orgânico. Você não precisa investir nenhum centavo em anúncios para começar a vender.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="item-5" 
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-lg border border-purple-500/30 rounded-xl px-6"
            >
              <AccordionTrigger className="text-white hover:text-pink-400 text-left font-semibold">
                Quanto tempo leva para ver os primeiros resultados?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Muitos alunos conseguem suas primeiras vendas nas primeiras semanas. Tudo depende da sua dedicação e aplicação do método.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg md:text-xl px-12 py-6 h-auto rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
        >
          GARANTIR MINHA VAGA AGORA!
        </Button>
      </section>
    </div>
  );
};

export default OperacaoTiktok;