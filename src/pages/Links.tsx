import { LinkCard } from "@/components/LinkCard";
import "../index.css"; 

const Index = () => {
  return (
    <div className="min-h-screen theme-links bg-gradient-links-background font-sans">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-black bg-gradient-soudrop bg-clip-text text-transparent mb-6 tracking-tight">
              Links Soudrop
            </h1>
            <p className="text-muted-foreground text-xl font-medium">
              Seus links essenciais em um só lugar
            </p>
          </div>

          {/* Links */}
          <div className="space-y-8 max-w-lg mx-auto">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <LinkCard
                title="Importe da China"
                description="Clique aqui para fazer importação"
                url="https://4k384ufgv64.typeform.com/to/vTnWbUQI"
                variant="red"
                type="import"
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <LinkCard
                title="Vender sem estoque"
                description="Acesse o site da Soudrop"
                url="https://4k384ufgv64.typeform.com/to/rIQVeImj"
                variant="soudrop"
                type="website"
              />
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <LinkCard
                title="Aprender a vender no digital"
                description="Tudo que você precisa para aprender vender online está aqui"
                url="https://soudrop.com.br/black-friday"
                variant="blue"
                type="course"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20">
            <p className="text-muted-foreground text-sm font-medium">
              © 2025 Soudrop. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

