import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Target, TrendingUp, Users, Briefcase, Calculator, GraduationCap, Award, Shield } from "lucide-react";
import renanPhoto from "@/assets/renan-ferreira.jpg";
import soudropLogo from "@/assets/soudrop-logo-oficial.png";

const SoudropElite = () => {
  const handleCTA = () => {
    window.open("https://pay.hotmart.com/example", "_blank");
  };

  const pilares = [
    {
      icon: TrendingUp,
      title: "Estrutura para FULL e FLEX",
      description: "Direção estratégica para operar nos modelos Full e Flex. Como usar essas modalidades com inteligência para escalar vendas sem virar refém da logística. Educação e estratégia, não promessa operacional."
    },
    {
      icon: Award,
      title: "0 Taxa de Gestão de Vendas",
      description: "Não cobro taxa de gestão separada. O programa inclui orientação de gestão de vendas. Aqui, a gestão entra como parte da formação, não como mensalidade eterna."
    },
    {
      icon: Target,
      title: "Gestão de Vendas",
      description: "Frameworks sobre mix de produtos, precificação prática, giro de estoque, análise de anúncios e campanhas. Faça o aluno enxergar o que dá dinheiro e o que trava o caixa."
    },
    {
      icon: Briefcase,
      title: "Gestão de Negócio",
      description: "Mentalidade de dono. Organização de rotina, processos e indicadores. Saia do modo 'apagar incêndio' e entre no modo 'construir algo escalável'. Ferramentas simples para clareza de decisão."
    },
    {
      icon: Calculator,
      title: "Contabilidade e Estrutura Empresarial",
      description: "Entendimento de CNPJ, regime tributário adequado, organização fiscal. Educação contábil aplicada para você parar de ser refém da contabilidade e conversar melhor com seu contador."
    },
    {
      icon: GraduationCap,
      title: "Educação Premium e Acompanhamento",
      description: "Aulas gravadas + encontros ao vivo. Espaço para dúvidas estratégicas. Materiais de apoio completos. Tudo focado em transformar o dono no gestor do próprio negócio."
    }
  ];

  const paraQuemE = [
    "Já vende (ou quer vender) com importação, marketplaces ou e-commerce",
    "Sente que o problema não é mais só produto, é gestão",
    "Está cansado de não saber se está realmente ganhando dinheiro",
    "Faz tudo sozinho, na correria, e sente que o negócio não se sustenta assim",
    "Quer parar de ser 'eu-presa' e estruturar uma empresa com visão de longo prazo"
  ];

  const bonus = [
    {
      icon: Target,
      title: "Modelo de Painel de Indicadores",
      description: "Tenha visibilidade total do seu negócio"
    },
    {
      icon: Calculator,
      title: "Roteiro para Conversa com Contador",
      description: "Saiba exatamente o que perguntar e cobrar"
    },
    {
      icon: TrendingUp,
      title: "Modelo de Estrutura de Custos",
      description: "Entenda sua margem real de lucro"
    },
    {
      icon: Crown,
      title: "Checklist de Migração",
      description: "De eu-presa para empresa de verdade"
    }
  ];

  return (
    <div className="min-h-screen bg-elite-black text-elite-white">
      {/* Hero Premium */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-elite-bg px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(45_100%_51%_/_0.1),_transparent_50%)]" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src={soudropLogo} alt="SouDrop" className="h-16 opacity-90" />
          </div>
          
          <div className="mb-6 inline-flex items-center gap-2 px-6 py-2 border border-elite-gold/30 rounded-full bg-elite-gold/5">
            <Crown className="w-5 h-5 text-elite-gold" />
            <span className="text-elite-gold text-sm font-medium uppercase tracking-wider">Programa Elite</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            De <span className="text-elite-gold">Eu-presa</span><br />para <span className="text-elite-gold">Empresa</span>
          </h1>

          <p className="text-xl md:text-2xl text-elite-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Você não precisa de mais tarefa.<br />
            Você precisa de <span className="text-elite-gold font-semibold">direção, gestão e estrutura.</span>
          </p>

          <div className="mb-12">
            <img 
              src={renanPhoto} 
              alt="Renan Ferreira" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-elite-gold shadow-elite-gold-strong"
            />
            <p className="mt-4 text-elite-white/60 text-sm">Com Renan Ferreira</p>
          </div>

          <Button 
            onClick={handleCTA}
            className="bg-gradient-elite-gold hover:opacity-90 text-elite-black font-bold text-lg px-12 py-7 rounded-xl shadow-elite-gold-strong transition-all hover:scale-105"
          >
            QUERO PARAR DE SER "EU-PRESA"
          </Button>

          <p className="mt-6 text-elite-white/50 text-sm">
            Vagas limitadas • Formação exclusiva
          </p>
        </div>
      </section>

      {/* O que é o programa */}
      <section className="py-20 px-6 bg-elite-black border-t border-elite-gold/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforme sua Operação em <span className="text-elite-gold">Negócio Real</span>
          </h2>
          <p className="text-xl text-elite-white/70 leading-relaxed max-w-3xl mx-auto">
            Este não é mais um curso de produto. É um programa de <span className="text-elite-gold font-semibold">formação empresarial</span> 
            focado em gestão, organização e estrutura para você construir um negócio que escala, 
            não uma operação que te escraviza.
          </p>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 px-6 bg-gradient-elite-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Este Programa é <span className="text-elite-gold">Para Você</span> Se:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {paraQuemE.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-elite-black/50 border border-elite-gold/20 rounded-xl hover:border-elite-gold/40 transition-all"
              >
                <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                <p className="text-elite-white/90 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares do Programa */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Os 6 Pilares da <span className="text-elite-gold">Formação Elite</span>
          </h2>
          <p className="text-center text-elite-white/60 mb-16 text-lg">
            Educação, estratégia e direção para estruturar seu negócio
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <Card key={index} className="bg-elite-black border-2 border-elite-gold/20 hover:border-elite-gold/50 transition-all hover:shadow-elite-gold">
                  <CardContent className="p-8">
                    <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-elite-gold flex items-center justify-center">
                      <Icon className="w-8 h-8 text-elite-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-elite-white mb-4">{pilar.title}</h3>
                    <p className="text-elite-white/70 leading-relaxed">{pilar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformação */}
      <section className="py-20 px-6 bg-gradient-elite-bg border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-16 h-16 text-elite-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            A Transformação que Você Vai Viver
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-elite-black/50 border border-red-500/30 rounded-xl">
              <p className="text-red-400 font-bold mb-4 text-lg">❌ ANTES (Eu-presa)</p>
              <ul className="space-y-3 text-elite-white/70">
                <li>• Apagando incêndios todo dia</li>
                <li>• Sem saber se está lucrando</li>
                <li>• Fazendo tudo sozinho</li>
                <li>• Refém da operação</li>
                <li>• Sem clareza de direção</li>
              </ul>
            </div>
            <div className="p-8 bg-elite-gold/10 border border-elite-gold/50 rounded-xl">
              <p className="text-elite-gold font-bold mb-4 text-lg">✓ DEPOIS (Empresa)</p>
              <ul className="space-y-3 text-elite-white/90">
                <li>• Visão clara de números</li>
                <li>• Gestão de vendas estruturada</li>
                <li>• Processos organizados</li>
                <li>• Negócio escalável</li>
                <li>• Dono com mentalidade empresarial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção do Mentor */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={renanPhoto} 
                alt="Renan Ferreira" 
                className="w-full rounded-2xl border-4 border-elite-gold/30 shadow-elite-gold"
              />
            </div>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-elite-gold/30 rounded-full bg-elite-gold/5">
                <Crown className="w-4 h-4 text-elite-gold" />
                <span className="text-elite-gold text-sm font-medium uppercase tracking-wider">Mentor Elite</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Renan Ferreira
              </h2>
              <p className="text-xl text-elite-gold mb-6 font-semibold">
                Mentor em Importação, Operação e Gestão de Negócios
              </p>
              
              <div className="space-y-4 text-elite-white/80 leading-relaxed">
                <p>
                  Há anos atuo com <span className="text-elite-gold font-semibold">importação direta da China</span>, 
                  lidando com fábricas, fornecedores, containers e toda a operação para trazer produtos do outro lado do mundo.
                </p>
                <p>
                  Além disso, tenho experiência prática operando e escalando vendas em 
                  <span className="text-elite-gold font-semibold"> Mercado Livre, Shopee, Amazon e Magalu</span>.
                </p>
                <p className="text-elite-white font-semibold text-lg">
                  Hoje, meu foco neste programa é formar empresários de verdade:
                </p>
                <p>
                  Pessoas que entendem números, sabem gerir equipes, estruturam processos e 
                  <span className="text-elite-gold font-semibold"> constroem negócios que podem crescer</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acesso Exclusivo */}
      <section className="py-20 px-6 bg-gradient-elite-bg">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 text-elite-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Programa de Formação <span className="text-elite-gold">Exclusivo</span>
          </h2>
          <div className="space-y-4 text-xl text-elite-white/70 leading-relaxed">
            <p>Vagas limitadas</p>
            <p>Formação em gestão para poucos</p>
            <p className="text-elite-gold font-semibold">
              Seleção de pessoas dispostas a tratar o negócio como empresa
            </p>
          </div>
          <div className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-elite-gold/10 border-2 border-elite-gold rounded-xl">
            <Crown className="w-8 h-8 text-elite-gold" />
            <span className="text-elite-gold font-bold text-xl uppercase tracking-wide">Acesso Master</span>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Bônus <span className="text-elite-gold">Exclusivos</span>
          </h2>
          <p className="text-center text-elite-white/60 mb-16 text-lg">
            Ferramentas práticas para acelerar sua transformação
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonus.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-gradient-elite-gold border-0 text-elite-black hover:scale-105 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 w-14 h-14 rounded-full bg-elite-black/10 flex items-center justify-center mx-auto">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-elite-black/70">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posicionamento / Prova */}
      <section className="py-20 px-6 bg-gradient-elite-bg border-y border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Números que Comprovam a <span className="text-elite-gold">Experiência</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-elite-black/50 border border-elite-gold/20 rounded-xl">
              <Users className="w-12 h-12 text-elite-gold mx-auto mb-4" />
              <p className="text-4xl font-bold text-elite-gold mb-2">500+</p>
              <p className="text-elite-white/60">Alunos Formados</p>
            </div>
            <div className="p-8 bg-elite-black/50 border border-elite-gold/20 rounded-xl">
              <TrendingUp className="w-12 h-12 text-elite-gold mx-auto mb-4" />
              <p className="text-4xl font-bold text-elite-gold mb-2">5+ Anos</p>
              <p className="text-elite-white/60">Atuando com Importação</p>
            </div>
            <div className="p-8 bg-elite-black/50 border border-elite-gold/20 rounded-xl">
              <Award className="w-12 h-12 text-elite-gold mx-auto mb-4" />
              <p className="text-4xl font-bold text-elite-gold mb-2">SouDrop</p>
              <p className="text-elite-white/60">Empresa de Tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-20 px-6 bg-elite-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Invista na Sua <span className="text-elite-gold">Formação Empresarial</span>
            </h2>
            <p className="text-xl text-elite-white/60">
              Programa completo de gestão e estruturação de negócio
            </p>
          </div>

          <Card className="bg-gradient-elite-bg border-4 border-elite-gold/50 shadow-elite-gold-strong">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-elite-gold/10 border border-elite-gold/30 rounded-full mb-6">
                  <Crown className="w-5 h-5 text-elite-gold" />
                  <span className="text-elite-gold font-bold uppercase tracking-wider">Formação Elite</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-8">
                  De Eu-presa para Empresa:<br />
                  <span className="text-elite-gold">Organização, Gestão e Estrutura</span>
                </h3>

                <div className="mb-8">
                  <p className="text-5xl md:text-6xl font-bold text-elite-gold mb-4">
                    12x de R$ 166
                  </p>
                  <p className="text-2xl text-elite-white/70">
                    ou R$ 1.997,90 à vista
                  </p>
                </div>

                <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">Sem taxa de gestão à parte</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">6 pilares de formação empresarial</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">Bônus exclusivos inclusos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-elite-gold flex-shrink-0 mt-1" />
                    <p className="text-elite-white/80">Domínio total do seu negócio</p>
                  </div>
                </div>

                <Button 
                  onClick={handleCTA}
                  className="w-full bg-gradient-elite-gold hover:opacity-90 text-elite-black font-bold text-xl px-12 py-8 rounded-xl shadow-elite-gold-strong transition-all hover:scale-105"
                >
                  QUERO ESTRUTURAR MEU NEGÓCIO
                </Button>

                <p className="mt-6 text-elite-white/50 text-sm">
                  🔒 Pagamento 100% Seguro • Vagas Limitadas
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gradient-elite-bg border-t border-elite-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-20 h-20 text-elite-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Você Não Está Comprando um Curso
          </h2>
          <p className="text-2xl text-elite-white/80 mb-8 leading-relaxed">
            Você está entrando para uma <span className="text-elite-gold font-bold">mesa de negócios</span>
          </p>
          <p className="text-xl text-elite-white/60 mb-12 max-w-2xl mx-auto">
            Um grupo seleto de pessoas dispostas a transformar sua operação em empresa real,
            com gestão, estrutura e visão de longo prazo.
          </p>
          
          <Button 
            onClick={handleCTA}
            className="bg-gradient-elite-gold hover:opacity-90 text-elite-black font-bold text-xl px-16 py-8 rounded-xl shadow-elite-gold-strong transition-all hover:scale-105"
          >
            QUERO ENTRAR PARA ESSE GRUPO
          </Button>

          <p className="mt-8 text-elite-gold font-semibold text-lg">
            ⚡ Vagas Extremamente Limitadas
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-elite-black border-t border-elite-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <img src={soudropLogo} alt="SouDrop" className="h-12 opacity-70 mx-auto mb-6" />
          <p className="text-elite-white/40 text-sm">
            © 2024 SouDrop. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoudropElite;
