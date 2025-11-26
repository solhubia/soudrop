import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle, MessageCircle, Package } from "lucide-react";
import { useEffect, useState } from "react";

const ObrigadoClubeImportacao = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    vendeProduto: "",
    faturamento: "",
    capital: "",
    objetivo: "",
    jaImportou: "",
    desafio: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Aqui você pode adicionar lógica para enviar os dados
    console.log("Formulário enviado:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="space-y-3">
              <p className="text-center text-sm md:text-base font-medium text-muted-foreground">
                Etapa 2 de 2 · Assista ao vídeo para liberar seus próximos passos
              </p>
              <Progress value={75} className="h-3 bg-muted" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Bem-vindo ao Clube de Importação!</h1>
          </div>

          {/* Video Instruction Text */}
          <div className="max-w-3xl mx-auto mb-8 text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl font-bold">
              Antes de seguir, este vídeo é obrigatório.
            </h2>
            <div className="text-base md:text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                Neste vídeo eu vou te mostrar, em poucos minutos, como funciona o Clube de Importação e o que você precisa fazer agora para ativar seu acesso e aproveitar o programa do jeito certo.
              </p>
              <p>
                Assista até o final para entender os próximos passos e ver se você se encaixa no perfil ideal para participar do Clube.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                <div className="aspect-video relative bg-black overflow-hidden webinar-wrapper">
                  <iframe
                    id="clube-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/LYoT691VW-M?controls=0&rel=0&modestbranding=1&playsinline=1"
                    title="Clube de Importação"
                    frameBorder="0"
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Camada para bloquear clique/pause */}
                  <div className="absolute inset-0 pointer-events-auto bg-transparent"></div>
                  
                  {/* Camada para cobrir a área do logo do YouTube */}
                  <div className="absolute right-0 bottom-0 w-20 h-10 bg-gradient-to-l from-black/90 to-black/0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Transition Text */}
          <div className="max-w-3xl mx-auto mb-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Agora que você entendeu como funciona o Clube de Importação, preciso te conhecer melhor para saber se você realmente tem perfil para participar do nosso grupo seletivo.
            </p>
          </div>

          {/* Qualification Form */}
          {!formSubmitted ? (
            <div className="bg-card border border-border rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-center mb-8">Formulário de Qualificação</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados Básicos */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-primary">Dados Básicos</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Qualificação */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-primary">Qualificação</h4>
                  
                  <div className="space-y-3">
                    <Label>Você já vende algum produto hoje?</Label>
                    <RadioGroup
                      required
                      value={formData.vendeProduto}
                      onValueChange={(value) => handleInputChange("vendeProduto", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="vende-sim" />
                        <Label htmlFor="vende-sim" className="font-normal cursor-pointer">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="vende-nao" />
                        <Label htmlFor="vende-nao" className="font-normal cursor-pointer">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Qual é o seu faturamento mensal atual?</Label>
                    <RadioGroup
                      required
                      value={formData.faturamento}
                      onValueChange={(value) => handleInputChange("faturamento", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao-vende" id="fat-nao" />
                        <Label htmlFor="fat-nao" className="font-normal cursor-pointer">Não vendo ainda</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-5k" id="fat-5k" />
                        <Label htmlFor="fat-5k" className="font-normal cursor-pointer">Até R$ 5.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5k-20k" id="fat-20k" />
                        <Label htmlFor="fat-20k" className="font-normal cursor-pointer">De R$ 5.000 a R$ 20.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="20k-50k" id="fat-50k" />
                        <Label htmlFor="fat-50k" className="font-normal cursor-pointer">De R$ 20.000 a R$ 50.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="acima-50k" id="fat-mais" />
                        <Label htmlFor="fat-mais" className="font-normal cursor-pointer">Acima de R$ 50.000</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Você tem capital disponível para investir em importação e estoque?</Label>
                    <RadioGroup
                      required
                      value={formData.capital}
                      onValueChange={(value) => handleInputChange("capital", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-2k" id="cap-2k" />
                        <Label htmlFor="cap-2k" className="font-normal cursor-pointer">Até R$ 2.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-5k" id="cap-5k" />
                        <Label htmlFor="cap-5k" className="font-normal cursor-pointer">Até R$ 5.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5k-15k" id="cap-15k" />
                        <Label htmlFor="cap-15k" className="font-normal cursor-pointer">De R$ 5.000 a R$ 15.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="15k-mais" id="cap-mais" />
                        <Label htmlFor="cap-mais" className="font-normal cursor-pointer">R$ 15.000 ou mais</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Você está buscando principalmente:</Label>
                    <RadioGroup
                      required
                      value={formData.objetivo}
                      onValueChange={(value) => handleInputChange("objetivo", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="renda-extra" id="obj-extra" />
                        <Label htmlFor="obj-extra" className="font-normal cursor-pointer">Renda extra</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negocio-solido" id="obj-solido" />
                        <Label htmlFor="obj-solido" className="font-normal cursor-pointer">Construir um negócio sólido</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="escalar" id="obj-escalar" />
                        <Label htmlFor="obj-escalar" className="font-normal cursor-pointer">Escalar uma operação que já existe</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Você já tentou importar da China?</Label>
                    <RadioGroup
                      required
                      value={formData.jaImportou}
                      onValueChange={(value) => handleInputChange("jaImportou", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="imp-sim" />
                        <Label htmlFor="imp-sim" className="font-normal cursor-pointer">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="imp-nao" />
                        <Label htmlFor="imp-nao" className="font-normal cursor-pointer">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="desafio">O que mais está travando o seu crescimento hoje?</Label>
                    <Textarea
                      id="desafio"
                      required
                      value={formData.desafio}
                      onChange={(e) => handleInputChange("desafio", e.target.value)}
                      placeholder="Conte-nos sobre seus principais desafios..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar minhas informações
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-8 animate-fade-in">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Recebemos suas respostas!</h3>
              <p className="text-lg text-muted-foreground">
                A equipe do Renan vai analisar seu perfil e te chamar no WhatsApp para falar sobre os próximos passos.
              </p>
            </div>
          )}

          {/* Benefits Section */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-center mb-6">O que você recebe dentro do Clube de Importação</h3>
            <ul className="space-y-3 text-left max-w-xl mx-auto text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Acompanhamento de 6 semanas com Renan e o time</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Importação compartilhada para reduzir riscos e custos</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Análise de produtos e orientação na escolha do mix</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Estratégia completa para escalar com margem e previsibilidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Suporte direto do time de CS</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Acesso a planilhas, DRE, estrutura de custos e ferramentas</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>Possibilidade de se tornar Fornecedor SouDrop</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObrigadoClubeImportacao;
