import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Package, BarChart3, Zap, ShoppingCart, TrendingUp, Star, Users, Globe, Truck, DollarSign, MessageCircle, Phone, Mail, ArrowRight, X, Instagram, Search, CreditCard, Settings, CheckSquare, Lock, Shield, Clock } from "lucide-react";
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
import careerPathIllustration from "@/assets/career-path-illustration.png";
const Index = () => {
  const mouseFollowerRef = useRef<HTMLDivElement>(null);
  const [isAnnual, setIsAnnual] = useState(true);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  
  // Scroll animations
  const benefitsAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const dashboardAnimation = useScrollAnimation();
  const comparisonAnimation = useScrollAnimation(); 
  const videoCasesAnimation = useScrollAnimation();
  const pricingAnimation = useScrollAnimation();
  const faqAnimation = useScrollAnimation();
  const planData = {
    monthly: {
      basic: {
        price: "R$ 297",
        period: "/mês",
        originalPrice: null,
        savings: null
      },
      gold: {
        price: "R$ 549",
        period: "/mês",
        originalPrice: null,
        savings: null
      },
      diamond: {
        price: "R$ 1.299",
        period: "/mês",
        originalPrice: null,
        savings: null
      }
    },
    annual: {
      basic: {
        price: "12x de 197",
        period: "/ano",
        originalPrice: "R$ 3.588",
        savings: "33%"
      },
      gold: {
        price: "12x de 397",
        period: "/ano",
        originalPrice: "R$ 4.788",
        savings: "39%"
      },
      diamond: {
        price: "12x de 797",
        period: "/ano",
        originalPrice: "R$ 5.988",
        savings: "28%"
      }
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

  // Auto-scroll carousel
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 2500); // Auto-scroll every 2.5 seconds

    return () => clearInterval(interval);
  }, [carouselApi]);
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
        {/* Mouse Follower Light */}
        <div ref={mouseFollowerRef} className="fixed w-96 h-96 bg-primary/2 rounded-full blur-[100px] pointer-events-none z-0 transition-all duration-100 ease-out opacity-60" style={{
        transform: 'translate(-192px, -192px)'
      }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-4 animate-fade-in">
              <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
                Tecnologia, produtos exclusivos e crescimento exponencial
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in text-white">
              O <span className="gradient-dynamic-text">Maior Ecossistema</span> de Vendas Online do Brasil
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in font-medium">Comece a vender sem precisar investir em estoque e transforme suas vendas online em um negócio de verdade.</p>
            
            
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in">
              <Button variant="hero" size="xl" className="w-full sm:w-auto text-lg px-8 py-4 hover-scale shadow-glow" asChild>
                <a href="#planos">
                  <Zap className="mr-3 h-6 w-6" />
                  Começar Agora
                </a>
              </Button>
            </div>
            
            {/* Logo Carousel */}
            <div className="mt-16 animate-fade-in">
              <p className="text-sm text-gray-400 text-center mb-8">Integrações disponíveis</p>
              <Carousel opts={{
              align: "start",
              loop: true
            }} setApi={setCarouselApi} className="w-full max-w-5xl mx-auto">
                <CarouselContent className="flex items-center -ml-2 md:-ml-4">
                  {[{
                  src: blingLogo,
                  alt: "Bling",
                  name: "Bling"
                }, {
                  src: madeiraMadeiraLogo,
                  alt: "MadeiraMadeira",
                  name: "MadeiraMadeira"
                }, {
                  src: magaluLogo,
                  alt: "Magalu",
                  name: "Magalu"
                }, {
                  src: mlLogo,
                  alt: "Mercado Livre",
                  name: "Mercado Livre"
                }, {
                  src: shopeeLogo,
                  alt: "Shopee",
                  name: "Shopee"
                }, {
                  src: tiktokLogo,
                  alt: "TikTok",
                  name: "TikTok"
                }].map((logo, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="flex flex-col items-center justify-center p-4 h-24">
                        <div className="h-14 w-24 flex items-center justify-center mb-2">
                          <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain opacity-60 filter grayscale" />
                        </div>
                        <span className="text-xs text-gray-400 text-center font-medium">{logo.name}</span>
                      </div>
                    </CarouselItem>)}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Journey Section */}
            <div className="mt-20 animate-fade-in">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  O caminho é complexo, mas nós te guiamos
                </h3>
                <p className="text-gray-300 text-lg">
                  Da sua primeira venda até se tornar um empresário de sucesso
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <img 
                  src={careerPathIllustration} 
                  alt="Caminho do iniciante ao empresário" 
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Iniciante</h4>
                  <p className="text-gray-300 text-sm">
                    Comece do zero com nosso catálogo pronto e suporte dedicado
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Vendedor</h4>
                  <p className="text-gray-300 text-sm">
                    Escale suas vendas com integração automática em múltiplos marketplaces
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Empresário</h4>
                  <p className="text-gray-300 text-sm">
                    Gerencie seu negócio com dashboards completos e crescimento exponencial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 Pedras Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O Caminho das <span className="gradient-dynamic-text">7 Pedras</span> para Vender Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um método testado e aprovado que guia você passo a passo desde o início até se tornar um empresário de sucesso
            </p>
          </div>

          {/* Caminho das Pedras */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: "Incentivo Inicial",
                  description: "Te ajudamos a montar sua loja, conectar aos marketplaces e instalar as ferramentas certas. Tudo pronto para começar sem dor de cabeça.",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  number: 2,
                  title: "Dinheiro no Bolso", 
                  description: "Com tudo no ar, o foco é vender. Disponibilizamos as técnicas que fazem nossos membros faturarem milhões todos os meses.",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  number: 3,
                  title: "Produtos Validados",
                  description: "Com as técnicas certas, você precisa saber o que vender. Tenha acesso a mais de 1.400 produtos já testados, com preço de custo direto da China.",
                  color: "from-purple-400 to-purple-600"
                },
                {
                  number: 4,
                  title: "Sua Venda, Nosso Envio",
                  description: "Depois da venda, é necessário entregar o produto. Mas nós cuidamos disso. Você vende, e nós cuidamos do resto: separamos, embalamos e enviamos.",
                  color: "from-amber-400 to-amber-600"
                },
                {
                  number: 5,
                  title: "Descomplicando",
                  description: "Com muitas vendas acontecendo, fica difícil acompanhar tudo. Desenvolvemos um painel simples que mostra todas as métricas de forma intuitiva.",
                  color: "from-rose-400 to-rose-600"
                },
                {
                  number: 6,
                  title: "Seja um Empresário",
                  description: "Com o dinheiro entrando, chegou a hora de crescer. Te ajudamos a abrir seu CNPJ e organizar sua contabilidade para criar sua empresa com facilidade.",
                  color: "from-indigo-400 to-indigo-600"
                },
                {
                  number: 7,
                  title: "Aumentando o Lucro",
                  description: "Participe de importações em container compartilhado e aumente sua margem de lucro com produtos direto da China - você faz o pedido, nós importamos.",
                  color: "from-teal-400 to-teal-600"
                }
              ].map((pedra, index) => (
                <div key={pedra.number} className="flex items-start gap-6 group">
                  {/* Pedra */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pedra.color} rounded-[40%_60%_70%_30%/60%_30%_70%_40%] shadow-2xl transform rotate-12 group-hover:rotate-0 transition-all duration-500 hover:shadow-elegant group-hover:scale-110 relative overflow-hidden`}>
                      {/* Brilho da pedra */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm drop-shadow-lg">{pedra.number}</span>
                      </div>
                    </div>
                    
                    {/* Linha conectora */}
                    {index < 6 && (
                      <div className="absolute left-1/2 top-16 w-0.5 h-8 bg-gradient-to-b from-primary/60 to-primary/20 transform -translate-x-1/2"></div>
                    )}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="bg-card border rounded-2xl p-6 flex-1 group-hover:shadow-elegant transition-all duration-300">
                    <h3 className="text-xl font-bold mb-3 text-primary">{pedra.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{pedra.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button variant="hero" size="lg" asChild>
                <a href="#planos">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Começar Minha Jornada
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <video src="https://soudropbrasil.com.br/wp-content/uploads/2025/07/Soudrop-final-2.mp4" controls playsInline className="w-full h-auto rounded-2xl shadow-elegant">
                Seu navegador não suporta vídeos.
              </video>
            </div>
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsAnimation.ref as any} className={`py-20 bg-gradient-subtle transition-all duration-700 ${benefitsAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Uma estrutura <span className="bg-gradient-primary bg-clip-text text-transparent">feita para você</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className={`bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant ${benefitsAnimation.isVisible ? 'animate-slide-left delay-100' : 'opacity-0 translate-x-8'}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Integração Facilitada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Integre rapidamente suas lojas com Magalu, Shopee, Mercado Livre, Bling e mais — tudo em um único painel.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={`bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant ${benefitsAnimation.isVisible ? 'animate-slide-up delay-200' : 'opacity-0 translate-y-8'}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Produtos Validados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Acesse mais de 1400 produtos prontos para venda, com anúncios, imagens, títulos e descrições configurados automaticamente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={`bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-elegant ${benefitsAnimation.isVisible ? 'animate-slide-right delay-300' : 'opacity-0 translate-x-8'}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Logística Automatizada</CardTitle>
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
                <CardTitle className="text-xl">Dashboard Intuitivo</CardTitle>
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
                <CardTitle className="text-xl">Alta Margem de Lucro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Participe de importações em container compartilhado e aumente sua margem de lucro com produtos direto da China.
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
      <section ref={featuresAnimation.ref as any} id="funcionalidades" className={`py-20 transition-all duration-700 ${featuresAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
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
                  Conecte suas lojas na Soudrop de forma rápida e fácil. Com apenas alguns cliques, seus produtos são sincronizados, sem dores de cabeça.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Magalu, Shopee, Mercado Livre...</span>
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
                      <img src={amazonLogo} alt="TikTok Shop" className="h-8 w-8 mx-auto mb-2 object-contain" />
                      <div className="text-sm">TikTok Shop</div>
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
                      <img src={newLogo} alt="Bling" className="h-12 w-12 mx-auto mb-2 object-contain" />
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

      {/* Marketplace Marquee */}
      <MarketplaceMarquee />

      {/* Sales Management Dashboard Section */}
      <section ref={dashboardAnimation.ref as any} className={`py-20 bg-gradient-subtle transition-all duration-700 ${dashboardAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
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

          {/* Dashboard Preview Image */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-primary/20 bg-gradient-card">
                <img src={dashboardPreview} alt="Dashboard Soudrop mostrando métricas detalhadas de vendas em tempo real" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
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
                  <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Status de Envio</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <div className="w-6 h-6 bg-primary/20 rounded mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-600 rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Data</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor Pago pelo Cliente</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <Package className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor do Produto</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor Recebido</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <BarChart3 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Taxa de Marketplace</div>
                </div>
              </div>

              {/* Second Row of Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Valor de Custo</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Lucro</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-muted-foreground">Frete</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 text-center">
                  <div className="w-6 h-6 bg-green-600/20 rounded mx-auto mb-2 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded"></div>
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
                <div className="text-center text-muted-foreground">
                  Veja todas essas informações, de todos os seus marketplaces no nosso DashBoard
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

      {/* Comparison Section */}
      <section ref={comparisonAnimation.ref as any} className={`py-20 bg-background transition-all duration-700 ${comparisonAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O caminho nunca foi <span className="bg-gradient-primary bg-clip-text text-transparent">tão fácil</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Without Soudrop */}
            <Card className="bg-gradient-card border-destructive/20 hover:border-destructive/40 transition-all duration-300">
              <CardHeader>
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle className="text-2xl text-destructive">Sem a Soudrop</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="text-sm">Galpão para estoque</span>
                    <span className="text-lg font-bold text-destructive">R$ 10.000+/mês</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="text-sm">Gasto com logística</span>
                    <span className="text-lg font-bold text-destructive">R$ 1.800/mês</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="text-sm">Funcionários para embalar</span>
                    <span className="text-lg font-bold text-destructive">R$ 3.200/mês</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="text-sm">Sistema de gestão</span>
                    <span className="text-lg font-bold text-destructive">R$ 3.700/mês</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                    <span className="text-sm">Tempo operacional</span>
                    <span className="text-lg font-bold text-destructive">74h/semana</span>
                  </div>
                </div>
                <div className="border-t border-destructive/20 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total mensal:</span>
                    <span className="text-2xl font-bold text-destructive">R$ 18.700+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* With Soudrop */}
            <Card className="bg-gradient-primary border-primary shadow-elegant">
              <CardHeader>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-primary-foreground">Com a Soudrop</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded-lg">
                    <span className="text-sm text-primary-foreground">Galpão para estoques</span>
                    <span className="text-lg font-bold text-primary-foreground">R$ 0</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded-lg">
                    <span className="text-sm text-primary-foreground">Gasto com logística</span>
                    <span className="text-lg font-bold text-primary-foreground">R$ 0</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded-lg">
                    <span className="text-sm text-primary-foreground">Funcionários para embalar</span>
                    <span className="text-lg font-bold text-primary-foreground">R$ 0</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded-lg">
                    <span className="text-sm text-primary-foreground">Sistema de gestão</span>
                    <span className="text-lg font-bold text-primary-foreground">Incluso</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary-foreground/10 rounded-lg">
                    <span className="text-sm text-primary-foreground">Tempo perdido com operacional</span>
                    <span className="text-lg font-bold text-primary-foreground">0h/semana</span>
                  </div>
                </div>
                <div className="border-t border-primary-foreground/20 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary-foreground">Plano mensal:</span>
                    <span className="text-2xl font-bold text-primary-foreground">R$ 297</span>
                  </div>
                </div>
                <div className="bg-primary-foreground/20 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-primary-foreground">
                    Economiza mais de R$ 18.400/mês
                  </div>
                  <div className="text-sm text-primary-foreground/80">
                    + Foco total em vendas
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Cases Section */}
      <section ref={videoCasesAnimation.ref as any} className={`py-20 bg-gradient-subtle transition-all duration-700 ${videoCasesAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Quem faz parte, aprova</span>
            </h2>
          </div>

          <div className="relative">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full max-w-6xl mx-auto">
              <CarouselContent className="flex items-center -ml-2 md:-ml-4">
                {/* Video Case 1 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/S684xH3HM90" title="Case 1" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Video Case 2 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/i_CJm-spTns" title="Case 2" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Video Case 3 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/LCkqdMEERSU" title="Case 3" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Video Case 4 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/eT7fWX4KYIo" title="Case 4" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Video Case 5 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/EUA6NEXaRxw" title="Case 5" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Video Case 6 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/xRTvE_eypKo" title="Case 6" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                {/* Video Case 7 */}
                <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-card border-primary/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video">
                        <iframe src="https://www.youtube.com/embed/gOU3AVRrdbs" title="Case 7" className="w-full h-full" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              
              {/* Navigation arrows - responsive positioning */}
              <CarouselPrevious className="md:-left-12 -left-2 md:top-1/2 top-full md:translate-y-0 translate-y-4" />
              <CarouselNext className="md:-right-12 -right-2 md:top-1/2 top-full md:translate-y-0 translate-y-4" />
            </Carousel>
          </div>
          
          {/* Call to action button after cases */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#planos">
                <Users className="mr-2 h-5 w-5" />
                Quero fazer parte
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Unique Differential Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Importe seus produtos da{" "}
                <span className="text-green-500">China</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Mesmo sem saber como fazer isso
              </p>
            </div>
            
            {/* Process Flow */}
            <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Funciona em 4 passos práticos
                </h3>
              </div>
              {/* Mobile Layout - Vertical */}
              <div className="md:hidden space-y-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <Search className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 1</h3>
                  <p className="text-muted-foreground font-medium">Escolha o produto</p>
                  <p className="text-muted-foreground text-sm mt-1">Você escolhe o produto que deseja importar.</p>
                </div>
                
                {/* Vertical Animated Line 1 */}
                <div className="flex justify-center">
                  <div className="relative w-1 h-16 bg-border rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 rounded-full transform -translate-y-full animate-fill-sequential-vertical-1"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <CreditCard className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 2</h3>
                  <p className="text-muted-foreground font-medium">Preço transparente</p>
                  <p className="text-muted-foreground text-sm mt-1">Mostramos o custo real até chegar no Brasil.</p>
                </div>

                {/* Vertical Animated Line 2 */}
                <div className="flex justify-center">
                  <div className="relative w-1 h-16 bg-border rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 rounded-full transform -translate-y-full animate-fill-sequential-vertical-2"></div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <Settings className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 3</h3>
                  <p className="text-muted-foreground font-medium">Importação sem dor de cabeça</p>
                  <p className="text-muted-foreground text-sm mt-1">Nós cuidamos de todo o processo.</p>
                </div>

                {/* Vertical Animated Line 3 */}
                <div className="flex justify-center">
                  <div className="relative w-1 h-16 bg-border rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 rounded-full transform -translate-y-full animate-fill-sequential-vertical-3"></div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <CheckSquare className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 4</h3>
                  <p className="text-muted-foreground font-medium">Você recebe pronto pra vender</p>
                  <p className="text-muted-foreground text-sm mt-1">Chega direto no seu estoque, sem burocracia.</p>
                </div>
              </div>

              {/* Desktop Layout - Horizontal */}
              <div className="hidden md:grid md:grid-cols-7 gap-4 items-center mb-12">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <Search className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 1</h3>
                  <p className="text-muted-foreground font-medium">Escolha o produto</p>
                  <p className="text-muted-foreground text-sm">Você escolhe o produto que deseja importar.</p>
                </div>
                
                {/* Horizontal Animated Connecting Line 1 */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full h-1 bg-border rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 rounded-full transform -translate-x-full animate-fill-sequential-1"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <CreditCard className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 2</h3>
                  <p className="text-muted-foreground font-medium">Preço transparente</p>
                  <p className="text-muted-foreground text-sm">Mostramos o custo real até chegar no Brasil.</p>
                </div>

                {/* Horizontal Animated Connecting Line 2 */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full h-1 bg-border rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 rounded-full transform -translate-x-full animate-fill-sequential-2"></div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <Settings className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 3</h3>
                  <p className="text-muted-foreground font-medium">Importação sem dor de cabeça</p>
                  <p className="text-muted-foreground text-sm">Nós cuidamos de todo o processo.</p>
                </div>

                {/* Horizontal Animated Connecting Line 3 */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full h-1 bg-border rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-green-500 rounded-full transform -translate-x-full animate-fill-sequential-3"></div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-2xl mb-6">
                    <CheckSquare className="h-10 w-10 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Passo 4</h3>
                  <p className="text-muted-foreground font-medium">Você recebe pronto pra vender</p>
                  <p className="text-muted-foreground text-sm">Chega direto no seu estoque, sem burocracia.</p>
                </div>
              </div>
              
              {/* Result */}
              <div className="border-t border-border pt-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-green-500 mb-6 flex items-center justify-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Sem quantidade mínima necessária!
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-md mx-auto mb-6">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-foreground">Sem quantidade mínima</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-foreground">Preços transparentes</span>
                    </div>
                  </div>
                  
                  {/* Diamond Plan Notice */}
                  <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      Disponível no Plano Diamond
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-2">
                🔒 SEGURANÇA E CONFIANÇA
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Seus dados e vendas sempre{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">protegidos</span>
            </h2>
            
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 md:p-12 shadow-elegant">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center relative">
                      <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center relative">
                        <div className="w-20 h-20 bg-primary/50 rounded-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <Lock className="h-8 w-8 text-primary-foreground" />
                          </div>
                        </div>
                      </div>
                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-primary/50 animate-ping animation-delay-300"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Segurança. Confiabilidade. Transparência.
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Na Soudrop, seus dados comerciais são protegidos com os mais altos padrões de segurança. 
                    Utilizamos criptografia de ponta e protocolos seguros para todas as transações.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Dados Criptografados</div>
                        <div className="text-sm text-muted-foreground">Todas as informações são protegidas com criptografia AES-256</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Integrações Seguras</div>
                        <div className="text-sm text-muted-foreground">Conexões certificadas com todos os marketplaces parceiros</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                      <div>
                        <div className="font-semibold text-foreground">Monitoramento 24/7</div>
                        <div className="text-sm text-muted-foreground">Sistema de segurança ativo com alertas em tempo real</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingAnimation.ref as any} id="planos" className={`py-20 transition-all duration-700 ${pricingAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Escolha o plano que melhor{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">atende suas necessidades</span>
            </h2>
            
            {/* Toggle Buttons */}
            <div className="flex items-center justify-center gap-2 bg-gradient-card rounded-lg p-1 w-fit mx-auto border border-primary/20">
              <button onClick={() => setIsAnnual(false)} className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${!isAnnual ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                Mensal
              </button>
              <button onClick={() => setIsAnnual(true)} className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${isAnnual ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                Anual
              </button>
            </div>
            
            {isAnnual && <div className="mt-4">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  💰 Economize até 39% no plano anual
                </Badge>
              </div>}
          </div>

          <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-3">
            {/* Basic Plan */}
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

            {/* Diamond Plan */}
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
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              {isAnnual ? "Aproveite um desconto de até 39% no plano anual e economize ainda mais!" : "Comece com flexibilidade no plano mensal!"}
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
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

      {/* FAQ Section */}
      <section ref={faqAnimation.ref as any} id="faq" className={`py-20 bg-gradient-subtle transition-all duration-700 ${faqAnimation.isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}>
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
                  A integração é feita de forma automática, conectando sua loja a marketplaces como Magalu, Shopee, Mercado Livre e outros. Após a configuração, seus produtos são sincronizados de forma rápida e você pode começar a vender imediatamente.
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

              <AccordionItem value="item-5" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Sou iniciante, a Soudrop serve pra mim?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  Sim! A Soudrop foi criada pensando especialmente em iniciantes no e-commerce. Nossa plataforma oferece todo o suporte necessário para você começar do zero, com produtos prontos, integrações automáticas e suporte especializado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Sou empresário, a Soudrop me atende?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  Perfeitamente! Nossos planos são escaláveis e atendem desde iniciantes até empresários experientes. Oferecemos soluções robustas de gestão, múltiplas integrações e suporte logístico completo para expandir seu negócio.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Quero só fornecedor, como funciona?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  Você pode acessar nossa rede de fornecedores através dos planos superiores. Temos catálogos completos com produtos nacionais e importados, incluindo acesso direto a fornecedores da China com preços diferenciados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-gradient-card border border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-lg font-semibold">Posso cadastrar meus próprios SKUs?</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  Sim! Além do nosso catálogo, você pode cadastrar seus próprios produtos e SKUs. A plataforma permite gestão completa do seu inventário pessoal junto com os produtos do nosso catálogo.
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
    </div>;
};
export default Index;