import { useState, useEffect, useMemo } from 'react';
import { 
  DashboardData, 
  FiltrosDashboard, 
  ProdutoCalculado, 
  MarcaKpiStats, 
  VendedorStats,
  MarcaKpi,
  Vendedor
} from '@/types/dashboard';
import {
  aplicarFiltros,
  calcularProdutosComKpis,
  calcularTotalVendasMes,
  calcularTotalEstoqueAtual,
  calcularGiroMedio,
  calcularStatsPorMarca,
  calcularRankingVendedores,
} from '@/utils/kpiCalculations';

// Mock data - substituir pela chamada real do endpoint
const mockData: DashboardData = {
  produtos: [
    {
      sku: "26612",
      descricao: "Mini Micro Retifica Elétrica 180W",
      marcaKpi: "Snel Home",
      vendedor: "Guilherme",
      ctn: "C1B",
      containerBruto: "C1",
      dataEntradaEstoque: "2024-10-15",
      qtdImportada: 1000,
      estoqueAtual: 200,
      ncm: "8467.29.91",
      categoriaPai: "Casa e construção",
      categoriaFilho: "Ferramentas"
    },
    {
      sku: "26613",
      descricao: "Furadeira de Impacto 650W",
      marcaKpi: "Snel Home",
      vendedor: "Guilherme",
      ctn: "C1B",
      containerBruto: "C1",
      dataEntradaEstoque: "2024-09-20",
      qtdImportada: 500,
      estoqueAtual: 80,
      ncm: "8467.21.00",
      categoriaPai: "Casa e construção",
      categoriaFilho: "Ferramentas"
    },
    {
      sku: "26614",
      descricao: "Kit Chaves de Fenda 32 Peças",
      marcaKpi: "Snel Ferramentas",
      vendedor: "Fernando",
      ctn: "C2A",
      containerBruto: "C2",
      dataEntradaEstoque: "2024-11-01",
      qtdImportada: 2000,
      estoqueAtual: 1200,
      ncm: "8205.40.00",
      categoriaPai: "Casa e construção",
      categoriaFilho: "Ferramentas manuais"
    },
    {
      sku: "26615",
      descricao: "Alicate Universal 8 Polegadas",
      marcaKpi: "Snel Ferramentas",
      vendedor: "Fernando",
      ctn: "C2A",
      containerBruto: "C2",
      dataEntradaEstoque: "2024-10-25",
      qtdImportada: 1500,
      estoqueAtual: 600,
      ncm: "8203.20.90",
      categoriaPai: "Casa e construção",
      categoriaFilho: "Ferramentas manuais"
    },
    {
      sku: "26616",
      descricao: "Barraca Camping 4 Pessoas",
      marcaKpi: "Snel Camping/Pets",
      vendedor: "Lucas",
      ctn: "C3B",
      containerBruto: "C3",
      dataEntradaEstoque: "2024-11-10",
      qtdImportada: 300,
      estoqueAtual: 150,
      ncm: "6306.22.00",
      categoriaPai: "Esporte e lazer",
      categoriaFilho: "Camping"
    },
    {
      sku: "26617",
      descricao: "Coleira LED para Cães M",
      marcaKpi: "Snel Camping/Pets",
      vendedor: "Lucas",
      ctn: "C3B",
      containerBruto: "C3",
      dataEntradaEstoque: "2024-10-05",
      qtdImportada: 800,
      estoqueAtual: 250,
      ncm: "4201.00.00",
      categoriaPai: "Pets",
      categoriaFilho: "Acessórios"
    },
    {
      sku: "26618",
      descricao: "Serra Circular 1400W",
      marcaKpi: "Snel Home",
      vendedor: "Guilherme",
      ctn: "C1C",
      containerBruto: "C1",
      dataEntradaEstoque: "2024-08-15",
      qtdImportada: 400,
      estoqueAtual: 45,
      ncm: "8467.22.00",
      categoriaPai: "Casa e construção",
      categoriaFilho: "Ferramentas"
    },
    {
      sku: "26619",
      descricao: "Trena a Laser 50m",
      marcaKpi: "Snel Ferramentas",
      vendedor: "Fernando",
      ctn: "C2B",
      containerBruto: "C2",
      dataEntradaEstoque: "2024-11-20",
      qtdImportada: 600,
      estoqueAtual: 520,
      ncm: "9015.80.90",
      categoriaPai: "Casa e construção",
      categoriaFilho: "Medição"
    },
  ],
  vendas: [
    { sku: "26612", dataVenda: "2024-12-01", qtdVendida: 50, valorVenda: 4500, contaMarketplace: "magalu-snel-home" },
    { sku: "26612", dataVenda: "2024-12-02", qtdVendida: 80, valorVenda: 7200, contaMarketplace: "mercadolivre-snel-home" },
    { sku: "26612", dataVenda: "2024-12-03", qtdVendida: 120, valorVenda: 10800, contaMarketplace: "shopee-snel-home" },
    { sku: "26613", dataVenda: "2024-12-01", qtdVendida: 30, valorVenda: 5400, contaMarketplace: "magalu-snel-home" },
    { sku: "26613", dataVenda: "2024-12-04", qtdVendida: 45, valorVenda: 8100, contaMarketplace: "mercadolivre-snel-home" },
    { sku: "26614", dataVenda: "2024-12-01", qtdVendida: 100, valorVenda: 3500, contaMarketplace: "magalu-snel-ferramentas" },
    { sku: "26614", dataVenda: "2024-12-03", qtdVendida: 150, valorVenda: 5250, contaMarketplace: "shopee-snel-ferramentas" },
    { sku: "26615", dataVenda: "2024-12-02", qtdVendida: 200, valorVenda: 6000, contaMarketplace: "mercadolivre-snel-ferramentas" },
    { sku: "26615", dataVenda: "2024-12-04", qtdVendida: 180, valorVenda: 5400, contaMarketplace: "magalu-snel-ferramentas" },
    { sku: "26616", dataVenda: "2024-12-01", qtdVendida: 25, valorVenda: 7500, contaMarketplace: "magalu-snel-camping" },
    { sku: "26616", dataVenda: "2024-12-05", qtdVendida: 35, valorVenda: 10500, contaMarketplace: "mercadolivre-snel-camping" },
    { sku: "26617", dataVenda: "2024-12-02", qtdVendida: 150, valorVenda: 4500, contaMarketplace: "shopee-snel-camping" },
    { sku: "26617", dataVenda: "2024-12-03", qtdVendida: 200, valorVenda: 6000, contaMarketplace: "magalu-snel-camping" },
    { sku: "26618", dataVenda: "2024-12-01", qtdVendida: 60, valorVenda: 18000, contaMarketplace: "mercadolivre-snel-home" },
    { sku: "26618", dataVenda: "2024-12-04", qtdVendida: 45, valorVenda: 13500, contaMarketplace: "magalu-snel-home" },
    { sku: "26619", dataVenda: "2024-12-02", qtdVendida: 40, valorVenda: 4800, contaMarketplace: "shopee-snel-ferramentas" },
  ],
  metas: [
    { marcaKpi: "Snel Home", metaFinanceiraMes: 360000, metaGiroPercent: 0.8, metaGiroDias: 45 },
    { marcaKpi: "Snel Ferramentas", metaFinanceiraMes: 300000, metaGiroPercent: 0.8, metaGiroDias: 45 },
    { marcaKpi: "Snel Camping/Pets", metaFinanceiraMes: 450000, metaGiroPercent: 0.8, metaGiroDias: 45 },
  ],
};

