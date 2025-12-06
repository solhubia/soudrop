import { 
  Produto, 
  Venda, 
  Meta, 
  ProdutoCalculado, 
  MarcaKpiStats, 
  VendedorStats,
  MarcaKpi,
  Vendedor,
  VENDEDOR_MARCA_MAP,
  MARCA_VENDEDOR_MAP,
  FiltrosDashboard,
  PeriodoFiltro
} from '@/types/dashboard';
import { differenceInDays, isWithinInterval, startOfMonth, endOfMonth, subDays, parseISO } from 'date-fns';

export function getDateRangeFromPeriodo(periodo: PeriodoFiltro): { start: Date; end: Date } {
  const hoje = new Date();
  
  switch (periodo) {
    case 'mes-atual':
      return { start: startOfMonth(hoje), end: endOfMonth(hoje) };
    case 'ultimos-30':
      return { start: subDays(hoje, 30), end: hoje };
    case 'ultimos-60':
      return { start: subDays(hoje, 60), end: hoje };
    case 'ultimos-90':
      return { start: subDays(hoje, 90), end: hoje };
    default:
      return { start: startOfMonth(hoje), end: endOfMonth(hoje) };
  }
}

export function filterVendasByPeriodo(vendas: Venda[], periodo: PeriodoFiltro): Venda[] {
  const { start, end } = getDateRangeFromPeriodo(periodo);
  
  return vendas.filter(venda => {
    const dataVenda = parseISO(venda.dataVenda);
    return isWithinInterval(dataVenda, { start, end });
  });
}

export function calcularDiasDesdeEntrada(dataEntradaEstoque: string): number {
  const dataEntrada = parseISO(dataEntradaEstoque);
  const hoje = new Date();
  return differenceInDays(hoje, dataEntrada);
}

export function calcularQuantidadeVendidaProduto(sku: string, vendas: Venda[]): number {
  return vendas
    .filter(v => v.sku === sku)
    .reduce((sum, v) => sum + v.qtdVendida, 0);
}

export function calcularGiroPercentual(quantidadeVendida: number, qtdImportada: number): number {
  if (qtdImportada === 0) return 0;
  return (quantidadeVendida / qtdImportada) * 100;
}

export function calcularProdutosComKpis(
  produtos: Produto[], 
  vendas: Venda[], 
  metas: Meta[]
): ProdutoCalculado[] {
  return produtos.map(produto => {
    const quantidadeVendida = calcularQuantidadeVendidaProduto(produto.sku, vendas);
    const giroPercentual = calcularGiroPercentual(quantidadeVendida, produto.qtdImportada);
    const diasDesdeEntrada = calcularDiasDesdeEntrada(produto.dataEntradaEstoque);
    
    const meta = metas.find(m => m.marcaKpi === produto.marcaKpi);
    const bateuMetaGiro = meta 
      ? giroPercentual >= (meta.metaGiroPercent * 100) && diasDesdeEntrada <= meta.metaGiroDias
      : false;

    return {
      ...produto,
      quantidadeVendida,
      giroPercentual,
      diasDesdeEntrada,
      bateuMetaGiro,
    };
  });
}

export function calcularTotalVendasMes(vendas: Venda[]): number {
  return vendas.reduce((sum, v) => sum + v.valorVenda, 0);
}

export function calcularTotalEstoqueAtual(produtos: Produto[]): number {
  return produtos.reduce((sum, p) => sum + p.estoqueAtual, 0);
}

export function calcularGiroMedio(produtosCalculados: ProdutoCalculado[]): number {
  if (produtosCalculados.length === 0) return 0;
  const totalGiro = produtosCalculados.reduce((sum, p) => sum + p.giroPercentual, 0);
  return totalGiro / produtosCalculados.length;
}

