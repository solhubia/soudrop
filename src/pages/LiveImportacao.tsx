import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, ShieldCheck, Clock, Zap, Package, Star, Award, Quote } from "lucide-react";
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

  const FormularioCaptura = () => (
    <Card className="bg-card/95 border-2 border-primary shadow-glow backdrop-blur-sm">
      <CardContent className="p-8">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-semibold text-base">Nome completo</Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="bg-input border-2 border-border/50 focus:border-primary h-14 text-lg transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold text-base">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-input border-2 border-border/50 focus:border-primary h-14 text-lg transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground font-semibold text-base">WhatsApp</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="bg-input border-2 border-border/50 focus:border-primary h-14 text-lg transition-all"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-black text-xl py-8 shadow-cta hover:shadow-yellow-glow hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "🔥 Quero garantir minha vaga"}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              🔒 Seus dados estão seguros. Ao preencher, você concorda em receber comunicações sobre a live.
            </p>
          </form>
        ) : (
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 shadow-glow">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-3 text-foreground">Vaga garantida! 🎉</h3>
            <p className="text-muted-foreground text-lg">
              Você receberá todas as informações da live no seu e-mail e WhatsApp.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header com Logo */}
      <header className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img src={logoSoudrop} alt="SouDrop Brasil" className="h-16 md:h-20 lg:h-24" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 bg-gradient-hero overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-soudrop-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-soudrop-yellow/10 rounded-full blur-3xl"></div>
        
        {/* Linhas de movimento */}
        <div className="absolute top-1/4 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-soudrop-green/30 to-transparent"></div>
        <div className="absolute top-1/3 left-10 w-24 h-1 bg-gradient-to-r from-transparent via-soudrop-yellow/30 to-transparent"></div>
        <div className="absolute bottom-1/4 right-0 w-32 h-1 bg-gradient-to-l from-transparent via-soudrop-green/30 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary rounded-full shadow-cta animate-pulse">
                <span className="text-secondary-foreground font-black uppercase text-sm tracking-wider flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Live Exclusiva • Online e Gratuita
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] uppercase">
                <span className="text-foreground">Como Importar</span>
                <br />
                <span className="text-primary">da China</span>
                <br />
                <span className="text-foreground">e Lucrar nos</span>
                <br />
                <span className="text-foreground">Marketplaces</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                Aprenda o passo a passo completo para <span className="text-primary font-bold">escolher produtos vencedores</span>, negociar com fornecedores chineses e <span className="text-primary font-bold">multiplicar seu lucro</span> nos principais marketplaces do Brasil.
              </p>
              
              <div className="space-y-4 bg-card/80 backdrop-blur-md p-6 rounded-2xl border border-primary/30 shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Data</p>
                    <p className="font-bold text-xl text-foreground">[EDITAR DATA]</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Horário</p>
                    <p className="font-bold text-xl text-foreground">[EDITAR HORÁRIO]</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-3 bg-secondary/30 border-2 border-secondary rounded-xl shadow-yellow-glow">
                  <span className="text-secondary font-black uppercase text-sm">🔥 Vagas Limitadas</span>
                </div>
                <div className="px-5 py-3 bg-primary/20 border-2 border-primary rounded-xl shadow-glow">
                  <span className="text-primary font-bold uppercase text-sm">✅ 100% Gratuito</span>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <FormularioCaptura />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LiveImportacao;
