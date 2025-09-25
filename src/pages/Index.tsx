import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, Package, BarChart3, Zap, ShoppingCart, TrendingUp, Star, Users, Globe, Truck, DollarSign, MessageCircle, Phone, Mail, ArrowRight, X, Instagram, Search, CreditCard, Settings, CheckSquare, Lock, Shield, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import MarketplaceMarquee from "@/components/MarketplaceMarquee";
import heroImage from "@/assets/hero-soudrop.jpg";
import pcImage from "@/assets/pc.png";
import dashboardPreview from "@/assets/dashboard-preview.png";
import mlLogo from "@/assets/ml-logo.png";
import shopeeLogo from "@/assets/shopee-logo.png";
import magaluLogo from "@/assets/magalu-logo.png";
import amazonLogo from "@/assets/tiktok-shop-logo.png";
import blingLogo from "@/assets/bling-logo.png";
import newLogo from "@/assets/new-logo-v2.png";
import madeiraMadeiraLogo from "@/assets/madeiramadeira-logo.png";
import tiktokLogo from "@/assets/tiktok-logo.png";

const Index = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  const [isAnnual, setIsAnnual] = useState(true);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  
  const planData = {
    monthly: {
      basic: {
        price: "R$ 299",
        period: "/mês",
        originalPrice: null,
        savings: null
      },
      gold: {
        price: "R$ 399",
        period: "/mês",
        originalPrice: null,
        savings: null
      },
      diamond: {
        price: "R$ 499",
        period: "/mês",
        originalPrice: null,
        savings: null
      }
    },
    annual: {
      basic: {
        price: "R$ 2.390",
        period: "/ano",
        originalPrice: "R$ 3.588",
        savings: "R$ 1.198"
      },
      gold: {
        price: "R$ 2.890",
        period: "/ano",
        originalPrice: "R$ 4.788",
        savings: "R$ 1.898"
      },
      diamond: {
        price: "R$ 4.290",
        period: "/ano",
        originalPrice: "R$ 5.988",
        savings: "R$ 1.698"
      }
    }
  };

  const currentPlan = isAnnual ? planData.annual : planData.monthly;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <a href="#" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Soudrop
              </a>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" asChild>
                <a href="https://app2.soudrop.com.br/login" target="_blank" rel="noopener noreferrer">
                  Entrar
                </a>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="#planos">
                  Começar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div ref={mouseFollowerRef} className="fixed w-96 h-96 bg-primary/2 rounded-full blur-[100px] pointer-events-none z-0 transition-all duration-100 ease-out opacity-60" style={{
          transform: 'translate(-192px, -192px)'
        }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <Badge variant="secondary" className="mb-6">
                🚀 A Revolução do E-commerce
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Venda online com{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  máxima eficiência
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Integre marketplaces, importe da China e gerencie tudo em um só lugar. 
                A Soudrop cuida da logística para você focar nas vendas.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
                <Button variant="hero" size="xl" className="w-full sm:w-auto text-lg px-8 py-4 hover-scale shadow-glow" asChild>
                  <a href="#planos">
                    <Zap className="mr-3 h-6 w-6" />
                    Começar Agora
                  </a>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="fade" delay={0.6}>
              <div className="mt-16">
                <p className="text-muted-foreground mb-8 text-lg">Integrado com os principais marketplaces</p>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  setApi={setCarouselApi}
                  className="w-full max-w-5xl mx-auto"
                >
                  <CarouselContent className="flex items-center -ml-2 md:-ml-4">
                    {[
                      { src: blingLogo, alt: "Bling", name: "Bling" },
                      { src: madeiraMadeiraLogo, alt: "MadeiraMadeira", name: "MadeiraMadeira" },
                      { src: magaluLogo, alt: "Magalu", name: "Magalu" },
                      { src: mlLogo, alt: "Mercado Livre", name: "Mercado Livre" },
                      { src: shopeeLogo, alt: "Shopee", name: "Shopee" },
                      { src: tiktokLogo, alt: "TikTok", name: "TikTok" },
                    ].map((logo, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                        <div className="flex flex-col items-center p-4">
                          <div className="h-14 w-24 flex items-center justify-center mb-2">
                            <img 
                              src={logo.src} 
                              alt={logo.alt}
                              className="max-h-full max-w-full object-contain opacity-60 filter grayscale"
                            />
                          </div>
                          <span className="text-xs text-gray-400 text-center font-medium">{logo.name}</span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="order-1 lg:order-1">
                <video 
                  src="https://soudropbrasil.com.br/wp-content/uploads/2025/07/Soudrop-final-2.mp4"
                  controls
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-elegant"
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="order-2 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Conheça a{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Soudrop</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A Soudrop é a plataforma que revoluciona o e-commerce brasileiro. Criamos uma solução completa para sellers que querem vender mais, com menos esforço e maior eficiência.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Nossa tecnologia integra múltiplos marketplaces, oferece catálogo pronto e cuida de toda a logística, permitindo que você foque apenas no que realmente importa: vender.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="#features">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Saiba Mais
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Marketplace Marquee */}
      <MarketplaceMarquee />

      {/* Pricing Section */}
      <ScrollReveal direction="up">
        <section id="planos" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Escolha o plano que melhor{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">atende suas necessidades</span>
              </h2>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    !isAnnual 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Mensal
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all relative ${
                    isAnnual 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Anual
                  <Badge variant="secondary" className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                    39% OFF
                  </Badge>
                </button>
              </div>

              <p className="text-center text-muted-foreground mb-8">
                💰 Economize até 39% no plano anual
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <ScrollReveal direction="up" delay={0.1}>
                <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className="text-2xl mb-2">Basic</CardTitle>
                      <div className="space-y-1">
                        <div className="text-4xl font-bold text-primary">{currentPlan.basic.price}</div>
                        <div className="text-muted-foreground">{currentPlan.basic.period}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Integrações com marketplaces</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Logística completa</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Catálogo de 1400+ produtos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Suporte logístico dedicado</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Acompanhamento em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Publicação de anúncios em massa</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Suporte completo</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Gestão de devoluções</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Lives semanais</span>
                      </li>
                      <li className="flex items-center">
                        <X className="h-5 w-5 text-destructive mr-3" />
                        <span className="text-sm text-muted-foreground">Contabilidade</span>
                      </li>
                      <li className="flex items-center">
                        <X className="h-5 w-5 text-destructive mr-3" />
                        <span className="text-sm text-muted-foreground">Possibilidade de SKU próprio</span>
                      </li>
                      <li className="flex items-center">
                        <X className="h-5 w-5 text-destructive mr-3" />
                        <span className="text-sm text-muted-foreground">Importação direta da China</span>
                      </li>
                    </ul>
                    <Button variant="outline" size="lg" className="w-full mt-6">
                      Começar Agora
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Gold Plan */}
              <ScrollReveal direction="up" delay={0.2}>
                <Card className="bg-gradient-primary border-primary shadow-elegant transform scale-105 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="secondary" className="bg-black text-green-500">
                      Mais Popular
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className="text-2xl mb-2 text-primary-foreground">Gold</CardTitle>
                      <div className="space-y-1">
                        {isAnnual && currentPlan.gold.originalPrice && <div className="text-lg text-primary-foreground/60 line-through">
                          {currentPlan.gold.originalPrice}
                        </div>}
                        <div className="text-4xl font-bold text-primary-foreground">{currentPlan.gold.price}</div>
                        <div className="text-primary-foreground/80">{currentPlan.gold.period}</div>
                        {isAnnual && <div className="text-sm text-primary-foreground/80">equivalente a R$ 241/mês</div>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Integrações com marketplaces</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Mais Popular</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Catálogo de 1400+ produtos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Suporte logístico dedicado</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Acompanhamento em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Publicação de anúncios em massa</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Contabilidade</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Suporte completo</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Gestão de devoluções</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Lives semanais</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-foreground mr-3" />
                        <span className="text-sm text-primary-foreground">Mentoria em grupo quinzenal</span>
                      </li>
                      <li className="flex items-center">
                        <X className="h-5 w-5 text-primary-foreground/50 mr-3" />
                        <span className="text-sm text-primary-foreground/50">Possibilidade de SKU próprio</span>
                      </li>
                      <li className="flex items-center">
                        <X className="h-5 w-5 text-primary-foreground/50 mr-3" />
                        <span className="text-sm text-primary-foreground/50">Importação direta da China</span>
                      </li>
                    </ul>
                    <Button variant="secondary" size="lg" className="w-full mt-6">
                      Começar Agora
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Diamond Plan */}
              <ScrollReveal direction="up" delay={0.3}>
                <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="text-center">
                      <CardTitle className="text-2xl mb-2">Diamond</CardTitle>
                      <div className="space-y-1">
                        {isAnnual && currentPlan.diamond.originalPrice && <div className="text-lg text-muted-foreground line-through">
                          {currentPlan.diamond.originalPrice}
                        </div>}
                        <div className="text-4xl font-bold text-primary">{currentPlan.diamond.price}</div>
                        <div className="text-muted-foreground">{currentPlan.diamond.period}</div>
                        {isAnnual && <div className="text-sm text-muted-foreground">equivalente a R$ 358/mês</div>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Integrações com marketplaces</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Logística completa</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Catálogo de 1400+ produtos</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Suporte logístico dedicado</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Acompanhamento em tempo real</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Publicação de anúncios em massa</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Contabilidade</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Suporte completo</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Importação direta da China</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Gestão de devoluções</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Lives semanais</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Mentoria em grupo quinzenal</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3" />
                        <span className="text-sm">Possibilidade de SKU próprio</span>
                      </li>
                    </ul>
                    <Button variant="glow" size="lg" className="w-full mt-6">
                      Começar Agora
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                {isAnnual ? "Aproveite um desconto de até 39% no plano anual e economize ainda mais!" : "Comece com flexibilidade no plano mensal!"}
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Guarantee Section */}
      <ScrollReveal direction="up">
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-glow/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-full mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Garantia Incondicional de 7 Dias
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Acreditamos tanto na qualidade dos nossos produtos e serviços que oferecemos uma 
                <strong className="text-primary"> garantia total de 7 dias</strong>. Se por qualquer motivo você não estiver 
                completamente satisfeito, devolvemos 100% do seu investimento, sem perguntas.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">7 Dias Completos</h3>
                  <p className="text-muted-foreground">
                    Uma semana inteira para testar nossos produtos e serviços
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Reembolso Total</h3>
                  <p className="text-muted-foreground">
                    100% do valor pago devolvido diretamente na sua conta
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sem Perguntas</h3>
                  <p className="text-muted-foreground">
                    Não precisa explicar o motivo, seu reembolso é garantido
                  </p>
                </div>
              </div>
              
              <div className="mt-12 p-8 bg-gradient-card border border-primary/20 rounded-2xl">
                <p className="text-lg text-center mb-6">
                  <strong className="text-primary">Seu sucesso é nossa prioridade.</strong> Comece hoje mesmo com a tranquilidade 
                  de saber que seu investimento está completamente protegido.
                </p>
                <div className="text-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="#planos">
                      <Shield className="mr-2 h-5 w-5" />
                      Quero começar com segurança
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal direction="up">
        <section id="faq" className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Perguntas{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Esclarecemos as principais dúvidas sobre nossos serviços e como podemos ajudar seu negócio a crescer
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">Como funciona a integração com marketplaces?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    A integração é feita de forma automática, conectando sua loja a marketplaces como Magalu, Shopee, Mercado Livre e outros. Após a configuração, seus produtos são sincronizados de forma rápida e você pode começar a vender imediatamente.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">Posso importar produtos da China?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    Sim! No plano Diamond, você pode importar produtos diretamente da China por meio dos nossos grupos de compra, garantindo os melhores preços.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">Como funciona o suporte?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    Oferecemos suporte completo via WhatsApp, email e telefone. Nosso time está disponível para ajudar com dúvidas técnicas, estratégias de vendas e otimização de anúncios.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">Como são os métodos de pagamento?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    Aceitamos pagamentos por cartão de crédito, boleto bancário e transferências. A cobrança é feita mensal ou anualmente, dependendo do plano escolhido.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="text-lg font-semibold">Posso cancelar a qualquer momento?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    Sim, você pode cancelar seu plano a qualquer momento sem multas ou taxas de cancelamento. Sua assinatura será válida até o final do período já pago.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal direction="up">
        <footer className="bg-card border-t border-border py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Soudrop
              </div>
              
              <a href="https://www.instagram.com/soudropbrasil" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              
              <div className="text-muted-foreground">
                <p>&copy; 2025 Soudrop. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
};

export default Index;