export function calcularStatsPorMarca(
  produtos: Produto[],
  vendas: Venda[],
  metas: Meta[],
  produtosCalculados: ProdutoCalculado[]
): MarcaKpiStats[] {
  const marcas: MarcaKpi[] = ['Snel Home', 'Snel Ferramentas', 'Snel Camping/Pets'];
  
  return marcas.map(marcaKpi => {
    const meta = metas.find(m => m.marcaKpi === marcaKpi);
    const produtosDaMarca = produtosCalculados.filter(p => p.marcaKpi === marcaKpi);
    
    // Vendas do mês da marca
    const skusDaMarca = produtos.filter(p => p.marcaKpi === marcaKpi).map(p => p.sku);
    const vendasDaMarca = vendas.filter(v => skusDaMarca.includes(v.sku));
    const totalVendasMes = vendasDaMarca.reduce((sum, v) => sum + v.valorVenda, 0);
    
    const metaFinanceiraMes = meta?.metaFinanceiraMes || 0;
    const percentualMetaFinanceira = metaFinanceiraMes > 0 ? (totalVendasMes / metaFinanceiraMes) * 100 : 0;
    
    const giroPercentMedio = produtosDaMarca.length > 0
      ? produtosDaMarca.reduce((sum, p) => sum + p.giroPercentual, 0) / produtosDaMarca.length
      : 0;
    
    const metaGiroPercent = meta?.metaGiroPercent || 0.8;
    const metaGiroDias = meta?.metaGiroDias || 45;
    
    const bateuMetaFinanceira = percentualMetaFinanceira >= 100;
    
    // Média de dias desde entrada
    const diasMedio = produtosDaMarca.length > 0
      ? produtosDaMarca.reduce((sum, p) => sum + p.diasDesdeEntrada, 0) / produtosDaMarca.length
      : 0;
    
    const bateuMetaGiro = giroPercentMedio >= (metaGiroPercent * 100) && diasMedio <= metaGiroDias;
    
    const elegivelBonus = bateuMetaFinanceira && bateuMetaGiro;

    return {
      marcaKpi,
      vendedor: VENDEDOR_MARCA_MAP[marcaKpi],
      totalVendasMes,
      metaFinanceiraMes,
      percentualMetaFinanceira,
      giroPercentMedio,
      metaGiroPercent: metaGiroPercent * 100,
      metaGiroDias,
      bateuMetaFinanceira,
      bateuMetaGiro,
      elegivelBonus,
    };
  });
}

export function calcularRankingVendedores(
  marcaStats: MarcaKpiStats[]
): VendedorStats[] {
  const vendedores: Vendedor[] = ['Guilherme', 'Fernando', 'Lucas'];
  
  const vendedorStats = vendedores.map(vendedor => {
    const marcas = MARCA_VENDEDOR_MAP[vendedor];
    const statsDoVendedor = marcaStats.filter(s => marcas.includes(s.marcaKpi));
    
    const totalVendasMes = statsDoVendedor.reduce((sum, s) => sum + s.totalVendasMes, 0);
    const metaFinanceiraMes = statsDoVendedor.reduce((sum, s) => sum + s.metaFinanceiraMes, 0);
    const percentualMetaFinanceira = metaFinanceiraMes > 0 ? (totalVendasMes / metaFinanceiraMes) * 100 : 0;
    
    const giroPercentMedio = statsDoVendedor.length > 0
      ? statsDoVendedor.reduce((sum, s) => sum + s.giroPercentMedio, 0) / statsDoVendedor.length
      : 0;
    
    const elegivelBonus = statsDoVendedor.every(s => s.elegivelBonus);

    return {
      vendedor,
      marcas,
      totalVendasMes,
      metaFinanceiraMes,
      percentualMetaFinanceira,
      giroPercentMedio,
      elegivelBonus,
    };
  });

  // Ordenar por vendas (desc), depois por giro (desc)
  return vendedorStats.sort((a, b) => {
    if (b.totalVendasMes !== a.totalVendasMes) {
      return b.totalVendasMes - a.totalVendasMes;
    }
    return b.giroPercentMedio - a.giroPercentMedio;
  });
}

export function aplicarFiltros(
  produtos: Produto[],
  vendas: Venda[],
  filtros: FiltrosDashboard
): { produtosFiltrados: Produto[]; vendasFiltradas: Venda[] } {
  // Filtrar vendas por período
  let vendasFiltradas = filterVendasByPeriodo(vendas, filtros.periodo);
  
  // Filtrar produtos por marca
  let produtosFiltrados = produtos;
  if (filtros.marcas.length > 0) {
    produtosFiltrados = produtos.filter(p => filtros.marcas.includes(p.marcaKpi));
  }
  
  // Filtrar produtos por vendedor
  if (filtros.vendedores.length > 0) {
    produtosFiltrados = produtosFiltrados.filter(p => filtros.vendedores.includes(p.vendedor));
  }
  
  // Filtrar vendas pelos SKUs dos produtos filtrados
  const skusFiltrados = produtosFiltrados.map(p => p.sku);
  vendasFiltradas = vendasFiltradas.filter(v => skusFiltrados.includes(v.sku));

  return { produtosFiltrados, vendasFiltradas };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('pt-BR').format(value);
}
