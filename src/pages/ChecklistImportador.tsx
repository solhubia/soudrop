import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, ShieldCheck, FileText, Users, Calculator } from "lucide-react";

const ChecklistImportador = () => {
  const scrollToCTA = () => {
    window.open('https://pay.hotmart.com/seu-link-aqui', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#111827]">Sua Marca</div>
          <Button 
            onClick={scrollToCTA}
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
          >
            Quero acessar o Caçador de Produtos
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35]/5 to-transparent py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-[#FF6B35]/10 text-[#FF6B35] px-4 py-2 rounded-full text-sm font-semibold mb-2">
                Curso online gravado • Acesso pela internet
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#111827] leading-tight">
                Caçador de Produtos: encontre produtos lucrativos na China mesmo começando do zero
              </h1>
              <p className="text-lg text-[#6B7280]">
                Um curso 100% online, direto ao ponto, que mostra como pesquisar, comparar e escolher produtos com potencial real de lucro para vender em marketplaces como Mercado Livre, Shopee, Amazon e Magalu.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <p className="text-[#111827]">Método prático e direto, sem teoria complicada</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <p className="text-[#111827]">Focado em quem vende em marketplaces e e-commerce</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <p className="text-[#111827]">Reduza erros na hora de importar e escolher produtos</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 border-[#FF6B35] inline-block">
                <p className="text-[#6B7280] text-sm mb-2">Investimento</p>
                <p className="text-4xl font-bold text-[#FF6B35]">R$ 17,90</p>
              </div>

              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="w-full md:w-auto bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-12 py-6"
              >
                Quero acessar o Caçador de Produtos
              </Button>

              <p className="text-sm text-[#6B7280]">
                Produto digital, acesso imediato pela internet
              </p>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#E5E7EB] w-full max-w-md">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/5 rounded-lg flex items-center justify-center">
                  <FileText className="w-24 h-24 text-[#FF6B35]" />
                </div>
                <p className="text-center mt-4 text-[#111827] font-semibold">Caçador de Produtos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que este checklist existe */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-6">
            Por que o Caçador de Produtos pode mudar seu jogo
          </h2>
          <p className="text-lg text-[#6B7280] text-center max-w-3xl mx-auto mb-12">
            Você vende, fatura, mas sente que está escolhendo produtos no escuro? Muitos vendedores perdem tempo e dinheiro porque tentam importar sem método. Este curso mostra o caminho para pesquisar e escolher produtos com potencial real de lucro.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-[#E5E7EB]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-3">Método claro para pesquisar</h3>
                <p className="text-[#6B7280]">
                  Aprenda a usar plataformas como 1688, Alibaba e AliExpress de forma estratégica para encontrar produtos com potencial de lucro real.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E5E7EB]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-3">Validação antes de investir</h3>
                <p className="text-[#6B7280]">
                  Saiba como analisar demanda, concorrência e margem antes de colocar seu dinheiro em um produto que pode não vender.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E5E7EB]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-3">Redução de erros e retrabalho</h3>
                <p className="text-[#6B7280]">
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

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Para quem vende em marketplaces e quer aumentar margem importando produtos lucrativos",
              "Para quem já tentou importar mas não sabe como escolher produtos com potencial real",
              "Para quem quer ter um método claro antes de colocar dinheiro em produto",
              "Para quem sente que pode ganhar mais mas tem medo de errar na escolha de produtos"
            ].map((item, index) => (
              <Card key={index} className="bg-[#F9FAFB] border-[#E5E7EB]">
                <CardContent className="p-6 flex items-start gap-4">
                  <Check className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <p className="text-[#111827] text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você vai receber */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            O que você vai aprender no curso
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8 text-[#FF6B35]" />,
                title: "Como pesquisar produtos lucrativos",
                description: "Método prático para encontrar produtos com potencial real na China usando 1688, Alibaba e AliExpress"
              },
              {
                icon: <Check className="w-8 h-8 text-[#FF6B35]" />,
                title: "Validação de demanda e concorrência",
                description: "Como analisar se um produto tem mercado antes de importar e avaliar a concorrência"
              },
              {
                icon: <Users className="w-8 h-8 text-[#FF6B35]" />,
                title: "Escolha de fornecedores confiáveis",
                description: "O que olhar para não cair em golpes e fechar com fornecedores seguros"
              },
              {
                icon: <Calculator className="w-8 h-8 text-[#FF6B35]" />,
                title: "Cálculo de custos e margem real",
                description: "Todos os custos da importação para você saber sua margem verdadeira antes de comprar"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#FF6B35]" />,
                title: "Erros comuns e como evitá-los",
                description: "O que não fazer na hora de escolher produtos para não perder tempo e dinheiro"
              },
              {
                icon: <FileText className="w-8 h-8 text-[#FF6B35]" />,
                title: "Processo completo de importação",
                description: "Do pedido ao recebimento, todos os passos para importar com segurança"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white border-[#E5E7EB] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">{item.title}</h3>
                  <p className="text-[#6B7280]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona na prática */}
      <section className="py-16 md:py-24 bg-white">
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
                <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{item.title}</h3>
                <p className="text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem criou */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            Quem criou o Caçador de Produtos
          </h2>

          <Card className="max-w-4xl mx-auto bg-white border-[#E5E7EB]">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="w-full aspect-square bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/5 rounded-lg flex items-center justify-center">
                  <Users className="w-20 h-20 text-[#FF6B35]" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#111827]">Nome do Especialista</h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    Com anos de experiência em importação direta da China e pesquisa de produtos lucrativos, ajudei centenas de vendedores de marketplaces como Mercado Livre, Shopee, Amazon e Magalu a encontrarem produtos com potencial real de lucro.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Minha missão é mostrar que é possível escolher produtos de forma estratégica, sem chutes, usando um método claro que qualquer pessoa pode aplicar na sua operação.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Este curso reúne tudo o que aprendi na prática sobre como caçar produtos lucrativos, condensado em aulas diretas e objetivas que você pode aplicar imediatamente no seu negócio.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-12">
            O que dizem os alunos e empreendedores
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos Silva",
                role: "Vendedor Mercado Livre",
                text: "O curso me deu muito mais clareza sobre como pesquisar produtos. Agora sei exatamente o que analisar antes de colocar dinheiro."
              },
              {
                name: "Mariana Costa",
                role: "Lojista Shopee",
                text: "Eu tentava importar no escuro. Com o método do Caçador de Produtos, finalmente consegui escolher produtos que realmente vendem."
              },
              {
                name: "Rafael Oliveira",
                role: "Vendedor Amazon",
                text: "Curso direto e sem enrolação. Me ajudou a evitar produtos furados que poderiam ter custado caro."
              },
              {
                name: "Juliana Martins",
                role: "E-commerce próprio",
                text: "Achei que sabia pesquisar produtos, mas o curso me mostrou vários pontos que eu estava ignorando. Valeu muito a pena."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-[#F9FAFB] border-[#E5E7EB]">
                <CardContent className="p-6">
                  <p className="text-[#6B7280] mb-4 italic">"{item.text}"</p>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-[#F9FAFB] border-2 border-[#FF6B35]">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
                Pronto para se tornar um Caçador de Produtos?
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
                Este é o curso Caçador de Produtos, 100% online, com método claro para você encontrar produtos lucrativos na China. Acesso imediato após o pagamento, investimento baixo.
              </p>

              <div className="bg-white p-6 rounded-lg inline-block mb-8">
                <p className="text-[#6B7280] text-sm mb-2">Investimento</p>
                <p className="text-5xl font-bold text-[#FF6B35]">R$ 17,90</p>
              </div>

              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="w-full md:w-auto bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-xl px-16 py-8 mb-4"
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
