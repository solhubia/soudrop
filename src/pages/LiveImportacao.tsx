import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, DollarSign, Package, ShieldCheck } from "lucide-react";
import logoSoudrop from "@/assets/soudrop-logo-oficial.png";

const LiveImportacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header com Logo */}
      <header className="py-6 md:py-8 px-4 border-b border-border/10">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img src={logoSoudrop} alt="SouDrop Brasil" className="h-12 md:h-16 lg:h-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Coluna Esquerda - Conteúdo */}
            <div className="space-y-6 md:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-secondary/20 border-2 border-secondary rounded-full shadow-yellow-glow animate-pulse">
                <Zap className="w-5 h-5 text-secondary" />
                <span className="text-secondary-foreground font-black uppercase text-sm tracking-wider">
                  Live Exclusiva • Online e Gratuita
                </span>
              </div>
              
              {/* Título Principal */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] uppercase tracking-tight">
                <span className="text-foreground">Importação da</span>
                <br />
                <span className="text-primary drop-shadow-glow">China</span>
                <br />
                <span className="text-foreground">para Marketplaces</span>
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed max-w-2xl">
                Aprenda o passo a passo completo para <span className="text-primary font-bold">importar produtos com alta margem</span>, negociar direto com fornecedores chineses e <span className="text-primary font-bold">multiplicar seus lucros</span> vendendo nos principais marketplaces do Brasil.
              </p>
              
              {/* Bullets de Benefícios */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-base md:text-lg">Produtos com margem 3x maior</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-base md:text-lg">Fornecedores confiáveis e validados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold text-base md:text-lg">Passo a passo sem complicação</span>
                </div>
              </div>
              
              {/* Badges de Destaque */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-secondary/30 border border-secondary rounded-lg">
                  <span className="text-secondary font-bold uppercase text-xs md:text-sm">🔥 Vagas Limitadas</span>
                </div>
                <div className="px-4 py-2 bg-primary/20 border border-primary rounded-lg">
                  <span className="text-primary font-bold uppercase text-xs md:text-sm">✅ 100% Gratuito</span>
                </div>
                <div className="px-4 py-2 bg-foreground/10 border border-foreground/20 rounded-lg">
                  <span className="text-foreground font-bold uppercase text-xs md:text-sm">📦 Conteúdo Prático</span>
                </div>
              </div>
            </div>
            
            {/* Coluna Direita - Formulário */}
            <div className="lg:pl-8">
              <Card className="bg-card/95 border-2 border-primary shadow-glow backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-black text-foreground uppercase mb-2">
                          Garanta sua vaga
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base">
                          Preencha os dados abaixo para participar
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-foreground font-semibold text-base">
                          Nome completo
                        </Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          placeholder="Digite seu nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-2 border-border/50 focus:border-primary h-12 md:h-14 text-base md:text-lg transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-semibold text-base">
                          E-mail
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-2 border-border/50 focus:border-primary h-12 md:h-14 text-base md:text-lg transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp" className="text-foreground font-semibold text-base">
                          WhatsApp
                        </Label>
                        <Input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          placeholder="(00) 00000-0000"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          required
                          className="bg-input border-2 border-border/50 focus:border-primary h-12 md:h-14 text-base md:text-lg transition-all"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-black text-lg md:text-xl py-6 md:py-8 shadow-cta hover:shadow-yellow-glow hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "🔥 Quero garantir minha vaga"}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        🔒 Seus dados estão seguros. Ao preencher, você concorda em receber comunicações sobre a live.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-8 md:py-10">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 shadow-glow">
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Vaga garantida! 🎉
                      </h3>
                      <p className="text-muted-foreground text-base md:text-lg">
                        Você receberá todas as informações da live no seu e-mail e WhatsApp.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveImportacao;
