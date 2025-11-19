import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Target, TrendingUp, Shield, Package, Search, AlertCircle, Lightbulb, BarChart } from "lucide-react";
import renanFerreira from "@/assets/renan-ferreira.jpg";

const CacadorProdutosEntrada = () => {
  const handleCTA = () => {
    window.open('https://pay.kiwify.com.br/2vuuaJJ', '_blank');
  };

  const painPoints = [
    "Você vende, mas sente que o lucro não acompanha o esforço",
    "Você vê concorrentes com preços melhores e não entende de onde vem essa diferença",
    "Você tem vontade de importar, mas não sabe por onde começar com segurança"
  ];

  const targetAudience = [
    "Para quem vende em marketplaces e sente que a margem está apertando",
    "Para quem quer parar de depender só de distribuidor nacional",
    "Para quem quer começar a importar com mais segurança",
    "Para quem quer entender um processo de escolha de produtos, não só 'dicas soltas'"
  ];

  const learningTopics = [
    {
      icon: Target,
      title: "Impacto da importação no seu negócio",
      description: "Entenda como a importação pode transformar sua margem de lucro e competitividade"
    },
    {
      icon: Search,
      title: "Sites usados pelos chineses",
      description: "Descubra as plataformas reais que os chineses usam para comprar com preços mais baixos"
    },
    {
      icon: Shield,
      title: "Fornecedores de confiança no 1688",
      description: "Aprenda critérios práticos para identificar fornecedores confiáveis e reduzir riscos"
    },
    {
      icon: BarChart,
      title: "Comparação China x Mercado Livre",
      description: "Veja como comparar preços e identificar oportunidades reais de lucro"
    },
    {
      icon: TrendingUp,
      title: "Validação com Pipi Ads + 1688",
      description: "Use dados para validar demanda antes de importar qualquer produto"
    },
    {
      icon: Lightbulb,
      title: "Rotina de caça de produtos",
      description: "Monte um processo simples e replicável para encontrar produtos lucrativos"
    }
  ];

  const courseModules = [
    {
      number: "01",
      title: "Bem-vindo – Quem sou eu e como a importação mudou minha vida",
      description: "Conheça a jornada do especialista e entenda a mentalidade correta para começar."
    },
    {
      number: "02",
      title: "Os sites usados pelos chineses para comprar barato",
      description: "Acesse as plataformas secretas onde os preços são realmente competitivos."
    },
    {
      number: "03",
      title: "Como achar um fornecedor de confiança no 1688",
      description: "Critérios práticos para analisar fornecedores e minimizar riscos."
    },
    {
      number: "04",
      title: "Comparando preços e encontrando oportunidades no Mercado Livre",
      description: "Aprenda a comparar China vs Brasil e identificar produtos com boa margem."
    },
    {
      number: "05",
      title: "Bônus – Pipi Ads + 1688 para validar demanda",
      description: "Use ferramentas de dados para validar produtos antes de investir."
    },
    {
      number: "06",
      title: "Encerramento e próximos passos",
      description: "Orientações finais para continuar evoluindo como caçador de produtos."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Vendedor Mercado Livre • SP",
      text: "Consegui entender melhor como escolher produtos. Agora não escolho mais no impulso."
    },
    {
      name: "Patricia Silva",
      role: "Lojista Shopee • RJ",
      text: "Me sinto muito mais segura para analisar oportunidades de importação."
    },
    {
      name: "Felipe Costa",
      role: "Empreendedor Digital • MG",
      text: "O método de comparação de preços mudou completamente minha forma de trabalhar."
    },
    {
      name: "Gustavo Almeida",
      role: "Vendedor Amazon • RS",
      text: "Parei de escolher produto no achismo. Agora uso dados para decidir."
    }
  ];

  const faqItems = [
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O acesso ao curso é vitalício. Você poderá assistir às aulas quantas vezes quiser, no seu ritmo."
    },
    {
      question: "Este curso é para quem está começando do zero?",
      answer: "Sim. O curso foi pensado tanto para iniciantes quanto para quem já vende e quer profissionalizar a escolha de produtos."
    },
    {
      question: "Preciso já vender em marketplaces para aproveitar?",
      answer: "Não é obrigatório, mas o curso é especialmente útil para quem já tem ou pretende ter operação em marketplaces."
    },
    {
      question: "O curso mostra a parte prática da pesquisa de produtos?",
      answer: "Sim. O foco do curso é mostrar, na prática, como pesquisar, validar e escolher produtos lucrativos."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso à área de membros do curso."
    },
    {
      question: "O curso é ao vivo?",
      answer: "Não. É um curso com aulas gravadas que você assiste quando e onde quiser."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617]">
      
      {/* Header */}
      <header className="bg-[#020617] border-b border-[#38BDF8]/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-[#E5E7EB] text-xl font-bold">
              Caçador de Produtos
            </div>
            <Button 
              onClick={handleCTA} 
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white font-semibold px-6 rounded-lg"
            >
              Quero acessar o Caçador de Produtos
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#020617] to-[#0B1120] py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#38BDF8]/20 border border-[#38BDF8]/30 text-[#E5E7EB] px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[#38BDF8] rounded-full animate-pulse" />
                Curso online gravado • Acesso pela internet
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E5E7EB] leading-tight">
                Caçador de Produtos: sua porta de entrada para encontrar produtos lucrativos na China
              </h1>

              <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
                Um curso 100% online, direto ao ponto, que te mostra como pesquisar, comparar e escolher produtos com potencial real de lucro para vender em marketplaces como Mercado Livre, Shopee, Amazon e Magalu.
              </p>

              <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-lg p-6">
                <p className="text-[#38BDF8] font-bold text-2xl md:text-3xl">
                  Oferta especial de entrada: por apenas R$ 9,90
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">Entenda, na prática, como a importação pode aumentar sua margem</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">Aprenda a pesquisar produtos com dados, não no achismo</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">Veja como comparar China x Mercado Livre antes de colocar dinheiro no produto</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="w-full md:w-auto bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white text-lg px-10 py-6 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Quero acessar o Caçador de Produtos
                </Button>
                
                <p className="text-sm text-[#9CA3AF]">
                  Curso online, acesso imediato pela internet.
                </p>
              </div>
            </div>

            {/* Right - Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#111827]/80 to-[#0B1120]/80 rounded-2xl border border-[#38BDF8]/20 overflow-hidden shadow-2xl">
                  <img 
                    src={renanFerreira} 
                    alt="Renan Ferreira - Especialista em Importação" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#38BDF8]/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problema / Contexto */}
      <section className="bg-[#0B1120] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center">
              Por que tantos vendedores deixam dinheiro na mesa?
            </h2>
            
            <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
              <p>
                A margem de lucro em marketplaces está cada vez mais apertada. Os distribuidores nacionais cobram caro, e você acaba competindo com vendedores que importam direto da China.
              </p>
              <p>
                Muitos vendedores têm vontade de importar para aumentar a margem, mas ficam travados pelo medo de errar na escolha do produto, de não encontrar fornecedores confiáveis ou de perder dinheiro com produtos que não vendem.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              {painPoints.map((pain, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#111827] p-4 rounded-lg border border-[#38BDF8]/10">
                  <AlertCircle className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="bg-[#111827] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center">
              O que é o Caçador de Produtos?
            </h2>
            
            <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
              <p>
                O Caçador de Produtos é um curso online gravado que mostra, na prática, como pesquisar, filtrar e validar produtos lucrativos para importar da China.
              </p>
              <p>
                É focado em quem vende (ou quer vender) em marketplaces como Mercado Livre, Shopee, Amazon e Magalu. O objetivo não é te dar "dicas soltas", mas sim ensinar como pensar produto, margem e risco com mais inteligência.
              </p>
            </div>

            <div className="bg-[#0B1120] border border-[#38BDF8]/20 rounded-lg p-6 md:p-8 space-y-4">
              <h3 className="text-xl font-bold text-[#E5E7EB]">Você vai aprender a:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">Pesquisar produtos em plataformas usadas pelos próprios chineses</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">Encontrar fornecedores mais confiáveis no 1688</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#38BDF8] mt-1 flex-shrink-0" />
                  <p className="text-[#E5E7EB]">Comparar preços da China com os preços reais de venda no Brasil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-[#0B1120] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-12">
            Para quem é o Caçador de Produtos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((item, index) => (
              <Card key={index} className="bg-[#111827] border-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#38BDF8]" />
                    </div>
                  </div>
                  <p className="text-[#E5E7EB] text-lg leading-relaxed">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que vai aprender */}
      <section className="bg-[#111827] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-12">
            O que você vai aprender por dentro do curso
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <Card key={index} className="bg-[#0B1120] border-[#38BDF8]/20 hover:border-[#38BDF8]/40 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#38BDF8]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#E5E7EB] mb-3">{topic.title}</h3>
                    <p className="text-[#9CA3AF] leading-relaxed">{topic.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleCTA} 
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white px-10 py-5 rounded-lg font-semibold text-lg"
            >
              Quero ver tudo isso por dentro
            </Button>
          </div>
        </div>
      </section>

      {/* Conteúdo detalhado */}
      <section className="bg-[#020617] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-6">
              O que você recebe ao entrar no Caçador de Produtos
            </h2>
            <p className="text-lg text-[#9CA3AF] text-center mb-12">
              Aulas organizadas e direto ao ponto
            </p>

            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <Card key={index} className="bg-[#111827] border-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#38BDF8] text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        {module.number}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-[#E5E7EB]">{module.title}</h3>
                        <p className="text-[#9CA3AF] leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é o especialista */}
      <section className="bg-[#0B1120] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-12">
              Quem está por trás do Caçador de Produtos?
            </h2>

            <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-center">
              {/* Foto */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-[#111827]/80 to-[#38BDF8]/20 rounded-2xl border border-[#38BDF8]/20 overflow-hidden shadow-xl">
                  <img 
                    src={renanFerreira} 
                    alt="Renan Ferreira - Especialista em Importação da China" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Textos */}
              <div className="space-y-6 text-[#9CA3AF] text-lg leading-relaxed">
                <p>
                  Com anos de experiência em importação direta da China, trabalho há muito tempo com fábricas, 
                  fornecedores, containers e toda a operação logística que envolve trazer produtos do outro lado do mundo.
                </p>
                <p>
                  Também tenho experiência real com vendas em marketplaces como Mercado Livre, Shopee, Amazon e Magalu. 
                  Não é só teoria. É vivência prática de quem já passou pelos desafios de escolher produtos, 
                  validar demanda e aumentar margem de lucro.
                </p>
                <p>
                  Meu foco é ajudar vendedores e donos de e-commerce a escolherem produtos com mais inteligência, 
                  reduzindo riscos e evitando os erros mais comuns na hora de importar.
                </p>

                <div className="pt-4">
                  <Button 
                    onClick={handleCTA} 
                    className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white px-8 py-5 rounded-lg font-semibold"
                  >
                    Quero aprender com quem vive isso na prática
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="bg-[#111827] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-6">
            Por que você pode confiar no que vai aprender?
          </h2>
          <p className="text-lg text-[#9CA3AF] text-center mb-12">
            O foco deste curso é prática, não teoria complicada
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#0B1120] border-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#38BDF8] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-[#E5E7EB] mb-6 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-[#38BDF8]/20 pt-4">
                    <p className="font-bold text-[#E5E7EB]">{testimonial.name}</p>
                    <p className="text-sm text-[#9CA3AF]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={handleCTA} 
              className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white px-10 py-5 rounded-lg font-semibold text-lg"
            >
              Quero ter resultados assim também
            </Button>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-[#020617] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-12">
              Como funciona o acesso ao curso
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <p className="text-[#9CA3AF] text-lg">Curso 100% online, aulas gravadas</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <p className="text-[#9CA3AF] text-lg">Você assiste quando e onde quiser</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <p className="text-[#9CA3AF] text-lg">Acesso vitalício ao conteúdo</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <p className="text-[#9CA3AF] text-lg">Pagamento em plataforma segura</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38BDF8]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <p className="text-[#9CA3AF] text-lg">Acesso enviado por e-mail após confirmação do pagamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0B1120] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB] text-center mb-12">
            Perguntas frequentes
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-[#111827] border border-[#38BDF8]/20 rounded-lg px-6 data-[state=open]:border-[#38BDF8]/40"
                >
                  <AccordionTrigger className="text-[#E5E7EB] font-semibold hover:text-[#38BDF8] text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#9CA3AF] leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#020617] py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#E5E7EB] leading-tight">
              Pronto para se tornar um Caçador de Produtos?
            </h2>
            
            <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed">
              Esta é uma oferta de entrada para o mesmo curso Caçador de Produtos. O objetivo é acelerar o caminho de quem quer importar com mais segurança e aumentar a margem de lucro nos marketplaces.
            </p>

            <div className="py-8">
              <div className="bg-[#38BDF8]/10 border border-[#38BDF8]/30 rounded-lg p-8 mb-8 inline-block">
                <p className="text-[#9CA3AF] text-sm mb-3">Oferta especial de entrada</p>
                <p className="text-5xl md:text-6xl font-bold text-[#38BDF8]">R$ 9,90</p>
              </div>
              
              <Button 
                onClick={handleCTA} 
                size="lg" 
                className="w-full md:w-auto bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white text-xl px-16 py-8 font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                Quero acessar o Caçador de Produtos
              </Button>
              
              <p className="text-sm text-[#9CA3AF] mt-6">
                Pagamento 100% seguro. Curso online, acesso imediato pela internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] py-8 border-t border-[#38BDF8]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#9CA3AF]">
            © 2024 Caçador de Produtos. Todos os direitos reservados. Este é um produto digital com acesso pela internet.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default CacadorProdutosEntrada;
