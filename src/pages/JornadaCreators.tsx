import { useState } from "react";
import { Star, CheckCircle, Info, ChevronDown, DollarSign } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Level images
import level1Image from "@/assets/level-1-madeira.png";
import level2Image from "@/assets/level-2-pedra.png";
import level3Image from "@/assets/level-3-ferro.png";
import level4Image from "@/assets/level-4-carvao.png";
import level5Image from "@/assets/level-5-rubi.png";
import level6Image from "@/assets/level-6-safira.png";
import level7Image from "@/assets/level-7-esmeralda.png";
import level8Image from "@/assets/level-8-ouro.png";
import level9Image from "@/assets/level-9-diamante.png";

const levelImages: Record<number, string> = {
  1: level1Image,
  2: level2Image,
  3: level3Image,
  4: level4Image,
  5: level5Image,
  6: level6Image,
  7: level7Image,
  8: level8Image,
  9: level9Image,
};

const levels = [
  {
    level: 1,
    gmv: "0K",
    name: "Aprendiz",
    description: "O início de tudo. Você entra no jogo, aprende as regras e começa a construir seu próprio caminho.",
    commission: "13%",
    benefits: "Canal de Avisos Whatsapp e Canal do Youtube com Mentorias Semanais.",
    badge: "Benefício Inicial",
    badgeType: "initial",
    prize: "Comissão de 13%",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/20",
  },
  {
    level: 2,
    gmv: "20K",
    name: "Explorador",
    description: "Agora você domina o básico. Já entende o TikTok Shop, gera impacto e começa a inspirar outras pessoas.",
    commission: "15%",
    benefits: "Acesso ao Discord com Mentorias Exclusivas semanais",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Kit SouDrop + 1% Shop Ads",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/20",
  },
  {
    level: 3,
    gmv: "100K",
    name: "Forjador",
    description: "Você se torna referência. Suas vendas crescem, sua comunidade confia em você e sua execução fala por si.",
    commission: "18%",
    benefits: "Acesso a Canais Exclusivos no Discord",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa + Lark A1",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/20",
  },
  {
    level: 4,
    gmv: "250K",
    name: "Minerador",
    description: "Você domina sua arte. Suas estratégias são eficazes, seus resultados consistentes e sua presença marcante.",
    commission: "20%",
    benefits: "Melhores Amigos do Instagram + Canais Exclusivos no Discord.",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/20",
  },
  {
    level: 5,
    gmv: "500K",
    name: "Joalheiro",
    description: "Nível de elite. Você lidera pelo exemplo, movimenta o mercado e inspira toda a comunidade SouDrop.",
    commission: "20%",
    benefits: "Acesso VIP a eventos exclusivos da SouDrop",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa + iPhone 17 Pro",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-400/20",
  },
  {
    level: 6,
    gmv: "1M",
    name: "Lapidador",
    description: "Você ultrapassou as barreiras do comum. Já pensa grande, constrói influência e começa a deixar sua marca.",
    commission: "20%",
    benefits: "Mentoria individual com especialistas",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa + Experiência em Balneário Camboriú",
    note: "*Imagem meramente ilustrativa",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/20",
  },
  {
    level: 7,
    gmv: "5M",
    name: "Mestre das Gemas",
    description: "Agora você inspira uma geração de creators. Seu nome é reconhecido, sua trajetória é símbolo de constância e propósito.",
    commission: "20%",
    benefits: "Participação nos bastidores da SouDrop",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa + Viagem para Kenoa Resort em Maceió",
    note: "*Imagem meramente ilustrativa",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-500/20",
  },
  {
    level: 8,
    gmv: "10M",
    name: "Magnata",
    description: "Você se tornou força criadora. Move o mercado, cria tendências e molda o futuro do TikTok Shop.",
    commission: "20%",
    benefits: "Co-criação de produtos exclusivos",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa + Viagem para as Maldivas",
    note: "*Imagem meramente ilustrativa",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-400/20",
  },
  {
    level: 9,
    gmv: "50M",
    name: "Lendário",
    description: "O ápice da jornada. Onde o impacto vira legado, a comunidade te reconhece e o que você construiu se torna parte da história da SouDrop.",
    commission: "20%",
    benefits: "Legado permanente na comunidade",
    badge: "Prêmio Exclusivo",
    badgeType: "exclusive",
    prize: "Placa + Porsche 911",
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/20",
  },
];

const faqItems = [
  {
    question: "Quando vou receber as premiações?",
    answer: "As premiações são entregues após a confirmação do GMV atingido, geralmente dentro de 30 dias úteis após o fechamento do mês em que a meta foi batida.",
  },
  {
    question: "A partir de quando o GMV começa a contar?",
    answer: "O GMV será contabilizado a partir do primeiro dia do mês em que a inscrição for realizada, considerando todo o GMV gerado naquele mês.",
  },
  {
    question: "Preciso avisar alguém quando eu bater a meta de GMV?",
    answer: "Sim! Após você atingir o GMV da premiação, você precisa nos informar através do formulário disponível na seção de informações importantes.",
  },
  {
    question: "Preciso postar uma quantidade mínima de vídeos por dia?",
    answer: "Não há uma quantidade mínima obrigatória, mas recomendamos consistência para maximizar seus resultados e crescimento na plataforma.",
  },
  {
    question: "Eu vou receber todas as premiações?",
    answer: "Você receberá a premiação correspondente ao nível que atingir. As premiações são cumulativas conforme você avança nos níveis.",
  },
];

