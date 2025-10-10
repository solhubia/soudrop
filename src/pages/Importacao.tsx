import { Ship, Globe, TrendingDown, CheckCircle2, Clock, Shield, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Importacao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Ship className="w-4 h-4" />
              <span className="text-sm font-semibold">Importação Simplificada</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Importe da China com
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Total Facilidade</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Deixe toda a complexidade da importação conosco. Encontramos os melhores produtos, negociamos preços e cuidamos de toda a logística para você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" className="text-lg px-8 group" asChild>
                <a href="https://4k384ufgv64.typeform.com/to/vTnWbUQI" target="_blank" rel="noopener noreferrer">
                  Começar a Importar
                  <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="text-lg px-8">
                Ver Como Funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Por que importar conosco?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Preços Imbatíveis",
                  description: "Acesso direto a fábricas chinesas com preços até 70% mais baratos que no Brasil"
                },
                {
                  icon: Clock,
                  title: "Economize Tempo",
                  description: "Não perca tempo com burocracia. Cuidamos de toda a documentação e logística"
                },
                {
                  icon: Shield,
                  title: "Processo Seguro",
                  description: "Garantia total no processo. Seu investimento está protegido do início ao fim"
                },
                {
                  icon: Globe,
                  title: "Acesso Global",
                  description: "Milhares de fornecedores verificados prontos para atender suas necessidades"
                },
                {
                  icon: Package,
                  title: "Controle de Qualidade",
                  description: "Inspeção rigorosa de todos os produtos antes do envio para o Brasil"
                },
                {
                  icon: Zap,
                  title: "Suporte Total",
                  description: "Equipe especializada te acompanha em cada etapa do processo"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Como funciona o processo
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Escolha seus produtos",
                  description: "Diga o que precisa ou escolha entre milhares de produtos disponíveis no nosso catálogo"
                },
                {
                  step: "02",
                  title: "Nós negociamos por você",
                  description: "Nossa equipe negocia os melhores preços e condições diretamente com as fábricas"
                },
                {
                  step: "03",
                  title: "Cuidamos da logística",
                  description: "Gerenciamos todo o transporte, desembaraço aduaneiro e entrega até você"
                },
                {
                  step: "04",
                  title: "Receba seus produtos",
                  description: "Produtos chegam com segurança e você começa a lucrar"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 items-start bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-black text-xl">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O que está incluído
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Busca e seleção de fornecedores",
                "Negociação de preços e condições",
                "Controle de qualidade dos produtos",
                "Gestão completa de documentação",
                "Transporte internacional",
                "Desembaraço aduaneiro",
                "Entrega no Brasil",
                "Suporte durante todo o processo"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-2xl border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar a importar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Preencha o formulário e nossa equipe entrará em contato para dar início ao seu projeto de importação
            </p>
            <Button size="xl" className="text-lg px-12" asChild>
              <a href="https://4k384ufgv64.typeform.com/to/vTnWbUQI" target="_blank" rel="noopener noreferrer">
                Solicitar Importação Agora
                <Ship className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2025 Soudrop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Importacao;
