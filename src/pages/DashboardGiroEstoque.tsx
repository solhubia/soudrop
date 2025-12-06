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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-white">Dashboard de Giro de Estoque</h1>
                <p className="text-sm text-slate-400">Acompanhe o desempenho de vendas e giro por marca</p>
              </div>
            </div>
            <a 
              href="/dashboard/shipping/index2?p=4" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Ver pedidos expedidos
            </a>
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

        {/* Metas Financeiras Mensais - Estático */}
        <section className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-lg font-semibold text-white mb-4">Metas financeiras mensais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Lucas</p>
              <p className="text-white text-xl font-bold">R$ 450.000,00</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Guilherme</p>
              <p className="text-white text-xl font-bold">R$ 360.000,00</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-400 text-sm">Fernando</p>
              <p className="text-white text-xl font-bold">R$ 300.000,00</p>
            </div>
          </div>
        </section>

        {/* Pedidos Expedidos - Link externo */}
        <section className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-lg font-semibold text-white mb-4">Pedidos expedidos (consulta)</h2>
          <a
            href="https://app2.soudrop.com.br/dashboard/shipping/index2?p=4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Ver pedidos expedidos
          </a>
        </section>
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
