export interface Produto {
  sku: string;
  descricao: string;
  marcaKpi: 'Snel Home' | 'Snel Ferramentas' | 'Snel Camping/Pets';
  vendedor: 'Guilherme' | 'Fernando' | 'Lucas';
  ctn: string;
  containerBruto: string;
  dataEntradaEstoque: string;
  qtdImportada: number;
  estoqueAtual: number;
  ncm: string;
  categoriaPai: string;
  categoriaFilho: string;
}

export interface Venda {
  sku: string;
  dataVenda: string;
  qtdVendida: number;
  valorVenda: number;
  contaMarketplace: string;
}

export interface Meta {
  marcaKpi: 'Snel Home' | 'Snel Ferramentas' | 'Snel Camping/Pets';
  metaFinanceiraMes: number;
  metaGiroPercent: number;
  metaGiroDias: number;
}

export interface DashboardData {
  produtos: Produto[];
  vendas: Venda[];
  metas: Meta[];
}

export type MarcaKpi = 'Snel Home' | 'Snel Ferramentas' | 'Snel Camping/Pets';
export type Vendedor = 'Guilherme' | 'Fernando' | 'Lucas';

export const VENDEDOR_MARCA_MAP: Record<MarcaKpi, Vendedor> = {
  'Snel Home': 'Guilherme',
  'Snel Ferramentas': 'Fernando',
  'Snel Camping/Pets': 'Lucas',
};

export const MARCA_VENDEDOR_MAP: Record<Vendedor, MarcaKpi[]> = {
  'Guilherme': ['Snel Home'],
  'Fernando': ['Snel Ferramentas'],
  'Lucas': ['Snel Camping/Pets'],
};

export interface ProdutoCalculado extends Produto {
  quantidadeVendida: number;
  giroPercentual: number;
  diasDesdeEntrada: number;
  bateuMetaGiro: boolean;
}

export interface MarcaKpiStats {
  marcaKpi: MarcaKpi;
  vendedor: Vendedor;
  totalVendasMes: number;
  metaFinanceiraMes: number;
  percentualMetaFinanceira: number;
  giroPercentMedio: number;
  metaGiroPercent: number;
  metaGiroDias: number;
  bateuMetaFinanceira: boolean;
  bateuMetaGiro: boolean;
  elegivelBonus: boolean;
}

export interface VendedorStats {
  vendedor: Vendedor;
  marcas: MarcaKpi[];
  totalVendasMes: number;
  metaFinanceiraMes: number;
  percentualMetaFinanceira: number;
  giroPercentMedio: number;
  elegivelBonus: boolean;
}

export type PeriodoFiltro = 'mes-atual' | 'ultimos-30' | 'ultimos-60' | 'ultimos-90';

export interface FiltrosDashboard {
  periodo: PeriodoFiltro;
  marcas: MarcaKpi[];
  vendedores: Vendedor[];
}