// Função para fazer o fetch real - descomentar quando tiver o endpoint
// async function fetchDashboardData(): Promise<DashboardData> {
//   const response = await fetch('/api/dashboard/giro-estoque');
//   if (!response.ok) {
//     throw new Error('Erro ao carregar dados do dashboard');
//   }
//   return response.json();
// }

export function useGiroDashboardData(filtros: FiltrosDashboard) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        // Substituir por: const result = await fetchDashboardData();
        // Simulando delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(mockData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const computedData = useMemo(() => {
    if (!data) return null;

    const { produtosFiltrados, vendasFiltradas } = aplicarFiltros(
      data.produtos,
      data.vendas,
      filtros
    );

    const produtosCalculados = calcularProdutosComKpis(
      produtosFiltrados,
      vendasFiltradas,
      data.metas
    );

    const totalVendasMes = calcularTotalVendasMes(vendasFiltradas);
    const totalEstoqueAtual = calcularTotalEstoqueAtual(produtosFiltrados);
    const giroMedio = calcularGiroMedio(produtosCalculados);

    const marcaStats = calcularStatsPorMarca(
      data.produtos, // Usar todos os produtos para stats por marca
      vendasFiltradas,
      data.metas,
      calcularProdutosComKpis(data.produtos, vendasFiltradas, data.metas)
    );

    const rankingVendedores = calcularRankingVendedores(marcaStats);

    return {
      produtosCalculados,
      totalVendasMes,
      totalEstoqueAtual,
      giroMedio,
      marcaStats,
      rankingVendedores,
      metas: data.metas,
    };
  }, [data, filtros]);

  return {
    data: computedData,
    loading,
    error,
  };
}
