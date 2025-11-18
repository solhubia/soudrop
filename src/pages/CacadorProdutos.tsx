import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Target, 
  Search, 
  Shield, 
  TrendingUp, 
  Package, 
  PlayCircle,
  Clock,
  Star,
  Lock,
  Zap,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";
import mentorPhoto from "@/assets/renan-ferreira.jpg";

const CacadorProdutos = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-final");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const targetAudience = [
    "Para quem vende em marketplaces e sente que a margem está cada vez menor",
    "Para quem quer parar de depender só de distribuidores nacionais",
    "Para quem tem medo de importar e errar na escolha dos produtos",
    "Para quem quer um processo simples para identificar oportunidades reais de lucro",
    "Para quem está começando ou já vende, mas ainda escolhe produto no chute"
  ];

  const modules = [
    {
      id: "modulo-1",
      number: "01",
      title: "Bem-vindo e visão geral",
      lessons: [
        "Bem-vindo – Quem sou eu e como a importação mudou minha vida",
        "Entendendo o potencial de importar produtos da China para marketplaces"
      ]
    },
    {
      id: "modulo-2",
      number: "02",
      title: "Sites e plataformas para encontrar produtos",
      lessons: [
        "Os sites secretos que os próprios chineses usam para comprar barato",
        "Navegando pelas principais plataformas e entendendo a lógica de busca"
      ]
    },
    {
      id: "modulo-3",
      number: "03",
      title: "Fornecedores e confiança no 1688",
      lessons: [
        "Como achar um fornecedor de confiança no 1688",
        "Critérios práticos para avaliar fornecedor (avaliações, histórico, comunicação)"
      ]
    },
    {
      id: "modulo-4",
      number: "04",
      title: "Comparando preços e analisando oportunidades",
      lessons: [
        "Comparando preços entre China x Mercado Livre para encontrar boas margens",
        "Como identificar oportunidades reais e fugir de produtos saturados"
      ]
    },
    {
      id: "modulo-5",
      number: "05",
      title: "Bônus Pipi Ads + 1688",
      lessons: [
        "Como usar Pipi Ads para validar demanda de produtos",
        "Conectando pesquisa no 1688 com dados de mercado"
      ]
    },
    {
      id: "modulo-6",
      number: "06",
      title: "Encerramento e próximos passos",
      lessons: [
        "Resumo, próximos passos e como evoluir depois do curso"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Vendedor Mercado Livre - SP",
      text: "Consegui encontrar melhores produtos e evitar várias furadas. O curso é direto ao ponto e muito prático."
    },
    {
      name: "Patricia Silva",
      role: "Lojista Shopee - RJ",
      text: "Ganhei muito mais confiança na escolha de produtos para importar. Vale cada centavo do investimento."
    },
    {
      name: "Felipe Costa",
      role: "Empreendedor Digital - MG",
      text: "O método de comparação de preços me abriu os olhos para oportunidades que eu nunca tinha visto antes."
    },
    {
      name: "Gustavo Almeida",
      role: "Vendedor Amazon - RS",
      text: "Finalmente entendi como os grandes players escolhem seus produtos. Método claro e aplicável."
    }
  ];

  const whyItWorks = [
    "Baseado em dados reais de preços e demanda, não em achismos",
    "Processo simples e aplicável no dia a dia, sem complicação",
    "Criado a partir de experiência real com importação e marketplaces",
    "Foco em resultados práticos, não em teoria sem aplicação",
    "Conteúdo direto ao ponto, sem enrolação"
  ];

  const faqItems = [
    {
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O tempo de acesso será informado após a compra. Você terá tempo suficiente para revisar todo o conteúdo quantas vezes precisar."
    },
    {
      question: "Como vou receber meus dados de acesso?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com seu login e senha para acessar a plataforma do curso."
    },
    {
      question: "Posso assistir pelo celular?",
      answer: "Sim! O curso é 100% online e pode ser acessado de qualquer dispositivo com internet: computador, tablet ou celular."
    },
    {
      question: "O curso é indicado para iniciantes?",
      answer: "Sim! O conteúdo foi pensado tanto para quem está começando quanto para quem já vende e quer melhorar suas escolhas de produtos."
    },
    {
      question: "Preciso já estar importando para aproveitar o conteúdo?",
      answer: "Não! O curso mostra justamente como começar. Você vai aprender o passo a passo desde a pesquisa até a análise de oportunidades."
    },
    {
      question: "O que diferencia este curso de outros sobre importação?",
      answer: "Foco total em encontrar produtos lucrativos. Não é um curso genérico sobre importação, mas sim sobre como caçar as melhores oportunidades."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <img src={logoSoudrop} alt="SouDrop Brasil" className="h-10 md:h-12" />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Text */}
            <div className="space-y-6">
              <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-bold border-0">
                CURSO 100% ONLINE
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-red-600">Caçador de Produtos:</span> aprenda a encontrar produtos lucrativos na China para vender em marketplaces
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">
                Um curso direto ao ponto para vendedores de Mercado Livre, Shopee, Amazon e Magalu 
                que querem aumentar a margem escolhendo os produtos certos, sem depender de achismo.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Curso 100% online</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Acesso pela internet</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Conteúdo direto ao ponto</span>
                </div>
              </div>
            </div>

            {/* Right Side - Price Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md bg-white border-2 border-red-200 shadow-2xl">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-600 text-lg">De <span className="line-through">R$ 97,00</span> por</p>
                      <div className="text-6xl font-bold text-red-600">
                        R$ 27,90
                      </div>
                      <p className="text-sm text-gray-600">Pagamento único</p>
                    </div>

                    <Button 
                      onClick={scrollToCTA}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-red-900 font-bold text-lg py-7 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    >
                      Quero acessar o Caçador de Produtos
                    </Button>

                    <p className="text-xs text-gray-600">
                      Pagamento seguro, acesso online imediato
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Shield className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm">Compra 100% segura</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm">Acesso imediato após pagamento</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Zap className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm">Conteúdo prático e aplicável</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Para quem é o <span className="text-red-600">Caçador de Produtos?</span>
              </h2>
              <p className="text-xl text-gray-600">
                Se você se encaixa em algum desses perfis, este curso foi feito para você
              </p>
            </div>

            <div className="space-y-4">
              {targetAudience.map((item, index) => (
                <Card key={index} className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-l-red-600 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-800 text-lg font-medium">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O QUE É O CURSO */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                O que é o <span className="text-red-600">Caçador de Produtos?</span>
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
                <p>
                  É um treinamento online, com aulas gravadas, mostrando passo a passo como encontrar 
                  produtos lucrativos na China para importar e revender em marketplaces brasileiros.
                </p>
                
                <p>
                  O foco é mostrar onde pesquisar, como comparar preços entre fornecedores chineses e 
                  o mercado brasileiro, e como enxergar oportunidades verdadeiras que a maioria dos 
                  vendedores não consegue identificar.
                </p>
                
                <p>
                  O conteúdo foi feito para quem quer resultado prático, sem enrolação e sem precisar 
                  ser especialista em importação. Você aprende o essencial para começar a caçar produtos 
                  com potencial real de lucro.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                    <PlayCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Curso 100% online</h3>
                  <p className="text-sm text-gray-600">Assista quando e onde quiser</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Conteúdo direto ao ponto</h3>
                  <p className="text-sm text-gray-600">Sem enrolação, foco em resultados</p>
                </div>

                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto">
                    <Package className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Para todos os marketplaces</h3>
                  <p className="text-sm text-gray-600">ML, Shopee, Amazon, Magalu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS E AULAS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Módulos e aulas - <span className="text-red-600">O que você vai aprender</span>
              </h2>
              <p className="text-xl text-gray-600">
                Conteúdo organizado em módulos para facilitar seu aprendizado
              </p>
            </div>

            <div className="space-y-4">
              {modules.map((module) => (
                <Card key={module.id} className="bg-white border-2 border-gray-200 hover:border-red-300 transition-all duration-300 overflow-hidden">
                  <button
                    onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{module.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {module.lessons.length} {module.lessons.length === 1 ? 'aula' : 'aulas'}
                        </p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-red-600 transition-transform duration-300 ${
                        expandedModule === module.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedModule === module.id && (
                    <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                      <div className="pt-6 space-y-3">
                        {module.lessons.map((lesson, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                            <PlayCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUEM ESTÁ POR TRÁS */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Quem está por trás do <span className="text-red-600">Caçador de Produtos?</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 blur-2xl rounded-full"></div>
                  <img 
                    src={mentorPhoto} 
                    alt="Renan Ferreira" 
                    className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border-4 border-white shadow-2xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-gray-900">
                  Renan Ferreira
                </h3>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Empresário e importador há mais de 10 anos, com experiência direta dentro de 
                    fábricas e escritórios na China. Já importei milhares de produtos e hoje ensino, 
                    de forma prática, como qualquer pessoa pode fazer o mesmo.
                  </p>
                  
                  <p>
                    Trabalho diariamente com vendas em marketplaces como Mercado Livre, Shopee, 
                    Amazon e Magalu, utilizando a importação como estratégia principal para aumentar 
                    margem de lucro e competitividade.
                  </p>
                  
                  <p>
                    Ao longo desses anos, já ajudei centenas de vendedores a estruturarem suas 
                    operações de importação, encontrarem produtos campeões e aumentarem seus lucros 
                    de forma consistente e segura.
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">
                      Mais de 10 anos de experiência com importação da China
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">
                      Milhares de produtos importados diretamente de fábricas
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-medium">
                      Vendedor ativo nos principais marketplaces do Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                O que dizem os <span className="text-red-600">alunos</span>
              </h2>
              <p className="text-xl text-gray-600">
                Veja o que quem já fez o curso tem a dizer
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-orange-200 pt-4">
                      <p className="text-gray-900 font-bold text-lg">{testimonial.name}</p>
                      <p className="text-red-600 text-sm font-medium">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE FUNCIONA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Por que esse <span className="text-red-600">método funciona?</span>
              </h2>
            </div>

            <div className="space-y-4">
              {whyItWorks.map((item, index) => (
                <Card key={index} className="bg-white border-l-4 border-l-red-600 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-800 text-lg font-medium">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Perguntas <span className="text-red-600">frequentes</span>
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg px-6 hover:border-red-300 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-gray-900 hover:text-red-600 py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-2 border-red-200 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Você pode testar <span className="text-red-600">sem risco</span>
                </h2>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                  <p>
                    Sabemos que você quer ter certeza de que está fazendo um bom investimento. 
                    Por isso, oferecemos garantia para que você possa testar o curso com tranquilidade.
                  </p>
                  
                  <p>
                    Nosso objetivo é entregar conteúdo prático e de qualidade. A compra é feita em 
                    plataforma segura e você recebe acesso imediato após a confirmação do pagamento.
                  </p>

                  <p className="font-bold text-red-600 text-xl pt-4">
                    Compre agora e comece a aplicar ainda hoje!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta-final" className="py-16 md:py-24 bg-gradient-to-br from-red-600 via-orange-600 to-red-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-yellow-400 text-red-900 px-6 py-3 text-base font-bold border-0">
              OFERTA PROMOCIONAL POR TEMPO LIMITADO
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Pronto para se tornar um Caçador de Produtos?
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Acesso ao curso Caçador de Produtos com aulas passo a passo e conteúdo focado em 
              encontrar produtos lucrativos para importar da China e vender em marketplaces.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-white text-lg mb-2">Investimento único de apenas</p>
              <div className="text-6xl md:text-7xl font-bold text-white mb-2">
                R$ 27,90
              </div>
              <p className="text-white/80 text-sm mb-6">Pagamento único, sem mensalidades</p>

              <Button 
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-red-900 font-bold text-xl py-8 shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 border-0"
              >
                Quero acessar o Caçador de Produtos
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center items-center pt-4">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium text-lg">Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium text-lg">Conteúdo Completo</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium text-lg">Suporte Incluso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 SouDrop Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CacadorProdutos;
