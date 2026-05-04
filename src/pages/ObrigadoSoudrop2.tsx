import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const ObrigadoSoudrop2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const page = canvas.parentElement!;

    const resize = () => {
      canvas.width = page.offsetWidth;
      canvas.height = page.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#22c55e","#4ade80","#86efac","#facc15","#fde68a","#ffffff","#bbf7d0"];

    class Piece {
      x=0; y=0; vx=0; vy=0; w=0; h=0; angle=0; spin=0;
      opacity=1; gravity=0; drag=0; wobble=0; wobbleT=0;
      color=""; born=0; life=0;

      constructor(burst: boolean) { this.reset(burst); }

      reset(burst: boolean) {
        if (burst) {
          this.x = canvas.width * 0.5 + (Math.random() - 0.5) * 60;
          this.y = canvas.height * 0.22 + (Math.random() - 0.5) * 40;
          this.vx = (Math.random() - 0.5) * 9;
          this.vy = -(Math.random() * 9 + 4);
        } else {
          this.x = Math.random() * canvas.width;
          this.y = -12;
          this.vx = (Math.random() - 0.5) * 1.2;
          this.vy = Math.random() * 1.8 + 1;
        }
        this.w = Math.random() * 8 + 4;
        this.h = Math.random() * 4 + 2;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.18;
        this.opacity = 1;
        this.gravity = 0.13 + Math.random() * 0.06;
        this.drag = 0.985 + Math.random() * 0.01;
        this.wobble = Math.random() * 0.05;
        this.wobbleT = Math.random() * Math.PI * 2;
        this.born = Date.now();
        this.life = 3500 + Math.random() * 2500;
      }

      update() {
        this.wobbleT += this.wobble;
        this.vy += this.gravity;
        this.vx += Math.sin(this.wobbleT) * 0.04;
        this.vx *= this.drag;
        this.vy *= this.drag;
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.spin;
        const age = Date.now() - this.born;
        const tail = this.life - 600;
        if (age > tail) this.opacity = Math.max(0, 1 - (age - tail) / 600);
        if (age > this.life || this.y > canvas.height + 20) this.reset(false);
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore();
      }
    }

    const pieces = Array.from({ length: 90 }, (_, i) => new Piece(i < 55));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => { p.update(); p.draw(ctx); });
      rafRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="sd2-page min-h-screen bg-black relative overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 10 }}
      />

      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="max-w-2xl mx-auto text-center">

          {/* Icon com rings pulsantes */}
          <div className="sd2-icon-wrap flex justify-center mb-8">
            <div className="relative flex items-center justify-center">
              <div className="sd2-ring absolute w-24 h-24 rounded-full border border-green-500/40 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="sd2-ring2 absolute w-24 h-24 rounded-full border border-green-500/20 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.45s" }} />
              <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center sd2-check-anim">
                <CheckCircle2 className="w-10 h-10 text-green-400" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="sd2-badge inline-block mb-5 px-4 py-1.5 rounded-full text-green-400 text-xs font-semibold tracking-widest uppercase border border-green-500/30 bg-green-500/10 sd2-fade-1">
            Membro confirmado
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sd2-fade-2">
            Bem-vindo à{" "}
            <span className="sd2-shimmer-text">SouDrop</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-10 sd2-fade-3">
            Você acaba de entrar no maior hub de e-commerce do Brasil. Sua decisão de hoje é o começo de uma operação diferente, mais inteligente, mais lucrativa.
          </p>

          {/* CTA */}
          <div className="sd2-fade-4">
            <Button size="xl" asChild className="sd2-cta-btn bg-green-500 hover:bg-green-600 text-white font-bold px-10">
              <a href="https://app2.soudrop.com.br/dashboard?buyed=true" target="_blank" rel="noopener noreferrer">
                Entrar na plataforma
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="sd2-divider w-12 h-0.5 bg-green-500/25 mx-auto my-10 sd2-fade-5 rounded-full" />

          {/* Próximos Passos */}
          <div className="sd2-card bg-white/[.03] border border-white/[.08] rounded-2xl p-8 text-left sd2-fade-5">
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase text-center mb-6">
              Próximos passos
            </p>

            {[
              { n: "1", label: "Acesso", text: "Realize o login com o e-mail e senha que foram encaminhados ao seu e-mail" },
              { n: "2", label: "Integração", text: "Integre suas lojas na SouDrop" },
              { n: "3", label: "Resultados", text: "Publique os anúncios e desbloqueie suas vendas" },
            ].map((step, i) => (
              <div
                key={step.n}
                className={`flex items-start gap-4 py-4 sd2-step-${i + 1}${i < 2 ? " border-b border-white/[.05]" : ""}`}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 border border-green-500/25 flex items-center justify-center text-green-400 text-xs font-bold mt-0.5">
                  {step.n}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-1">{step.label}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ObrigadoSoudrop2;