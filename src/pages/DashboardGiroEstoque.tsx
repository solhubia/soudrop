import { useState } from 'react';
import { FiltrosDashboard } from '@/types/dashboard';
import { useGiroDashboardData } from '@/hooks/useGiroDashboardData';
import { DashboardFilters } from '@/components/dashboard/DashboardFilters';
import { KpiCards } from '@/components/dashboard/KpiCards';
import { GiroPorMarcaChart } from '@/components/dashboard/GiroPorMarcaChart';
import { ProdutosTable } from '@/components/dashboard/ProdutosTable';
import { MetasPorMarcaTable } from '@/components/dashboard/MetasPorMarcaTable';
import { RankingVendedores } from '@/components/dashboard/RankingVendedores';
import { Loader2, BarChart3, AlertCircle } from 'lucide-react';

export default function DashboardGiroEstoque() {
  const [filtros, setFiltros] = useState<FiltrosDashboard>({
    periodo: 'mes-atual',
    marcas: [],
    vendedores: [],
  });

  const { data, loading, error } = useGiroDashboardData(filtros);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
          <p className="text-slate-400">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center p-6">
          <AlertCircle className="w-12 h-12 text-red-500" />
          <h2 className="text-xl font-semibold text-white">Erro ao carregar dados</h2>
          <p className="text-slate-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white">Dashboard de Giro de Estoque</h1>
              <p className="text-sm text-slate-400">Acompanhe o desempenho de vendas e giro por marca</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-6 py-6 space-y-6">
        {/* Filtros */}
        <DashboardFilters filtros={filtros} onFiltrosChange={setFiltros} />

        {/* KPIs Gerais */}
        <KpiCards 
          totalVendasMes={data.totalVendasMes}
          totalEstoqueAtual={data.totalEstoqueAtual}
          giroMedio={data.giroMedio}
        />

        {/* Gráfico de Giro por Marca */}
        <GiroPorMarcaChart marcaStats={data.marcaStats} />

        {/* Tabela de Produtos */}
        <ProdutosTable produtos={data.produtosCalculados} />

        {/* Saúde das Metas por Marca */}
        <MetasPorMarcaTable marcaStats={data.marcaStats} />

        {/* Ranking de Vendedores */}
        <RankingVendedores ranking={data.rankingVendedores} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 mt-10">
        <div className="container mx-auto px-4 lg:px-6">
          <p className="text-center text-sm text-slate-500">
            Dashboard de Giro de Estoque • Dados simulados para demonstração
          </p>
        </div>
      </footer>
    </div>
  );
}
