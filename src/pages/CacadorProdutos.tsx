import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, TrendingUp, Shield, Package, Search, Star, PlayCircle, ArrowRight } from "lucide-react";
import mentorPhoto from "@/assets/renan-ferreira.jpg";

const CacadorProdutos = () => {
  const scrollToCTA = () => {
    const ctaSection = document.getElementById("cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const targetAudience = [
    "Para quem vende em marketplaces e sente que a margem está cada vez menor",
    "Para quem quer parar de depender apenas de distribuidores nacionais",
    "Para quem tem vontade de importar da China, mas não sabe por onde começar",
    "Para quem não quer perder dinheiro escolhendo produtos errados",
    "Para quem quer ter um processo claro para analisar oportunidades e produtos"
  ];

  const learningTopics = [
    {
      icon: Target,
      text: "Como entender, na prática, o impacto da importação na sua vida e no seu negócio"
    },
    {
      icon: Search,
      text: "Quais são os sites 'secretos' que os próprios chineses usam para comprar barato"
    },
    {
      icon: Shield,
      text: "Como encontrar e validar fornecedores de confiança no 1688"
    },
    {
      icon: TrendingUp,
      text: "Como comparar preços entre China e Mercado Livre para achar oportunidades de lucro"
    },
    {
      icon: Package,
      text: "Como usar Pipi Ads + 1688 para validar demanda de produtos"
    },
    {
      icon: CheckCircle2,
      text: "Como transformar esse conhecimento em uma rotina simples de caça de produtos lucrativos"
    }
  ];

  const courseModules = [
    {
      number: "01",
      title: "Bem-vindo – Quem sou eu e como a importação mudou minha vida",
      description: "Entenda a visão geral do curso e a mentalidade correta para importar com segurança e lucro."
    },
    {
      number: "02",
      title: "Os sites 'secretos' que os próprios chineses usam para comprar barato",
      description: "Descubra plataformas usadas pelos chineses para encontrar preços realmente competitivos."
    },
    {
      number: "03",
      title: "Como achar um fornecedor de confiança no 1688",
      description: "Aprenda critérios práticos para analisar fornecedores e reduzir riscos na importação."
    },
    {
      number: "04",
      title: "Comparando preços e encontrando oportunidades no Mercado Livre",
      description: "Compare preço de compra x preço de venda real, identificando produtos com boa margem."
    },
    {
      number: "05",
      title: "Bônus – Pipi Ads + 1688",
      description: "Aula bônus mostrando como usar Pipi Ads junto com 1688 para validar produtos e demanda."
    },
    {
      number: "06",
      title: "Encerramento e próximos passos",
      description: "Orientações finais para você continuar evoluindo como um verdadeiro caçador de produtos."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Vendedor Mercado Livre • SP",
      text: "Consegui encontrar melhores produtos e evitar várias furadas. O curso é direto ao ponto e muito prático."
    },
    {
      name: "Patricia Silva",
      role: "Lojista Shopee • RJ",
      text: "Ganhei muito mais confiança na escolha de produtos para importar. Vale cada centavo do investimento."
    },
    {
      name: "Felipe Costa",
      role: "Empreendedor Digital • MG",
      text: "O método de comparação de preços me abriu os olhos para oportunidades que eu nunca tinha visto antes."
    }
  ];

  return (
    <div className="min-h-screen bg-cacador-bg-main overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cacador-bg-alt/95 backdrop-blur-sm border-b border-cacador-pink-light/20">
        <div className="container mx-auto px-4 py-4 flex justify-center" />
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-24 relative overflow-hidden bg-gradient-cacador-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-cacador-pink/5 via-transparent to-cacador-pink/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Hero content */}
              <div className="space-y-6 md:space-y-8 text-center md:text-left">
                <Badge className="bg-cacador-pink/20 text-cacador-pink border-cacador-pink/30 hover:bg-cacador-pink/30 text-sm md:text-base px-4 py-2 mx-auto md:mx-0 w-fit">
                  🎯 Curso Prático de Importação
                </Badge>

                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Caçador de Produtos:
                    <span className="block text-cacador-pink mt-2">Importação da China</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-cacador-text-secondary max-w-2xl mx-auto md:mx-0">
                    Aprenda a encontrar produtos lucrativos na China, comparar preços e validar fornecedores de forma segura. Sem enrolação, direto ao ponto.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <p className="text-cacador-text-secondary text-base md:text-lg">
                      Aprenda a comparar preços e achar oportunidades de lucro
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <p className="text-cacador-text-secondary text-base md:text-lg">
                      Saiba como validar fornecedores no 1688 com segurança
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <p className="text-cacador-text-secondary text-base md:text-lg">
                      Descubra os sites "secretos" que os próprios chineses usam
                    </p>
                  </div>
                </div>

                <Button onClick={scrollToCTA} size="lg" className="w-full md:w-auto bg-cacador-yellow hover:bg-cacador-yellow/90 text-black font-bold text-base md:text-lg px-8 py-6 md:py-7 rounded-lg shadow-lg hover:shadow-cacador-pink/20 transition-all duration-300 hover:scale-105">
                  Quero ter acesso agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="relative w-full mt-6 md:mt-0">
                <Card className="bg-cacador-dark-card border border-cacador-pink-light/30 shadow-xl">
                  <CardContent className="p-6 md:p-8">
                    <div className="space-y-5 md:space-y-6">
                      <div className="text-center py-4">
                        <span className="text-5xl md:text-6xl font-bold text-white">R$ 37,90</span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                          <span>Acesso imediato ao curso</span>
                        </div>
                        <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                          <span>6 módulos completos</span>
                        </div>
                        <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                          <span>Aula bônus exclusiva</span>
                        </div>
                        <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                          <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                          <span>Certificado de conclusão</span>
                        </div>
                      </div>

                      <Button onClick={scrollToCTA} size="lg" className="w-full bg-cacador-yellow hover:bg-cacador-yellow/90 text-black font-bold text-base md:text-lg py-6 md:py-7 rounded-lg shadow-lg hover:shadow-cacador-pink/20 transition-all duration-300">
                        Garantir minha vaga
                      </Button>

                      <p className="text-xs text-cacador-text-secondary text-center">
                        ✓ Pagamento 100% seguro • Acesso vitalício
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é este curso */}
      <section className="py-12 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Para quem é este curso?
              </h2>
              <p className="text-lg md:text-xl text-cacador-text-secondary">
                O Caçador de Produtos é ideal para você que:
              </p>
            </div>

            <div className="grid gap-4 md:gap-6">
              {targetAudience.map((item, index) => (
                <Card key={index} className="bg-cacador-dark-card border border-cacador-pink-light/30 hover:border-cacador-pink-light/50 transition-all duration-300">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                      <p className="text-cacador-text-secondary text-base md:text-lg">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O que o curso vai proporcionar */}
      <section className="py-12 md:py-24 bg-cacador-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                O que o Caçador de Produtos vai proporcionar
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left block */}
              <div className="bg-cacador-pink rounded-2xl p-6 md:p-10 space-y-5 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Clareza e Segurança para Importar
                </h3>
                <ul className="space-y-3 md:space-y-4 text-white text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                    <span>Entenda todo o processo de importação de forma simples e direta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                    <span>Aprenda a avaliar fornecedores chineses com confiança</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                    <span>Saiba exatamente o que fazer para evitar problemas e prejuízos</span>
                  </li>
                </ul>
              </div>

              {/* Right block */}
              <div className="bg-cacador-dark-card rounded-2xl p-6 md:p-10 space-y-5 md:space-y-6 border border-cacador-pink-light/30">
                <h3 className="text-2xl md:text-3xl font-bold text-cacador-yellow">
                  Oportunidades Reais de Lucro
                </h3>
                <ul className="space-y-3 md:space-y-4 text-white text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span>Identifique produtos com alta margem de lucro rapidamente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span>Compare preços entre China e Brasil para encontrar as melhores oportunidades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span>Valide demanda antes de investir em estoque</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-12 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                O que você vai aprender
              </h2>
              <p className="text-lg md:text-xl text-cacador-text-secondary">
                Conhecimento prático e direto ao ponto
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {learningTopics.map((topic, index) => (
                <Card key={index} className="bg-cacador-dark-card border border-cacador-pink-light/30 hover:border-cacador-pink transition-all duration-300 hover:scale-105">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 md:p-4 bg-cacador-pink/20 rounded-full">
                        <topic.icon className="w-6 h-6 md:w-8 md:h-8 text-cacador-pink" />
                      </div>
                      <p className="text-white text-base md:text-lg leading-relaxed">{topic.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Módulos do curso */}
      <section className="py-12 md:py-24 bg-cacador-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Módulos do curso
              </h2>
              <p className="text-lg md:text-xl text-cacador-text-secondary">
                Conteúdo estruturado para você aplicar imediatamente
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              {courseModules.map((module, index) => (
                <Card key={index} className="bg-cacador-dark-card border border-cacador-pink-light/30 hover:border-cacador-pink transition-all duration-300">
                  <CardContent className="p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-cacador-pink/20 rounded-full flex items-center justify-center border-2 border-cacador-pink">
                          <span className="text-xl md:text-2xl font-bold text-cacador-pink">{module.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2 md:space-y-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white">{module.title}</h3>
                        <p className="text-cacador-text-secondary text-base md:text-lg">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem vai te ensinar */}
      <section className="py-12 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Quem vai te ensinar
              </h2>
            </div>

            <Card className="bg-cacador-dark-card border border-cacador-pink-light/30">
              <CardContent className="p-6 md:p-10">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cacador-pink/30 rounded-full blur-2xl" />
                      <img 
                        src={mentorPhoto}
                        alt="Renan Ferreira"
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-cacador-pink"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2 space-y-4 md:space-y-6 text-center md:text-left">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Renan Ferreira</h3>
                      <p className="text-cacador-pink text-lg md:text-xl font-semibold">Especialista em Importação e E-commerce</p>
                    </div>
                    
                    <p className="text-cacador-text-secondary text-base md:text-lg leading-relaxed">
                      Com anos de experiência em importação da China e vendas em marketplaces brasileiros, 
                      Renan ajudou centenas de empreendedores a encontrarem produtos lucrativos e a 
                      construírem negócios sustentáveis através da importação estratégica.
                    </p>

                    <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                      <Badge className="bg-cacador-pink/20 text-cacador-pink border-cacador-pink/30 px-3 py-1 text-sm md:text-base">
                        +5 anos de experiência
                      </Badge>
                      <Badge className="bg-cacador-pink/20 text-cacador-pink border-cacador-pink/30 px-3 py-1 text-sm md:text-base">
                        +1000 alunos
                      </Badge>
                      <Badge className="bg-cacador-pink/20 text-cacador-pink border-cacador-pink/30 px-3 py-1 text-sm md:text-base">
                        Método validado
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 md:py-24 bg-cacador-bg-main">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                O que dizem os alunos
              </h2>
              <p className="text-lg md:text-xl text-cacador-text-secondary">
                Resultados reais de quem aplicou o método
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-cacador-dark-card border border-cacador-pink-light/30 hover:border-cacador-pink transition-all duration-300">
                  <CardContent className="p-5 md:p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-cacador-yellow text-cacador-yellow" />
                      ))}
                    </div>
                    
                    <p className="text-cacador-text-secondary text-base md:text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="pt-3 md:pt-4 border-t border-cacador-pink-light/20">
                      <p className="text-white font-semibold text-base md:text-lg">{testimonial.name}</p>
                      <p className="text-cacador-text-secondary text-sm md:text-base">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-section" className="py-16 md:py-32 bg-gradient-to-br from-cacador-pink/10 via-cacador-bg-alt to-cacador-pink/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,102,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                Comece hoje a caçar produtos lucrativos na China
              </h2>
              <p className="text-lg md:text-xl text-cacador-text-secondary max-w-3xl mx-auto">
                Acesso imediato ao curso completo. Aprenda no seu ritmo e comece a aplicar hoje mesmo.
              </p>
            </div>

            <Card className="bg-cacador-dark-card border-2 border-cacador-pink-light/40 shadow-2xl max-w-md mx-auto">
              <CardContent className="p-6 md:p-8">
                <div className="space-y-5 md:space-y-6">
                  <div className="text-center py-4">
                    <span className="text-5xl md:text-6xl font-bold text-white">R$ 37,90</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                      <span>6 módulos completos</span>
                    </div>
                    <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                      <span>Aula bônus exclusiva</span>
                    </div>
                    <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                      <span>Acesso vitalício</span>
                    </div>
                    <div className="flex items-center gap-2 text-cacador-text-secondary text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-cacador-pink flex-shrink-0" />
                      <span>Certificado de conclusão</span>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full bg-cacador-yellow hover:bg-cacador-yellow/90 text-black font-bold text-base md:text-lg py-6 md:py-7 rounded-lg shadow-lg hover:shadow-cacador-pink/20 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://pay.kiwify.com.br/EaRh3G0', '_blank')}
                  >
                    Quero começar agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-cacador-text-secondary text-center">
                    ✓ Pagamento 100% seguro via Kiwify
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="pt-6 md:pt-8">
              <p className="text-cacador-text-secondary text-base md:text-lg">
                💳 Parcelamento disponível • 🔒 Compra segura • ⚡ Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cacador-bg-main border-t border-cacador-pink-light/20 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <p className="text-cacador-text-secondary text-sm md:text-base">
              © 2024 Caçador de Produtos. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
              <a href="#" className="text-cacador-pink hover:text-cacador-pink-light transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-cacador-pink hover:text-cacador-pink-light transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-cacador-pink hover:text-cacador-pink-light transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CacadorProdutos;