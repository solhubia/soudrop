import { useState } from 'react';
import { ProdutoCalculado } from '@/types/dashboard';
import { formatPercent, formatNumber } from '@/utils/kpiCalculations';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProdutosTableProps {
  produtos: ProdutoCalculado[];
}

type SortField = 'sku' | 'giroPercentual' | 'diasDesdeEntrada' | 'estoqueAtual' | 'quantidadeVendida';
type SortDirection = 'asc' | 'desc';

const ITEMS_PER_PAGE = 10;

export function ProdutosTable({ produtos }: ProdutosTableProps) {
  const [sortField, setSortField] = useState<SortField>('giroPercentual');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedProdutos = [...produtos].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    const direction = sortDirection === 'asc' ? 1 : -1;
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return aValue.localeCompare(bValue) * direction;
    }
    return ((aValue as number) - (bValue as number)) * direction;
  });

  const totalPages = Math.ceil(sortedProdutos.length / ITEMS_PER_PAGE);
  const paginatedProdutos = sortedProdutos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-white transition-colors"
    >
      {children}
      {sortField === field && (
        sortDirection === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
      )}
    </button>
  );

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-5 lg:p-6 border-b border-slate-800">
        <h3 className="text-lg font-semibold text-white">Detalhamento de Produtos</h3>
        <p className="text-sm text-slate-400 mt-1">{produtos.length} produtos encontrados</p>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400">
                <SortButton field="sku">SKU</SortButton>
              </TableHead>
              <TableHead className="text-slate-400 min-w-[200px]">Descrição</TableHead>
              <TableHead className="text-slate-400">Marca</TableHead>
              <TableHead className="text-slate-400">Vendedor</TableHead>
              <TableHead className="text-slate-400 text-right">Importado</TableHead>
              <TableHead className="text-slate-400 text-right">
                <SortButton field="estoqueAtual">Estoque</SortButton>
              </TableHead>
              <TableHead className="text-slate-400 text-right">
                <SortButton field="quantidadeVendida">Vendido</SortButton>
              </TableHead>
              <TableHead className="text-slate-400 text-right">
                <SortButton field="giroPercentual">Giro %</SortButton>
              </TableHead>
              <TableHead className="text-slate-400 text-right">
                <SortButton field="diasDesdeEntrada">Dias</SortButton>
              </TableHead>
              <TableHead className="text-slate-400 text-center">Meta Giro</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedProdutos.map((produto) => (
              <TableRow key={produto.sku} className="border-slate-800 hover:bg-slate-800/50">
                <TableCell className="text-white font-mono text-sm">{produto.sku}</TableCell>
                <TableCell className="text-slate-300 text-sm max-w-[200px] truncate" title={produto.descricao}>
                  {produto.descricao}
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      produto.marcaKpi === 'Snel Home' 
                        ? 'border-blue-500/50 text-blue-400' 
                        : produto.marcaKpi === 'Snel Ferramentas'
                        ? 'border-emerald-500/50 text-emerald-400'
                        : 'border-purple-500/50 text-purple-400'
                    }`}
                  >
                    {produto.marcaKpi.replace('Snel ', '')}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-300 text-sm">{produto.vendedor}</TableCell>
                <TableCell className="text-right text-slate-300">{formatNumber(produto.qtdImportada)}</TableCell>
                <TableCell className="text-right text-white font-medium">{formatNumber(produto.estoqueAtual)}</TableCell>
                <TableCell className="text-right text-emerald-400 font-medium">{formatNumber(produto.quantidadeVendida)}</TableCell>
                <TableCell className="text-right">
                  <span className={`font-semibold ${
                    produto.giroPercentual >= 80 ? 'text-emerald-400' : 
                    produto.giroPercentual >= 50 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {formatPercent(produto.giroPercentual)}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <span className={`font-medium ${
                    produto.diasDesdeEntrada <= 45 ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {produto.diasDesdeEntrada}d
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {produto.bateuMetaGiro ? (
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      ✓ Sim
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                      ✗ Não
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-4 border-t border-slate-800">
          <p className="text-sm text-slate-400">
            Mostrando {(currentPage - 1) * ITEMS_PER_PAGE + 1} a {Math.min(currentPage * ITEMS_PER_PAGE, produtos.length)} de {produtos.length}
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm text-slate-400 px-2">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
