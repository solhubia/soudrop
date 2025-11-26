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

  useEffect(() => {
    const btn = document.getElementById('video-unmute-btn');
    const iframe = document.getElementById('video-clube');

    if (btn && iframe) {
      const handleClick = () => {
        const url = iframe.getAttribute('src') || "";
        let newUrl = url.replace('mute=1', 'mute=0');
        if (!newUrl.includes('autoplay=1')) {
          newUrl += (newUrl.includes('?') ? '&' : '?') + 'autoplay=1';
        }
        iframe.setAttribute('src', newUrl);
        btn.style.display = 'none';
      };
      
      btn.addEventListener('click', handleClick);
      return () => btn.removeEventListener('click', handleClick);
    }
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
    <div className="min-h-screen bg-clube-black">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="space-y-3">
              <p className="text-center text-sm md:text-base font-medium text-clube-gray">
                Etapa 2 de 2 · Assista ao vídeo para liberar seus próximos passos
              </p>
              <Progress value={75} className="h-3 bg-clube-black-alt [&>div]:bg-clube-red-primary" />
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-clube-white">Bem-vindo ao Clube de Importação!</h1>
          </div>

          {/* Video Instruction Text */}
          <div className="max-w-3xl mx-auto mb-8 text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-clube-white">
              Antes de seguir, este vídeo é obrigatório.
            </h2>
            <div className="text-base md:text-lg text-clube-gray space-y-4 leading-relaxed">
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
            <div 
              className="video-wrapper-clube"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '900px',
                margin: '0 auto',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  id="video-clube"
                  src="https://www.youtube.com/embed/LYoT691VW-M?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=LYoT691VW-M"
                  title="Clube de Importação"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    minHeight: '400px',
                    pointerEvents: 'auto'
                  }}
                ></iframe>

                <button
                  id="video-unmute-btn"
                  className="video-unmute-overlay"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '12px 28px',
                    borderRadius: '999px',
                    border: '2px solid hsl(0 76% 52%)',
                    fontSize: '16px',
                    fontWeight: '600',
                    background: 'hsl(0 76% 52%)',
                    color: 'hsl(0 0% 100%)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 10,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'hsl(0 76% 39%)';
                    e.currentTarget.style.borderColor = 'hsl(0 76% 39%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'hsl(0 76% 52%)';
                    e.currentTarget.style.borderColor = 'hsl(0 76% 52%)';
                  }}
                >
                  🔊 Clique para ativar o som
                </button>

                {/* Máscara para esconder a logo do YouTube */}
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '100px',
                    height: '50px',
                    background: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0.8) 50%, rgba(0,0,0,0))',
                    pointerEvents: 'none',
                    zIndex: 999
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Transition Text */}
          <div className="max-w-3xl mx-auto mb-8 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-base md:text-lg text-clube-gray leading-relaxed">
              Agora que você entendeu como funciona o Clube de Importação, preciso te conhecer melhor para saber se você realmente tem perfil para participar do nosso grupo seletivo.
            </p>
          </div>

          {/* Qualification Form */}
          {!formSubmitted ? (
            <div className="bg-clube-black-alt border-2 border-clube-border rounded-2xl p-8 mb-8 animate-fade-in shadow-clube-red" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-center mb-8 text-clube-white">Formulário de Qualificação</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dados Básicos */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-clube-red-primary">Dados Básicos</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-clube-white">Nome completo</Label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      placeholder="Digite seu nome completo"
                      className="bg-clube-input-bg border-clube-border text-clube-white placeholder:text-clube-gray focus:border-clube-red-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-clube-white">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="bg-clube-input-bg border-clube-border text-clube-white placeholder:text-clube-gray focus:border-clube-red-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-clube-white">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="seu@email.com"
                      className="bg-clube-input-bg border-clube-border text-clube-white placeholder:text-clube-gray focus:border-clube-red-primary"
                    />
                  </div>
                </div>

                {/* Qualificação */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-clube-red-primary">Qualificação</h4>
                  
                  <div className="space-y-3">
                    <Label className="text-clube-white">Você já vende algum produto hoje?</Label>
                    <RadioGroup
                      required
                      value={formData.vendeProduto}
                      onValueChange={(value) => handleInputChange("vendeProduto", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="vende-sim" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="vende-sim" className="font-normal cursor-pointer text-clube-gray">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="vende-nao" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="vende-nao" className="font-normal cursor-pointer text-clube-gray">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-clube-white">Qual é o seu faturamento mensal atual?</Label>
                    <RadioGroup
                      required
                      value={formData.faturamento}
                      onValueChange={(value) => handleInputChange("faturamento", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao-vende" id="fat-nao" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="fat-nao" className="font-normal cursor-pointer text-clube-gray">Não vendo ainda</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-5k" id="fat-5k" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="fat-5k" className="font-normal cursor-pointer text-clube-gray">Até R$ 5.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5k-20k" id="fat-20k" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="fat-20k" className="font-normal cursor-pointer text-clube-gray">De R$ 5.000 a R$ 20.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="20k-50k" id="fat-50k" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="fat-50k" className="font-normal cursor-pointer text-clube-gray">De R$ 20.000 a R$ 50.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="acima-50k" id="fat-mais" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="fat-mais" className="font-normal cursor-pointer text-clube-gray">Acima de R$ 50.000</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-clube-white">Você tem capital disponível para investir em importação e estoque?</Label>
                    <RadioGroup
                      required
                      value={formData.capital}
                      onValueChange={(value) => handleInputChange("capital", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-2k" id="cap-2k" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="cap-2k" className="font-normal cursor-pointer text-clube-gray">Até R$ 2.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ate-5k" id="cap-5k" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="cap-5k" className="font-normal cursor-pointer text-clube-gray">Até R$ 5.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5k-15k" id="cap-15k" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="cap-15k" className="font-normal cursor-pointer text-clube-gray">De R$ 5.000 a R$ 15.000</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="15k-mais" id="cap-mais" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="cap-mais" className="font-normal cursor-pointer text-clube-gray">R$ 15.000 ou mais</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-clube-white">Você está buscando principalmente:</Label>
                    <RadioGroup
                      required
                      value={formData.objetivo}
                      onValueChange={(value) => handleInputChange("objetivo", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="renda-extra" id="obj-extra" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="obj-extra" className="font-normal cursor-pointer text-clube-gray">Renda extra</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negocio-solido" id="obj-solido" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="obj-solido" className="font-normal cursor-pointer text-clube-gray">Construir um negócio sólido</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="escalar" id="obj-escalar" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="obj-escalar" className="font-normal cursor-pointer text-clube-gray">Escalar uma operação que já existe</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-clube-white">Você já tentou importar da China?</Label>
                    <RadioGroup
                      required
                      value={formData.jaImportou}
                      onValueChange={(value) => handleInputChange("jaImportou", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="imp-sim" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="imp-sim" className="font-normal cursor-pointer text-clube-gray">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="imp-nao" className="border-clube-border text-clube-red-primary" />
                        <Label htmlFor="imp-nao" className="font-normal cursor-pointer text-clube-gray">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="desafio" className="text-clube-white">O que mais está travando o seu crescimento hoje?</Label>
                    <Textarea
                      id="desafio"
                      required
                      value={formData.desafio}
                      onChange={(e) => handleInputChange("desafio", e.target.value)}
                      placeholder="Conte-nos sobre seus principais desafios..."
                      rows={4}
                      className="bg-clube-input-bg border-clube-border text-clube-white placeholder:text-clube-gray focus:border-clube-red-primary"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-clube-red-primary hover:bg-clube-red-dark text-clube-white font-semibold shadow-clube-red-strong">
                  Enviar minhas informações
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-clube-black-alt border-2 border-clube-red-primary rounded-2xl p-8 text-center mb-8 animate-fade-in shadow-clube-red-strong">
              <CheckCircle className="w-16 h-16 text-clube-red-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-clube-white">Recebemos suas respostas!</h3>
              <p className="text-lg text-clube-gray">
                A equipe do Renan vai analisar seu perfil e te chamar no WhatsApp para falar sobre os próximos passos.
              </p>
            </div>
          )}

          {/* Benefits Section */}
          <div className="bg-clube-black-alt border-2 border-clube-border rounded-2xl p-8 mb-8 animate-fade-in shadow-clube-red" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-center mb-6 text-clube-white">O que você recebe dentro do Clube de Importação</h3>
            <ul className="space-y-3 text-left max-w-xl mx-auto text-clube-gray">
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
                <span>Acompanhamento de 6 semanas com Renan e o time</span>
              </li>
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
                <span>Importação compartilhada para reduzir riscos e custos</span>
              </li>
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
                <span>Análise de produtos e orientação na escolha do mix</span>
              </li>
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
                <span>Estratégia completa para escalar com margem e previsibilidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
                <span>Suporte direto do time de CS</span>
              </li>
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
                <span>Acesso a planilhas, DRE, estrutura de custos e ferramentas</span>
              </li>
              <li className="flex items-start">
                <span className="text-clube-red-primary mr-2 mt-1 font-bold">✓</span>
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
