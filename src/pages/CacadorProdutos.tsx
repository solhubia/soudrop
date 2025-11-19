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
  const targetAudience = ["Para quem vende em marketplaces e sente que a margem está cada vez menor", "Para quem quer parar de depender apenas de distribuidores nacionais", "Para quem tem vontade de importar da China, mas não sabe por onde começar", "Para quem não quer perder dinheiro escolhendo produtos errados", "Para quem quer ter um processo claro para analisar oportunidades e produtos"];
  const learningTopics = [{
    icon: Target,
    text: "Como entender, na prática, o impacto da importação na sua vida e no seu negócio"
  }, {
    icon: Search,
    text: "Quais são os sites 'secretos' que os próprios chineses usam para comprar barato"
  }, {
    icon: Shield,
    text: "Como encontrar e validar fornecedores de confiança no 1688"
  }, {
    icon: TrendingUp,
    text: "Como comparar preços entre China e Mercado Livre para achar oportunidades de lucro"
  }, {
    icon: Package,
    text: "Como usar Pipi Ads + 1688 para validar demanda de produtos"
  }, {
    icon: CheckCircle2,
    text: "Como transformar esse conhecimento em uma rotina simples de caça de produtos lucrativos"
  }];
  const courseModules = [{
    number: "01",
    title: "Bem-vindo – Quem sou eu e como a importação mudou minha vida",
    description: "Entenda a visão geral do curso e a mentalidade correta para importar com segurança e lucro."
  }, {
    number: "02",
    title: "Os sites 'secretos' que os próprios chineses usam para comprar barato",
    description: "Descubra plataformas usadas pelos chineses para encontrar preços realmente competitivos."
  }, {
    number: "03",
    title: "Como achar um fornecedor de confiança no 1688",
    description: "Aprenda critérios práticos para analisar fornecedores e reduzir riscos na importação."
  }, {
    number: "04",
    title: "Comparando preços e encontrando oportunidades no Mercado Livre",
    description: "Compare preço de compra x preço de venda real, identificando produtos com boa margem."
  }, {
    number: "05",
    title: "Bônus – Pipi Ads + 1688",
    description: "Aula bônus mostrando como usar Pipi Ads junto com 1688 para validar produtos e demanda."
  }, {
    number: "06",
    title: "Encerramento e próximos passos",
    description: "Orientações finais para você continuar evoluindo como um verdadeiro caçador de produtos."
  }];
  const testimonials = [{
    name: "Carlos Mendes",
    role: "Vendedor Mercado Livre • SP",
    text: "Consegui encontrar melhores produtos e evitar várias furadas. O curso é direto ao ponto e muito prático."
  }, {
    name: "Patricia Silva",
    role: "Lojista Shopee • RJ",
    text: "Ganhei muito mais confiança na escolha de produtos para importar. Vale cada centavo do investimento."
  }, {
    name: "Felipe Costa",
    role: "Empreendedor Digital • MG",
    text: "O método de comparação de preços me abriu os olhos para oportunidades que eu nunca tinha visto antes."
  }];
  return <div className="min-h-screen bg-cacador-bg-main overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cacador-bg-alt/95 backdrop-blur-sm border-b border-cacador-pink-light/20">
        <div className="container mx-auto px-4 py-4 flex justify-center" />
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-40 pb-12 md:pb-24 relative overflow-hidden bg-gradient-cacador-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-cacador-pink/5 via-transparent to-cacador-pink/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="space-y-6 md:space-y-8 w-full">
                <div>
                  <Badge className="mb-4 md:mb-6 bg-cacador-pink text-white border-none px-4 py-2 text-sm">
                    Curso 100% Online
                  </Badge>
                  <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    Caçador de Produtos
                  </h1>
                  <p className="text-lg md:text-2xl text-cacador-text-secondary leading-relaxed">
                    Aprenda a encontrar produtos na China com margem de lucro real, sem depender de "gurus" e sem cair em furadas.
                  </p>
                </div>

                <div className="space-y-3 md:space-y-4">
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
                      <div>
                        <p className="text-cacador-text-secondary text-sm mb-2">Oferta especial por tempo limitado</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl md:text-5xl font-bold text-white">R$ 27,90                </span>
                          <span className="text-lg md:text-xl text-cacador-text-secondary line-through">R$ 297</span>
                        </div>
                        <p className="text-cacador-pink text-sm mt-2 font-semibold">67% de desconto</p>
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
                        🔒 Pagamento 100% seguro
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-cacador-bg-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Para quem é o Caçador de Produtos?</h2>
              <p className="text-lg text-cacador-text-secondary">Se você se encaixa em algum desses perfis, este curso foi feito para você</p>
            </div>
            <div className="space-y-4">
              {targetAudience.map((item, index) => <div key={index} className="flex items-start gap-4 p-6 bg-cacador-dark-card rounded-xl border border-cacador-pink-light/20 hover:border-cacador-pink-light/40 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                  <p className="text-lg text-cacador-text-primary font-medium">{item}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: O que o Caçador de Produtos vai proporcionar */}
      <section className="py-16 md:py-24 bg-cacador-bg-main">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bloco Rosa */}
              <Card className="bg-cacador-pink border-none shadow-cacador-pink rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-12 space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    O que você encontra dentro do Caçador de Produtos
                  </h2>
                  <div className="space-y-4">
                    {["Passo a passo para pesquisar produtos na China com foco em lucro", "Aulas mostrando onde encontrar produtos que os próprios chineses compram barato", "Método para avaliar fornecedores no 1688 com mais segurança", "Comparação prática entre preço na China e preço nos marketplaces brasileiros", "Estratégias para montar uma lista de produtos priorizados para testar"].map((item, index) => <div key={index} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                        <p className="text-white text-lg leading-relaxed">{item}</p>
                      </div>)}
                  </div>
                </CardContent>
              </Card>

              {/* Bloco Escuro */}
              <Card className="bg-cacador-dark-card border border-cacador-pink-light/20 rounded-3xl overflow-hidden">
                <CardContent className="p-8 md:p-12 space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-cacador-pink leading-tight">
                    Resultados que o curso pode gerar para o seu negócio
                  </h2>
                  <p className="text-white text-lg leading-relaxed">
                    Depois de aplicar o que você aprende no Caçador de Produtos, você passa a ter muito mais clareza sobre o que vale a pena testar, reduz o risco de errar na escolha dos produtos e começa a enxergar oportunidades que antes passavam despercebidas.
                  </p>
                  <div className="space-y-4">
                    {["Mais segurança na hora de decidir onde investir seu dinheiro", "Menos chances de trazer produtos sem margem ou sem demanda", "Mais velocidade para encontrar novas oportunidades de produtos", "Base sólida para dar os próximos passos na importação com consciência"].map((item, index) => <div key={index} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-cacador-pink-light flex-shrink-0 mt-1" />
                        <p className="text-white text-lg leading-relaxed">{item}</p>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Botão CTA abaixo dos blocos */}
            <div className="mt-12 text-center">
              <Button onClick={scrollToCTA} className="h-16 px-12 text-xl font-bold bg-cacador-yellow hover:bg-cacador-yellow/90 hover:shadow-[0_0_30px_rgba(255,214,0,0.4)] text-black shadow-cacador-cta rounded-2xl transition-all">
                Quero ter acesso ao Caçador de Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">O que você vai aprender por dentro do curso</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningTopics.map((topic, index) => {
              const Icon = topic.icon;
              return <Card key={index} className="bg-cacador-dark-card border-cacador-pink-light/20 hover:border-cacador-pink-light/40 transition-all">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-cacador-pink flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-cacador-text-secondary leading-relaxed">{topic.text}</p>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Módulos e aulas */}
      <section className="py-16 md:py-24 bg-cacador-bg-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Módulos e aulas – O que você vai aprender</h2>
              <p className="text-lg text-cacador-text-secondary">Conteúdo estruturado e prático para você aplicar imediatamente</p>
            </div>
            <div className="space-y-4">
              {courseModules.map((module, index) => <Card key={index} className="bg-cacador-dark-card border-cacador-pink-light/20 hover:border-cacador-pink-light/40 transition-all overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-6 p-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-cacador-pink flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{module.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start gap-3">
                          <PlayCircle className="w-5 h-5 text-cacador-pink-light flex-shrink-0 mt-1" />
                          <h3 className="text-lg font-semibold text-cacador-text-primary leading-tight">{module.title}</h3>
                        </div>
                        <p className="text-cacador-text-secondary leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é o especialista */}
      <section className="py-16 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">Quem está por trás do Caçador de Produtos</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cacador-pink/20 to-cacador-pink/5 blur-2xl rounded-full" />
                  <img src={mentorPhoto} alt="Renan Ferreira" className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-cacador-pink-light/30 shadow-2xl" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-cacador-text-primary">Renan Ferreira</h3>
                <div className="space-y-4 text-cacador-text-secondary text-lg leading-relaxed">
                  <p>Empresário e importador há mais de 10 anos, com experiência direta dentro de fábricas e escritórios na China. Já importei milhares de produtos e hoje ensino, de forma prática, como qualquer pessoa pode fazer o mesmo.</p>
                  <p>Trabalho diariamente com vendas em marketplaces como Mercado Livre, Shopee, Amazon e Magalu, utilizando a importação como estratégia principal para aumentar margem de lucro e competitividade.</p>
                  <p>Ao longo desses anos, já ajudei centenas de vendedores a estruturarem suas operações de importação, encontrarem produtos campeões e aumentarem seus lucros de forma consistente e segura.</p>
                </div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span className="text-cacador-text-primary font-medium text-lg">Mais de 10 anos de experiência com importação da China</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span className="text-cacador-text-primary font-medium text-lg">Milhares de produtos importados diretamente de fábricas chinesas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cacador-pink flex-shrink-0 mt-1" />
                    <span className="text-cacador-text-primary font-medium text-lg">Vendedor ativo em Mercado Livre, Shopee, Amazon e Magalu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-cacador-bg-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">O que dizem os alunos do Caçador de Produtos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => <Card key={index} className="bg-cacador-dark-card border-cacador-pink-light/20 hover:border-cacador-pink-light/40 transition-all">
                  <CardContent className="p-6 space-y-4">
                    <Star className="w-6 h-6 text-cacador-yellow" />
                    <p className="text-cacador-text-secondary leading-relaxed">{testimonial.text}</p>
                    <div className="text-sm">
                      <p className="font-semibold text-cacador-text-primary">{testimonial.name}</p>
                      <p className="text-cacador-text-secondary">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Ainda com dúvidas? <span className="text-cacador-pink">Aproveite agora!</span>
            </h2>
            <p className="text-lg text-cacador-text-secondary mb-12">
              O Caçador de Produtos é o método mais rápido e prático para você começar a importar da China e encontrar produtos lucrativos para vender nos marketplaces.
            </p>
            <Button onClick={scrollToCTA} className="h-16 px-12 text-xl font-bold bg-cacador-yellow hover:bg-cacador-yellow/90 hover:shadow-[0_0_30px_rgba(255,214,0,0.4)] text-black shadow-cacador-cta rounded-2xl transition-all">
              Quero ter acesso ao Caçador de Produtos
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 bg-cacador-bg-alt">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold text-white text-center mb-8 md:mb-16 px-2">
              Para quem é o <span className="text-cacador-pink">Caçador de Produtos</span>?
            </h2>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
              {targetAudience.map((text, index) => <Card key={index} className="bg-cacador-dark-card border border-cacador-pink-light/30 hover:border-cacador-pink/50 transition-all duration-300">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="bg-cacador-pink/20 p-2 rounded-lg flex-shrink-0">
                        <Target className="w-5 h-5 md:w-6 md:h-6 text-cacador-pink" />
                      </div>
                      <p className="text-cacador-text-secondary text-base md:text-lg leading-relaxed">{text}</p>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-cacador-bg-alt border-t border-cacador-pink-light/20 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-cacador-text-secondary text-sm md:text-base">
              © 2024 Caçador de Produtos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default CacadorProdutos;