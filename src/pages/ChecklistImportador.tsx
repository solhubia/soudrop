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
            Quero o Checklist do Importador
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF6B35]/5 to-transparent py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-[#111827] leading-tight">
                Checklist do Importador Lucrativo: organize seus passos antes de trazer produtos da China
              </h1>
              <p className="text-lg text-[#6B7280]">
                Um guia simples e direto para você não esquecer nenhum passo importante na hora de importar e evitar erros que custam caro.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <p className="text-[#111827]">Veja em que ordem fazer cada etapa da importação</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <p className="text-[#111827]">Evite erros básicos que podem travar a sua operação</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <p className="text-[#111827]">Saiba o que analisar antes de escolher um produto</p>
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
                Quero o Checklist do Importador
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
                <p className="text-center mt-4 text-[#111827] font-semibold">Checklist do Importador Lucrativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que este checklist existe */}
      <section className="py-16 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center mb-6">
            Por que este checklist é importante para você
          </h2>
          <p className="text-lg text-[#6B7280] text-center max-w-3xl mx-auto mb-12">
            Muitos vendedores perdem tempo e dinheiro porque tentam importar sem uma ordem clara dos passos. O resultado é retrabalho, custos extras e até produtos parados na alfândega.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-[#E5E7EB]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-3">Erros que poderiam ser evitados</h3>
                <p className="text-[#6B7280]">
                  Escolher o produto errado, não validar o fornecedor adequadamente ou calcular mal os custos são falhas que um checklist simples previne.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E5E7EB]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-3">Passos esquecidos que atrasam tudo</h3>
                <p className="text-[#6B7280]">
                  Um documento faltando, uma verificação não feita ou um prazo não acompanhado pode atrasar sua importação em semanas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-[#E5E7EB]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#111827] mb-3">Decisões tomadas no impulso</h3>
                <p className="text-[#6B7280]">
                  Sem um roteiro claro, é fácil tomar decisões rápidas que parecem certas no momento, mas que depois se mostram problemáticas.
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
            Para quem é o Checklist do Importador Lucrativo
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Para quem vende em marketplaces e quer começar a importar com segurança",
              "Para quem já tentou importar, mas se perdeu nos processos",
              "Para quem quer ter clareza do que fazer antes de colocar dinheiro em produto",
              "Para quem sente que pode ganhar mais, mas tem medo de errar nos passos"
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
            O que você encontra dentro do checklist
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8 text-[#FF6B35]" />,
                title: "Lista passo a passo da importação",
                description: "Do planejamento ao pós-venda, todos os passos organizados em ordem"
              },
              {
                icon: <Check className="w-8 h-8 text-[#FF6B35]" />,
                title: "Checklist de análise de produtos",
                description: "Itens essenciais para validar um produto antes de importar"
              },
              {
                icon: <Users className="w-8 h-8 text-[#FF6B35]" />,
                title: "Checklist de fornecedores",
                description: "Pontos para avaliar antes de fechar negócio com alguém"
              },
              {
                icon: <Calculator className="w-8 h-8 text-[#FF6B35]" />,
                title: "Checklist de custos e margens",
                description: "Itens que você não pode esquecer na hora de calcular"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#FF6B35]" />,
                title: "Mini-guia rápido de erros comuns",
                description: "O que evitar logo de cara para não perder tempo e dinheiro"
              },
              {
                icon: <FileText className="w-8 h-8 text-[#FF6B35]" />,
                title: "Material de apoio",
                description: "Templates e referências para facilitar sua organização"
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
            Como funciona na prática
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
                title: "Recebe o acesso",
                description: "O material digital chega no seu e-mail imediatamente após a confirmação"
              },
              {
                step: "03",
                title: "Começa a aplicar",
                description: "Baixa o checklist e começa a organizar sua importação com mais segurança"
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
            Quem está por trás do Checklist do Importador Lucrativo
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
                    Com mais de X anos de experiência em importação direta da China, ajudei centenas de vendedores de marketplaces a estruturarem suas operações com mais segurança e previsibilidade.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Minha missão é simplificar o caminho para outros empreendedores, mostrando que é possível importar sem mistério quando você tem clareza dos passos e sabe o que precisa ser feito em cada etapa.
                  </p>
                  <p className="text-[#6B7280] leading-relaxed">
                    Este checklist reúne tudo o que aprendi na prática, condensado em um material objetivo que você pode usar como guia sempre que precisar.
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
                text: "O checklist me deu muito mais clareza sobre os passos. Agora sei exatamente o que preciso fazer antes de colocar dinheiro em produto."
              },
              {
                name: "Mariana Costa",
                role: "Lojista Shopee",
                text: "Eu tinha tentado importar antes e desisti porque me perdi no processo. Com o checklist, consegui organizar tudo e finalmente fazer minha primeira importação."
              },
              {
                name: "Rafael Oliveira",
                role: "Vendedor Amazon",
                text: "Material direto e sem enrolação. Me ajudou a evitar erros básicos que poderiam ter custado caro."
              },
              {
                name: "Juliana Martins",
                role: "E-commerce próprio",
                text: "Achei que sabia tudo sobre importação, mas o checklist me mostrou vários pontos que eu estava ignorando. Valeu muito a pena."
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
                  Como vou receber o checklist?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Após a confirmação do pagamento, você receberá um e-mail com o link de acesso ao material digital. Todo o conteúdo estará disponível para download imediato.
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
                  Por quanto tempo posso acessar o material?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  O acesso é vitalício. Você pode baixar o material e usar quantas vezes precisar, sem limite de tempo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  É para quem está começando do zero?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Sim, o checklist é ideal tanto para iniciantes quanto para quem já tem experiência. Ele organiza os passos de forma clara, independente do seu nível atual.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Serve para qualquer nicho de produto?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Sim, o checklist cobre os passos fundamentais da importação que se aplicam a qualquer tipo de produto. Os princípios são os mesmos, independente do nicho.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white border border-[#E5E7EB] rounded-lg px-6">
                <AccordionTrigger className="text-[#111827] font-semibold hover:text-[#FF6B35]">
                  Preciso de conhecimento avançado em importação?
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280]">
                  Não. O material foi criado justamente para simplificar o processo e mostrar o que fazer em cada etapa, mesmo que você nunca tenha importado antes.
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
                Pronto para organizar sua importação com mais segurança?
              </h2>
              <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
                Antes de colocar dinheiro em produto, faz todo sentido ter clareza dos passos. Este checklist pode ser o que faltava para você importar com mais confiança e evitar erros que custam caro.
              </p>

              <div className="bg-white p-6 rounded-lg inline-block mb-8">
                <p className="text-[#6B7280] text-sm mb-2">Investimento único</p>
                <p className="text-5xl font-bold text-[#FF6B35]">R$ 17,90</p>
              </div>

              <Button 
                onClick={scrollToCTA}
                size="lg"
                className="w-full md:w-auto bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-xl px-16 py-8 mb-4"
              >
                Quero o Checklist do Importador
              </Button>

              <p className="text-sm text-[#6B7280]">
                Pagamento 100% seguro. Material digital, acesso imediato.
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
