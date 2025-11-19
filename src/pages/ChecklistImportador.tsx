import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Target, TrendingUp, Shield, Package, Search, Users, ArrowRight, Play } from "lucide-react";
import renanFerreira from "@/assets/renan-ferreira.jpg";
const ChecklistImportador = () => {
  const scrollToCTA = () => {
    window.open('https://pay.kiwify.com.br/7Fkvhm7', '_blank');
  };
  const targetAudience = ["Donos de e-commerce que querem aumentar margem de lucro", "Vendedores de Mercado Livre, Shopee, Amazon e Magalu que sentem a margem apertar", "Empresários que querem parar de depender só de distribuidores nacionais", "Quem quer importar da China, mas ainda não tem segurança para escolher produtos"];
  const learningTopics = [{
    icon: Target,
    title: "Impacto da importação no seu negócio",
    description: "Como entender, na prática, o impacto da importação na sua vida e no seu negócio"
  }, {
    icon: Search,
    title: "Sites 'secretos' da China",
    description: "Quais são os sites 'secretos' que os próprios chineses usam para comprar barato"
  }, {
    icon: Shield,
    title: "Fornecedores de confiança",
    description: "Como encontrar e validar fornecedores de confiança no 1688"
  }, {
    icon: TrendingUp,
    title: "Comparação de preços",
    description: "Como comparar preços entre China e Mercado Livre para achar oportunidades de lucro"
  }, {
    icon: Package,
    title: "Validação de demanda",
    description: "Como usar Pipi Ads + 1688 para validar demanda de produtos"
  }, {
    icon: Check,
    title: "Rotina de caça de produtos",
    description: "Como transformar esse conhecimento em uma rotina simples de caça de produtos lucrativos"
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
  }, {
    name: "Gustavo Almeida",
    role: "Vendedor Amazon • RS",
    text: "Aprendi a validar produtos antes de importar. Isso evitou muitos prejuízos e aumentou minha margem."
  }];
  const faqItems = [{
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "O acesso ao curso é vitalício. Você poderá assistir às aulas quantas vezes quiser, no seu ritmo."
  }, {
    question: "Este curso é para quem está começando do zero?",
    answer: "Sim. O curso foi pensado tanto para iniciantes quanto para quem já vende e quer profissionalizar a escolha de produtos."
  }, {
    question: "Preciso já vender em marketplaces para aproveitar o conteúdo?",
    answer: "Não é obrigatório, mas o curso é especialmente útil para quem já tem ou pretende ter operação em marketplaces como Mercado Livre, Shopee, Amazon e Magalu."
  }, {
    question: "Como vou receber o acesso?",
    answer: "Após a confirmação do pagamento, você receberá um e-mail com o link de acesso à área de membros do curso."
  }, {
    question: "O curso ensina a parte prática de pesquisa de produtos?",
    answer: "Sim. O foco do curso é mostrar, na prática, como pesquisar, validar e escolher produtos lucrativos para importar."
  }, {
    question: "Preciso de conhecimento técnico para aplicar?",
    answer: "Não. O curso é totalmente voltado para a prática e não exige conhecimento técnico avançado."
  }, {
    question: "O curso garante que vou ganhar dinheiro?",
    answer: "Não fazemos promessas de faturamento. O curso ensina o método, mas o resultado depende da sua aplicação e dedicação."
  }];
  return <div className="min-h-screen bg-[#02111B]">
      
      {/* Header Sticky */}
      <header className="bg-[#02111B] border-b border-[#5D737E]/20 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-[#FCFCFC] text-xl font-bold">
              Caçador de Produtos
            </div>
            <Button onClick={scrollToCTA} className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] font-semibold px-6 rounded-lg">
              Quero acessar o Caçador de Produtos
            </Button>
          </div>
        </div>
      </header>

      {/* 1. HERO - Dobra Principal */}
      <section className="bg-[#02111B] py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D737E]/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Conteúdo esquerdo */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#5D737E]/20 border border-[#5D737E]/30 text-[#FCFCFC] px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-[#5D737E] rounded-full animate-pulse" />
                Curso online gravado • Acesso pela internet
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FCFCFC] leading-tight">
                Caçador de Produtos: encontre produtos lucrativos na China mesmo começando do zero
              </h1>

              <p className="text-lg md:text-xl text-[#FCFCFC]/80 leading-relaxed">
                Um curso 100% online, direto ao ponto, que mostra como pesquisar, comparar e escolher produtos com potencial real de lucro para vender em marketplaces como Mercado Livre, Shopee, Amazon e Magalu.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5D737E] mt-1 flex-shrink-0" />
                  <p className="text-[#FCFCFC]/90">Método focado em prática, não em teoria complicada</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5D737E] mt-1 flex-shrink-0" />
                  <p className="text-[#FCFCFC]/90">Feito para quem já vende ou quer vender com seriedade em marketplaces</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#5D737E] mt-1 flex-shrink-0" />
                  <p className="text-[#FCFCFC]/90">Conteúdo pensado para reduzir erros na hora de importar da China</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-[#FCFCFC]/70 text-sm mb-2">Investimento</p>
                <p className="text-4xl md:text-5xl font-bold text-[#FCFCFC]">R$ 17,90</p>
              </div>

              <div className="space-y-4 pt-2">
                <Button onClick={scrollToCTA} size="lg" className="w-full md:w-auto bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] text-lg px-10 py-6 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Quero acessar o Caçador de Produtos
                </Button>
                
                <p className="text-sm text-[#FCFCFC]/60">
                  Curso online, acesso pela internet, conteúdo prático e direto ao ponto.
                </p>
              </div>
            </div>

            {/* Imagem direita */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#3F4045]/40 to-[#30292F]/40 rounded-2xl border border-[#5D737E]/20 overflow-hidden shadow-2xl">
                  <img 
                    src={renanFerreira} 
                    alt="Renan Ferreira - Especialista em Importação" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02111B]/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#5D737E]/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BLOCO DE REPETIÇÃO + CTA */}
      <section className="bg-[#3F4045] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FCFCFC] leading-tight">
              Entre agora para o Caçador de Produtos e aprenda a escolher produtos com margem real para vender nos marketplaces
            </h2>
            <p className="text-lg md:text-xl text-[#FCFCFC]/80 leading-relaxed">
              Uma formação 100% prática, sem enrolação, focada em quem quer resultados reais na escolha de produtos para importar.
            </p>
            <Button onClick={scrollToCTA} size="lg" className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] text-lg px-12 py-6 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              Quero acessar o Caçador de Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* 3. O QUE É O CAÇADOR DE PRODUTOS */}
      <section className="bg-[#02111B] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center">
              O que é o Caçador de Produtos?
            </h2>
            
            <div className="space-y-6 text-[#FCFCFC]/80 text-lg leading-relaxed">
              <p>
                O Caçador de Produtos é uma formação prática, 100% online, focada em pesquisa e validação de produtos na China. 
                Não é teoria. Não é enrolação. É um método direto para você aprender a escolher produtos com potencial real de lucro.
              </p>
              <p>
                Ideal tanto para quem já vende em marketplaces (Mercado Livre, Shopee, Amazon, Magalu) e quer aumentar a margem, 
                quanto para quem está estruturando sua operação e não quer errar na escolha dos produtos.
              </p>
              <p>
                Aulas gravadas, organizadas em módulos. Você assiste quando e onde quiser, no seu ritmo, e aplica direto na sua operação.
              </p>
            </div>

            <div className="text-center pt-6">
              <Button onClick={scrollToCTA} className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] px-8 py-5 rounded-lg font-semibold">
                Quero acessar o Caçador de Produtos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARA QUEM É */}
      <section className="bg-[#3F4045] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-12">
            Para quem é o Caçador de Produtos?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {targetAudience.map((item, index) => <Card key={index} className="bg-[#30292F] border-[#5D737E]/20 hover:border-[#5D737E]/40 transition-all">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#5D737E]/20 rounded-lg flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#5D737E]" />
                    </div>
                  </div>
                  <p className="text-[#FCFCFC] text-lg leading-relaxed">{item}</p>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToCTA} className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] px-10 py-5 rounded-lg font-semibold text-lg">
              Sim, este curso é para mim
            </Button>
          </div>
        </div>
      </section>

      {/* 5. QUEM É O ESPECIALISTA */}
      <section className="bg-[#30292F] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-12">
              Quem está por trás do Caçador de Produtos?
            </h2>

            <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-center">
              {/* Foto esquerda */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm aspect-square bg-gradient-to-br from-[#3F4045]/40 to-[#5D737E]/20 rounded-2xl border border-[#5D737E]/20 overflow-hidden shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <Users className="w-24 h-24 text-[#5D737E]/40 mx-auto" />
                      <p className="text-[#FCFCFC]/40 text-sm">
                        Foto do especialista
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Textos direita */}
              <div className="space-y-6 text-[#FCFCFC]/80 text-lg leading-relaxed">
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
                  <Button onClick={scrollToCTA} className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] px-8 py-5 rounded-lg font-semibold">
                    Quero aprender com quem vive isso na prática
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ALGUNS MÓDULOS */}
      <section className="bg-[#02111B] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-12">
            Alguns módulos do Caçador de Produtos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {learningTopics.map((topic, index) => {
            const Icon = topic.icon;
            return <Card key={index} className="bg-[#3F4045] border-[#5D737E]/20 hover:border-[#5D737E]/40 hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#5D737E]/20 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#5D737E]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FCFCFC] mb-3">{topic.title}</h3>
                    <p className="text-[#FCFCFC]/70 leading-relaxed">{topic.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToCTA} className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] px-10 py-5 rounded-lg font-semibold text-lg">
              Quero ver tudo isso por dentro
            </Button>
          </div>
        </div>
      </section>

      {/* 7. CONTEÚDO DETALHADO DAS AULAS */}
      <section className="bg-[#3F4045] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-6">
              O que você recebe ao entrar no Caçador de Produtos
            </h2>
            <p className="text-lg text-[#FCFCFC]/70 text-center mb-12">
              Aulas organizadas e direto ao ponto
            </p>

            <div className="space-y-4">
              {courseModules.map((module, index) => <Card key={index} className="bg-[#30292F] border-[#5D737E]/20 hover:border-[#5D737E]/40 transition-all">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#5D737E] text-[#FCFCFC] rounded-lg flex items-center justify-center font-bold text-lg">
                        {module.number}
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-[#FCFCFC]">{module.title}</h3>
                        <p className="text-[#FCFCFC]/70 leading-relaxed">{module.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROVA SOCIAL */}
      <section className="bg-[#30292F] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-6">
            O que nossos alunos e parceiros dizem
          </h2>
          <p className="text-lg text-[#FCFCFC]/70 text-center mb-12">
            Depoimentos de quem aplicou o método
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-[#3F4045] border-[#5D737E]/20 hover:border-[#5D737E]/40 transition-all">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-[#5D737E] text-xl">★</span>)}
                  </div>
                  <p className="text-[#FCFCFC]/80 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-[#5D737E]/20 pt-4">
                    <p className="font-bold text-[#FCFCFC]">{testimonial.name}</p>
                    <p className="text-sm text-[#FCFCFC]/60">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToCTA} className="bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] px-10 py-5 rounded-lg font-semibold text-lg">
              Quero ter resultados assim também
            </Button>
          </div>
        </div>
      </section>

      {/* 9. COMO FUNCIONA O ACESSO */}
      <section className="bg-[#3F4045] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-12">
              Como funciona o acesso ao curso
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5D737E]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#5D737E]" />
                </div>
                <p className="text-[#FCFCFC]/80 text-lg">Curso 100% online, aulas gravadas</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5D737E]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#5D737E]" />
                </div>
                <p className="text-[#FCFCFC]/80 text-lg">Você assiste quando e onde quiser</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5D737E]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#5D737E]" />
                </div>
                <p className="text-[#FCFCFC]/80 text-lg">Acesso vitalício ao conteúdo</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5D737E]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#5D737E]" />
                </div>
                <p className="text-[#FCFCFC]/80 text-lg">Pagamento em plataforma segura</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#5D737E]/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#5D737E]" />
                </div>
                <p className="text-[#FCFCFC]/80 text-lg">Acesso enviado por e-mail após confirmação do pagamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-[#02111B] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#FCFCFC] text-center mb-12">
            Perguntas frequentes
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-[#3F4045] border border-[#5D737E]/20 rounded-lg px-6 data-[state=open]:border-[#5D737E]/40">
                  <AccordionTrigger className="text-[#FCFCFC] font-semibold hover:text-[#5D737E] text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#FCFCFC]/80 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 11. CTA FINAL */}
      <section className="bg-[#02111B] py-16 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D737E]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FCFCFC] leading-tight">
              Pronto para se tornar um Caçador de Produtos?
            </h2>
            
            <p className="text-lg md:text-xl text-[#FCFCFC]/80 leading-relaxed">
              O Caçador de Produtos foi feito para quem quer importar com mais segurança e escolher produtos com inteligência. 
              É um investimento baixo comparado ao potencial de retorno de uma escolha de produto bem feita.
            </p>

            <div className="py-8">
              <p className="text-[#FCFCFC]/70 text-sm mb-3">Investimento</p>
              <p className="text-5xl md:text-6xl font-bold text-[#FCFCFC] mb-8">R$ 17,90</p>
              
              <Button onClick={scrollToCTA} size="lg" className="w-full md:w-auto bg-[#5D737E] hover:bg-[#5D737E]/90 text-[#FCFCFC] text-xl px-16 py-8 font-bold rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                Quero acessar o Caçador de Produtos
              </Button>
              
              <p className="text-sm text-[#FCFCFC]/60 mt-6">
                Pagamento 100% seguro. Curso online, acesso pela internet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3F4045] py-8 border-t border-[#5D737E]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#FCFCFC]/60">
            © 2024 Caçador de Produtos. Todos os direitos reservados. Este é um produto digital com acesso pela internet.
          </p>
        </div>
      </footer>

    </div>;
};
export default ChecklistImportador;