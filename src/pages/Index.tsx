import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, Package, BarChart3, Zap, ShoppingCart, TrendingUp, Star, Users, Globe, Truck, DollarSign, MessageCircle, Phone, Mail, ArrowRight, X, Instagram } from "lucide-react";
import heroImage from "@/assets/hero-soudrop.jpg";
import mlLogo from "@/assets/ml-logo.png";
import shopeeLogo from "@/assets/shopee-logo.png";
import magaluLogo from "@/assets/magalu-logo.png";
import amazonLogo from "@/assets/amazon-logo.png";
import blingLogo from "@/assets/bling-logo.webp";
import madeiraMadeiraLogo from "@/assets/madeiramadeira-logo.png";
const Index = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  const [isAnnual, setIsAnnual] = useState(true);

  const planData = {
    monthly: {
      basic: { price: "R$ 299", period: "/mês", originalPrice: null, savings: null },
      gold: { price: "R$ 399", period: "/mês", originalPrice: null, savings: null },
      diamond: { price: "R$ 499", period: "/mês", originalPrice: null, savings: null }
    },
    annual: {
      basic: { price: "R$ 2.390", period: "/ano", originalPrice: "R$ 3.588", savings: "33%" },
      gold: { price: "R$ 2.899", period: "/ano", originalPrice: "R$ 4.788", savings: "39%" },
      diamond: { price: "R$ 4.299", period: "/ano", originalPrice: "R$ 5.988", savings: "28%" }
    }
  };

  const currentPlan = isAnnual ? planData.annual : planData.monthly;
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseFollowerRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        mouseFollowerRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Soudrop
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#funcionalidades" className="text-foreground hover:text-primary transition-colors">
                Funcionalidades
              </a>
              <a href="#planos" className="text-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg">
                Entrar
              </Button>
              <Button variant="hero" size="lg">
                Começar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Mouse Follower Light */}
        <div ref={mouseFollowerRef} className="fixed w-96 h-96 bg-primary/2 rounded-full blur-[100px] pointer-events-none z-0 transition-all duration-100 ease-out opacity-60" style={{
        transform: 'translate(-192px, -192px)'
      }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
                🚀 Revolucione suas vendas online
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in text-white">
              Aposentamos a{" "}
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-pulse">
                antiga geração
              </span>
              {" "}de sellers
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed animate-fade-in font-medium">
              E agora, formamos uma nova tendência: onde vender produtos físicos não demanda mais esforço, marketing ou gastos operacionais - mas sim, alguns cliques.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
              A integração perfeita, logística sem preocupações e controle total das suas vendas em um único painel. 
              <span className="text-primary font-semibold"> Vender nunca foi tão fácil.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
              <Button variant="hero" size="xl" className="w-full sm:w-auto text-lg px-8 py-4 hover-scale shadow-glow">
                <Zap className="mr-3 h-6 w-6" />
                Começar Agora
              </Button>
              
            </div>
            
            <div className="mt-8 animate-fade-in">
              
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 opacity-60">
                <div className="flex items-center text-xs text-gray-400">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  1400+ produtos
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Logística completa
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <CheckCircle className="h-4 w-4 text-primary mr-2" />
                  Suporte 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher o{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Soudrop?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Múltiplos Marketplaces</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integre rapidamente suas lojas com Magalu, Shopee, Amazon, Mercado Livre, Bling e mais — tudo em um único painel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Catálogo Pronto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Acesse mais de 1400 produtos prontos para venda, com anúncios, imagens, títulos e descrições configurados automaticamente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Logística Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Estocamos, embalamos e enviamos diretamente para seus clientes. Você só se preocupa com as vendas.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Gestão Detalhada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Acompanhe todas as métricas de vendas, status de envio, lucro, taxas de marketplace, frete e cupons em tempo real.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Preços da China</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Com nossa base em Hong Kong, importe produtos com os melhores preços do mercado, sem margem de lucro da nossa parte.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Suporte Dedicado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Nossa equipe está pronta para ajudar em todas as etapas, desde o envio até a gestão de devoluções.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tudo que você precisa para{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">vender com eficiência</span>
            </h2>
          </div>

          <div className="space-y-20">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Integração</Badge>
                <h3 className="text-3xl font-bold mb-6">Integração com Marketplaces</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Conecte sua loja aos maiores marketplaces do Brasil de forma rápida e fácil. Com apenas alguns cliques, seus produtos são sincronizados, sem dores de cabeça.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Magalu, Shopee, Amazon, Mercado Livre</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Sincronização automática de produtos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Configuração em poucos cliques</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20">
                <div className="text-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={magaluLogo} alt="Magalu" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">Magalu</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={shopeeLogo} alt="Shopee" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">Shopee</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={amazonLogo} alt="Amazon" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">Amazon</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={mlLogo} alt="Mercado Livre" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">Mercado Livre</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={madeiraMadeiraLogo} alt="MadeiraMadeira" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">MadeiraMadeira</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <img src={blingLogo} alt="Bling" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">Bling</div>
                    </div>
                  </div>
                  <div className="text-center text-primary font-semibold">Todos Conectados</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <Badge variant="secondary" className="mb-4">Catálogo</Badge>
                <h3 className="text-3xl font-bold mb-6">Catálogo Completo e Pronto para Vender</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Acesse mais de 1400 produtos de diversas categorias, todos prontos para serem listados. Cada item já vem com título, descrição, imagens, EAN, SKU e preço de custo configurados automaticamente.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1400+</div>
                    <div className="text-sm text-muted-foreground">Produtos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Configurados</div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-gradient-card rounded-2xl p-8 border border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Produto configurado</span>
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Imagens otimizadas</span>
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Preços atualizados</span>
                    </div>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>

      {/* Sales Management Dashboard Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Gestão Completa de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Vendas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visualize todas as métricas de todos os marketplaces em um só lugar, 
              direto da nossa dashboard inteligente
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Dashboard Preview */}
            <div className="bg-gradient-card rounded-3xl p-8 border border-primary/20 shadow-elegant mb-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Dashboard de Vendas Unificada</h3>
                    <p className="text-muted-foreground">Todas as métricas em tempo real</p>
                  </div>
                </div>
              </div>

              {/* Metrics Available */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <Truck className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Status de Envio</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <div className="w-6 h-6 bg-primary/20 rounded mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Data</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor Pago pelo Cliente</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <Package className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor do Produto</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor Recebido</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <BarChart3 className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Taxa de Marketplace</div>
                </div>
              </div>

              {/* Second Row of Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <DollarSign className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor de Custo</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Lucro</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <Truck className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Frete</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <div className="w-6 h-6 bg-yellow-600/20 rounded mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-600 rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Cupons</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <BarChart3 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Margem</div>
                </div>
              </div>

              {/* Marketplace Indicators */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-primary/10">
                <div className="text-sm text-muted-foreground">Dados de todos os marketplaces:</div>
                <div className="flex items-center gap-3">
                  <img src={mlLogo} alt="Mercado Livre" className="h-6 w-6 object-contain opacity-80" />
                  <img src={shopeeLogo} alt="Shopee" className="h-6 w-6 object-contain opacity-80" />
                  <img src={amazonLogo} alt="Amazon" className="h-6 w-6 object-contain opacity-80" />
                  <img src={magaluLogo} alt="Magalu" className="h-6 w-6 object-contain opacity-80" />
                  <span className="text-primary font-semibold text-sm">Em um só lugar</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Métricas Detalhadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Acompanhe status de envio, valores pagos, recebidos, custos, lucros e margens 
                    de todos os seus pedidos em tempo real.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Visão Unificada</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Todos os marketplaces em um só lugar. Não precisa mais ficar alternando 
                    entre diferentes plataformas para controlar suas vendas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Análise de Rentabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Veja exatamente quanto você está ganhando com cada venda, incluindo 
                    taxas de marketplace, fretes, cupons e custos reais.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos clientes{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">dizem sobre o Soudrop</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-base mb-6">
                  "Usar o Soudrop foi uma mudança total para o nosso negócio. Conectamos nossas lojas de forma rápida e fácil, e em menos de 1 mês já víamos um aumento significativo nas vendas."
                </blockquote>
                <footer>
                  <div className="font-semibold">João Silva</div>
                  <div className="text-sm text-muted-foreground">Vendedor no Mercado Livre e Shopee</div>
                </footer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-base mb-6">
                  "Nunca pensei que vender em tantos marketplaces seria tão fácil. O catálogo já vem pronto, e a integração com as plataformas é super tranquila."
                </blockquote>
                <footer>
                  <div className="font-semibold">Fernanda Oliveira</div>
                  <div className="text-sm text-muted-foreground">Proprietária de loja na Amazon e Magalu</div>
                </footer>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-base mb-6">
                  "Com o plano Diamond, a possibilidade de importar diretamente da China tem feito toda a diferença. Conseguimos oferecer ofertas incríveis!"
                </blockquote>
                <footer>
                  <div className="font-semibold">Carlos Souza</div>
                  <div className="text-sm text-muted-foreground">Dono de loja no Mercado Livre e Bling</div>
                </footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Differential Section */}
      <section className="py-20 bg-gradient-to-br from-green-400 via-green-500 to-green-600 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                DIFERENCIAL ÚNICO
              </h2>
              <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
            </div>
            
            {/* Main content */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Escolha o Produto</h3>
                  <p className="text-white/90 text-sm">Selecione qualquer item do nosso catálogo</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Preço Transparente</h3>
                  <p className="text-white/90 text-sm">Custo da China + valor final no Brasil</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Nós Importamos</h3>
                  <p className="text-white/90 text-sm">Fazemos todo o processo de importação</p>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                  Você pode importar produtos da China conosco, <span className="font-bold">mesmo sem saber importar</span>. 
                  Basta escolher um produto, nós te passamos o preço de custo na China e a quanto ele chegará no Brasil e pronto, fazemos o pedido.
                </p>
                
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                  <p className="text-lg font-semibold text-white mb-2">
                    🎯 Não tem quantidade mínima
                  </p>
                  <p className="text-white/90">
                    Você pode pedir <span className="font-bold">2 unidades ou 2 mil</span> - a escolha é sua!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Escolha o plano que melhor{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">atende suas necessidades</span>
            </h2>
            
            {/* Toggle Buttons */}
            <div className="flex items-center justify-center gap-2 bg-gradient-card rounded-lg p-1 w-fit mx-auto border border-primary/20">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  !isAnnual 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  isAnnual 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Anual
              </button>
            </div>
            
            {isAnnual && (
              <div className="mt-4">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  💰 Economize até 39% no plano anual
                </Badge>
              </div>
            )}
          </div>

          <div className={`grid gap-8 max-w-6xl mx-auto ${isAnnual ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
            {/* Basic Plan - Only show in monthly */}
            {!isAnnual && (
              <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
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
                       <span className="text-sm">Mentoria semanal</span>
                     </li>
                     <li className="flex items-center">
                       <X className="h-5 w-5 text-destructive mr-3" />
                       <span className="text-sm text-muted-foreground">Gerente de contabilidade</span>
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
            )}

            {/* Gold Plan */}
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
                    {isAnnual && currentPlan.gold.originalPrice && (
                      <div className="text-lg text-primary-foreground/60 line-through">
                        {currentPlan.gold.originalPrice}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-primary-foreground">{currentPlan.gold.price}</div>
                    <div className="text-primary-foreground/80">{currentPlan.gold.period}</div>
                    {isAnnual && (
                      <div className="text-sm text-primary-foreground/80">equivalente a R$ 241/mês</div>
                    )}
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
                     <span className="text-sm text-primary-foreground">Gerente de contabilidade</span>
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
                     <span className="text-sm text-primary-foreground">Mentoria semanal</span>
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

            {/* Diamond Plan */}
            <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl mb-2">Diamond</CardTitle>
                  <div className="space-y-1">
                    {isAnnual && currentPlan.diamond.originalPrice && (
                      <div className="text-lg text-muted-foreground line-through">
                        {currentPlan.diamond.originalPrice}
                      </div>
                    )}
                    <div className="text-4xl font-bold text-primary">{currentPlan.diamond.price}</div>
                    <div className="text-muted-foreground">{currentPlan.diamond.period}</div>
                    {isAnnual && (
                      <div className="text-sm text-muted-foreground">equivalente a R$ 358/mês</div>
                    )}
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
                     <span className="text-sm">Gerente de contabilidade</span>
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
                      <span className="text-sm">Mentoria semanal</span>
                    </li>
                 </ul>
                <Button variant="glow" size="lg" className="w-full mt-6">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              {isAnnual 
                ? "Aproveite um desconto de até 39% no plano anual e economize ainda mais!" 
                : "Comece com flexibilidade no plano mensal!"}
            </p>
            <Button variant="hero" size="xl">
              <Zap className="mr-2 h-5 w-5" />
              Começar Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Sem compromisso • Sem necessidade de cartão de crédito
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Como funciona a integração com marketplaces?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  A integração é feita de forma automática, conectando sua loja a marketplaces como Magalu, Shopee, Amazon, Mercado Livre e outros. Após a configuração, seus produtos são sincronizados de forma rápida e você pode começar a vender imediatamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Posso importar produtos diretamente da China?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  Sim! No plano Diamond, você pode importar produtos diretamente da China por meio dos nossos grupos de compra, garantindo os melhores preços.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">O que está incluso no suporte logístico?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  O suporte logístico inclui armazenamento, embalagem e envio direto para seus clientes. Caso haja devolução, também cuidamos de todo o processo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Quais são as formas de pagamento?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  Aceitamos pagamentos por cartão de crédito, boleto bancário e transferências. A cobrança é feita mensal ou anualmente, dependendo do plano escolhido.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Soudrop
            </div>
            
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2">
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
            
            <div className="text-muted-foreground">
              <p>&copy; 2025 Soudrop. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;