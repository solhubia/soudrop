import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Target, TrendingUp, Shield, Package, Search, Users } from "lucide-react";

const ChecklistImportador = () => {
  const scrollToCTA = () => {
    window.open('https://pay.kiwify.com.br/20tge9P', '_blank');
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
      title: "Impacto da importação no seu negócio",
      description: "Como entender, na prática, o impacto da importação na sua vida e no seu negócio"
    },
    {
      icon: Search,
      title: "Sites 'secretos' da China",
      description: "Quais são os sites 'secretos' que os próprios chineses usam para comprar barato"
    },
    {
      icon: Shield,
      title: "Fornecedores de confiança",
      description: "Como encontrar e validar fornecedores de confiança no 1688"
    },
    {
      icon: TrendingUp,
      title: "Comparação de preços",
      description: "Como comparar preços entre China e Mercado Livre para achar oportunidades de lucro"
    },
    {
      icon: Package,
      title: "Validação de demanda",
      description: "Como usar Pipi Ads + 1688 para validar demanda de produtos"
    },
    {
      icon: Check,
      title: "Rotina de caça de produtos",
      description: "Como transformar esse conhecimento em uma rotina simples de caça de produtos lucrativos"
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
    },
    {
      name: "Gustavo Almeida",
      role: "Vendedor Amazon • RS",
      text: "Aprendi a validar produtos antes de importar. Isso evitou muitos prejuízos e aumentou minha margem."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center">
          <Button 
            onClick={scrollToCTA}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold px-8"
          >
            Quero acessar o Caçador de Produtos
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#02111B] py-20 md:py-32 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D737E]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#5D737E]/20 border border-[#5D737E]/30 text-[#FCFCFC] px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[#5D737E] rounded-full animate-pulse" />
                Curso online gravado • Acesso pela internet
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCFCFC] leading-tight">
                Caçador de Produtos: encontre produtos lucrativos na China mesmo começando do zero
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-[#FCFCFC]/80 leading-relaxed">
                Um curso 100% online, direto ao ponto, que mostra como pesquisar, comparar e escolher produtos com potencial real de lucro para vender em marketplaces como Mercado Livre, Shopee, Amazon e Magalu.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#5D737E]" />
                  </div>
                  <p className="text-[#FCFCFC]/90">Método focado em prática, não em teoria complicada</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#5D737E]" />
                  </div>
                  <p className="text-[#FCFCFC]/90">Pensado para quem vende em marketplaces e quer aumentar a margem</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 text-[#5D737E]" />
                  </div>
                  <p className="text-[#FCFCFC]/90">Conteúdo para reduzir erros na hora de escolher produtos para importar</p>
                </div>
              </div>

              {/* Price */}
              <div className="pt-4">
                <p className="text-[#FCFCFC]/70 text-sm mb-2">Investimento</p>
                <p className="text-4xl md:text-5xl font-bold text-[#FCFCFC]">R$ 27,90</p>
              </div>

              {/* CTA Button */}
              <div className="space-y-4 pt-2">
                <Button
                  onClick={scrollToCTA}
                  size="lg"
                  className="w-full md:w-auto bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] text-lg px-10 py-6 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Quero acessar o Caçador de Produtos
                </Button>
                
                <p className="text-sm text-[#FCFCFC]/60">
                  Curso online, acesso pela internet, conteúdo prático e direto ao ponto.
                </p>
              </div>
            </div>

            {/* Right side - Image placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                {/* Image container with subtle border */}
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#3F4045]/30 to-[#30292F]/30 rounded-2xl border border-[#5D737E]/20 overflow-hidden shadow-2xl">
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <Package className="w-24 h-24 text-[#5D737E]/40 mx-auto" />
                      <p className="text-[#FCFCFC]/40 text-sm">
                        Espaço para imagem do especialista, mockup ou foto de importação
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02111B]/40 via-transparent to-transparent" />
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#5D737E]/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Por que o curso é importante */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Por que o Caçador de Produtos pode mudar seu jogo
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed">
              Você vende, fatura, mas sente que está escolhendo produtos no escuro? Muitos vendedores perdem tempo e dinheiro porque tentam importar sem método. Este curso mostra o caminho para pesquisar e escolher produtos com potencial real de lucro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Método claro para pesquisar</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Aprenda a usar plataformas como 1688, Alibaba e AliExpress de forma estratégica para encontrar produtos com potencial de lucro real.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Validação antes de investir</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Saiba como analisar demanda, concorrência e margem antes de colocar seu dinheiro em um produto que pode não vender.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#FF6B35]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Redução de erros e retrabalho</h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Evite escolher produtos errados, fornecedores ruins ou calcular mal os custos seguindo um processo testado na prática.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Para quem é o Caçador de Produtos
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {targetAudience.map((item, index) => (
              <Card key={index} className="bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#FF6B35]/30 transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <p className="text-[#111827] text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            O que você vai aprender por dentro do curso
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-white border-[#E5E7EB] hover:shadow-lg hover:border-[#FF6B35]/30 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] mb-2">{item.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Módulos do curso */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-6">
            O que você recebe ao entrar no Caçador de Produtos
          </h2>
          <p className="text-lg text-[#6B7280] text-center max-w-3xl mx-auto mb-12">
            Aulas online gravadas, organizadas em módulos práticos e diretos ao ponto
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courseModules.map((module, index) => (
              <Card key={index} className="bg-[#F9FAFB] border-[#E5E7EB] hover:shadow-lg hover:border-[#FF6B35]/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {module.number}
                    </div>
                    <h3 className="text-lg font-bold text-[#111827] flex-1">{module.title}</h3>
                  </div>
                  <p className="text-[#6B7280] leading-relaxed">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona o acesso */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Como funciona o acesso ao curso
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Você faz o pagamento",
                description: "Processo 100% seguro através de plataforma de pagamentos confiável"
              },
              {
                step: "02",
                title: "Recebe o acesso imediato",
                description: "O link de acesso ao curso online chega no seu e-mail logo após a confirmação do pagamento"
              },
              {
                step: "03",
                title: "Assiste e aplica",
                description: "Acessa as aulas gravadas quando quiser e começa a aplicar o método na sua operação"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem está por trás */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Quem está por trás do Caçador de Produtos
          </h2>

          <Card className="max-w-5xl mx-auto bg-[#F9FAFB] border-[#E5E7EB] shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[250px_1fr] gap-8 items-center">
                <div className="w-full aspect-square bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/5 rounded-xl flex items-center justify-center shadow-md">
                  <Users className="w-24 h-24 text-[#FF6B35]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#111827]">Renan Ferreira</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Com anos de experiência em importação direta da China e pesquisa de produtos lucrativos para marketplaces, ajudei centenas de vendedores de Mercado Livre, Shopee, Amazon e Magalu a encontrarem produtos com potencial real de lucro.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Minha missão é mostrar que é possível escolher produtos de forma estratégica, sem chutes, usando um método claro que qualquer pessoa pode aplicar na sua operação de e-commerce ou marketplace.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Este curso reúne tudo o que aprendi na prática sobre como caçar produtos lucrativos na China, condensado em aulas diretas e objetivas que você pode aplicar imediatamente no seu negócio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Prova social */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-6">
            O que dizem os alunos e empreendedores
          </h2>
          <p className="text-lg text-[#6B7280] text-center max-w-3xl mx-auto mb-12">
            Depoimentos reais de quem aplicou o método e viu resultados práticos
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((item, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FF6B35]">★</span>
                    ))}
                  </div>
                  <p className="text-[#6B7280] mb-4 italic leading-relaxed">"{item.text}"</p>
                  <div className="border-t border-[#E5E7EB] pt-4">
                    <p className="font-bold text-[#111827]">{item.name}</p>
                    <p className="text-sm text-[#6B7280]">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Perguntas frequentes
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Como vou receber o curso?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao curso online. As aulas gravadas estarão disponíveis para assistir imediatamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Em quanto tempo terei acesso?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  O acesso é imediato após a confirmação do pagamento. Você receberá o e-mail com as instruções em poucos minutos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Por quanto tempo posso acessar o curso?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  O acesso é vitalício. Você pode assistir as aulas quantas vezes quiser, sem limite de tempo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  É para quem está começando do zero?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Sim, o curso é ideal tanto para iniciantes quanto para quem já tem experiência. O método é ensinado de forma clara, independente do seu nível atual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Serve para qualquer nicho de produto?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Sim, o método de pesquisa e validação de produtos se aplica a qualquer tipo de produto. Os princípios são os mesmos, independente do nicho.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Preciso já vender em marketplace para aproveitar?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Não é obrigatório, mas o curso é especialmente útil para quem já vende (ou pretende vender) em marketplaces como Mercado Livre, Shopee, Amazon, Magalu, ou tem e-commerce próprio e quer aumentar margem importando.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta-section" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-[#FF6B35]/5 to-transparent border-2 border-[#FF6B35] shadow-2xl">
            <CardContent className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#111827] mb-6">
                Pronto para se tornar um Caçador de Produtos?
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 max-w-3xl mx-auto leading-relaxed">
                Este é o curso Caçador de Produtos, 100% online, focado em ajudar donos de e-commerce e vendedores de marketplaces a escolher produtos com mais segurança. Método claro para você encontrar produtos lucrativos na China. Acesso imediato após o pagamento.
              </p>

              <div className="bg-white p-8 rounded-xl inline-block mb-8 border-2 border-[#FF6B35] shadow-lg">
                <p className="text-[#6B7280] text-sm mb-2">Por apenas</p>
                <p className="text-6xl font-bold text-[#FF6B35]">R$ 17,90</p>
              </div>

              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="w-full md:w-auto bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-xl px-20 py-8 mb-6 font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Quero acessar o Caçador de Produtos
              </Button>

              <p className="text-sm text-[#6B7280]">
                Pagamento 100% seguro. Curso online gravado, acesso imediato.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#6B7280]">
            © 2024 Todos os direitos reservados. Este é um produto digital com acesso imediato.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChecklistImportador;