const JornadaCreators = () => {
  const [agreedTerms, setAgreedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Viva sua jornada como
                <br />
                creator da SouDrop:
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Ganhe mais dinheiro
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  em cada venda!
                </span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl">
                A SouDrop criou o programa de Creators mais premiado e mais respeitado do TikTok Shop. Assim que você entra, sua comissão deixa de ser 7,5% e sobe automaticamente para 13%, e conforme você cresce, ela pode chegar a 20%!
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-cyan-500/25">
                Participar Agora
              </button>
            </div>

            {/* Right Column - Team Image with floating icons */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <p className="text-2xl font-bold">SouDrop CREATORS</p>
                    <p className="text-sm mt-2">Imagem da equipe</p>
                  </div>
                </div>
              </div>
              
              {/* Floating money icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center rotate-12 shadow-lg shadow-cyan-500/30 animate-pulse">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/4 -right-8 w-14 h-14 bg-cyan-400 rounded-xl flex items-center justify-center -rotate-6 shadow-lg shadow-cyan-400/30 animate-pulse" style={{ animationDelay: "0.5s" }}>
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-4 right-1/4 w-20 h-20 bg-cyan-500 rounded-xl flex items-center justify-center rotate-6 shadow-lg shadow-cyan-500/30 animate-pulse" style={{ animationDelay: "1s" }}>
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Journey Title Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Criamos uma jornada para os</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Creators
            </span>{" "}
            que querem ir além.
          </h2>
          <p className="text-gray-400 text-lg">
            Além das comissões mais altas do mercado, você ainda desbloqueia prêmios conforme bate metas:
          </p>
        </div>
      </section>

      {/* Levels Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level) => (
              <div
                key={level.level}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${level.iconBg} rounded-full flex items-center justify-center`}>
                    {level.level === 2 ? (
                      <CheckCircle className={`w-5 h-5 ${level.iconColor}`} />
                    ) : (
                      <Star className={`w-5 h-5 ${level.iconColor}`} />
                    )}
                  </div>
                  <span className="text-gray-400">Nível {level.level}</span>
                </div>

                {/* GMV Number */}
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent mb-2">
                  {level.gmv}
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold mb-3">{level.name}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 min-h-[60px]">
                  {level.description}
                </p>

                {/* Commission */}
                <p className="text-sm mb-2">
                  <span className="font-semibold">Comissão</span>: {level.commission}
                </p>

                {/* Benefits */}
                <p className="text-gray-400 text-sm mb-4">
                  <span className="font-semibold text-white">Benefícios liberados:</span> {level.benefits}
                </p>

                {/* Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                      level.badgeType === "initial"
                        ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-white"
                        : "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                    }`}
                  >
                    <Star className="w-4 h-4" />
                    {level.badge}
                  </span>
                </div>

                {/* Prize Image */}
                <div className="aspect-[16/10] rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                  <img 
                    src={levelImages[level.level]} 
                    alt={`Nível ${level.level} - ${level.name}`} 
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>

                {/* Prize Text */}
                <p className="font-semibold mb-1">{level.prize}</p>
                {level.note && (
                  <p className="text-gray-500 text-xs">{level.note}</p>
                )}

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      style={{ width: `${(level.level / 9) * 100}%` }}
                    />
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Nível {level.level}/9</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Info className="w-6 h-6 text-gray-400" />
            <h2 className="text-3xl font-bold">Informações importantes</h2>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <p className="text-gray-300">Premiações sujeitas a alterações sem aviso prévio.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <p className="text-gray-300">
                Após você atingir o GMV da premiação, você precisa nos informar{" "}
                <a href="#" className="text-cyan-400 underline hover:text-cyan-300">
                  clicando aqui
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <p className="text-gray-300">Não é possível somar o GMV de vários perfis do TikTok.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <p className="text-gray-300">Para participar da campanha, você precisa preencher o formulário.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <p className="text-gray-300">
                O GMV será contabilizado a partir do primeiro dia do mês em que a inscrição for realizada, considerando todo o GMV gerado naquele mês.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <p className="text-gray-300">A campanha é válida até 31 de dezembro de 2026.</p>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mb-6">
            <Checkbox
              id="terms"
              checked={agreedTerms}
              onCheckedChange={(checked) => setAgreedTerms(checked as boolean)}
              className="border-gray-600 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
            />
            <label htmlFor="terms" className="text-gray-300 text-sm cursor-pointer">
              Li e concordo com a{" "}
              <a href="#" className="text-cyan-400 hover:underline">
                Política de Uso de Imagem
              </a>{" "}
              e os termos da campanha.
            </label>
          </div>

          {/* CTA Button */}
          <button
            className={`px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all ${
              agreedTerms
                ? "hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/25"
                : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!agreedTerms}
          >
            Participar da Premiação
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Dúvidas{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>

          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-800"
              >
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline text-white [&[data-state=open]>svg]:rotate-180">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="h-16" />
    </div>
  );
};

export default JornadaCreators;
