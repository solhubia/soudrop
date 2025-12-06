import { VendedorStats } from '@/types/dashboard';
import { formatCurrency, formatPercent } from '@/utils/kpiCalculations';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

interface RankingVendedoresProps {
  ranking: VendedorStats[];
}

const PODIUM_ICONS = [Trophy, Medal, Award];
const PODIUM_COLORS = ['#f59e0b', '#94a3b8', '#cd7f32'];
const BAR_COLORS = ['#3b82f6', '#10b981', '#8b5cf6'];

export function RankingVendedores({ ranking }: RankingVendedoresProps) {
  const chartData = ranking.map((v, index) => ({
    vendedor: v.vendedor,
    vendas: v.totalVendasMes,
    percentualMeta: v.percentualMetaFinanceira,
    posicao: index + 1,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-semibold">{data.vendedor}</p>
          <p className="text-emerald-400 text-sm">{formatCurrency(data.vendas)}</p>
          <p className="text-slate-300 text-sm">{formatPercent(data.percentualMeta)} da meta</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/30 border border-slate-800 rounded-xl overflow-hidden">
      {/* Header com destaque */}
      <div className="relative p-6 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-600/10" />
        <div className="relative flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg shadow-amber-500/20">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Ranking de Vendedores</h3>
            <p className="text-sm text-slate-400">Performance do mês atual</p>
          </div>
        </div>
      </div>

      <div className="p-5 lg:p-6 space-y-6">
        {/* Gráfico de barras horizontais */}
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              layout="vertical"
              margin={{ top: 5, right: 80, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
              <XAxis 
                type="number" 
                tick={{ fill: '#94a3b8', fontSize: 12 }}
                axisLine={{ stroke: '#475569' }}
                tickFormatter={(value) => formatCurrency(value).replace('R$', '')}
              />
              <YAxis 
                dataKey="vendedor" 
                type="category"
                tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                axisLine={{ stroke: '#475569' }}
                width={70}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="vendas" 
                radius={[0, 4, 4, 0]}
                barSize={28}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={BAR_COLORS[index]} />
                ))}
                <LabelList 
                  dataKey="vendas" 
                  position="right" 
                  formatter={(value: number) => formatCurrency(value)}
                  style={{ fill: '#fff', fontSize: 12, fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabela detalhada */}
        <div className="rounded-lg border border-slate-800 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-800 hover:bg-transparent bg-slate-800/50">
                <TableHead className="text-slate-400 w-16">#</TableHead>
                <TableHead className="text-slate-400">Vendedor</TableHead>
                <TableHead className="text-slate-400">Marcas</TableHead>
                <TableHead className="text-slate-400 text-right">Vendas Mês</TableHead>
                <TableHead className="text-slate-400 text-right">Meta</TableHead>
                <TableHead className="text-slate-400 text-right">% Meta</TableHead>
                <TableHead className="text-slate-400 text-right">Giro %</TableHead>
                <TableHead className="text-slate-400 text-center">Bônus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ranking.map((vendedor, index) => {
                const PodiumIcon = PODIUM_ICONS[index];
                const isFirst = index === 0;
                
                return (
                  <TableRow 
                    key={vendedor.vendedor} 
                    className={`border-slate-800 ${
                      isFirst ? 'bg-amber-500/5 hover:bg-amber-500/10' : 'hover:bg-slate-800/50'
                    }`}
                  >
                    <TableCell>
                      <div className="flex items-center justify-center">
                        <PodiumIcon 
                          className="w-5 h-5" 
                          style={{ color: PODIUM_COLORS[index] }}
                        />
                      </div>
                    </TableCell>
                    <TableCell className={`font-semibold ${isFirst ? 'text-amber-400' : 'text-white'}`}>
                      {vendedor.vendedor}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {vendedor.marcas.map(marca => (
                          <Badge 
                            key={marca}
                            variant="outline" 
                            className={`text-xs ${
                              marca === 'Snel Home' 
                                ? 'border-blue-500/50 text-blue-400' 
                                : marca === 'Snel Ferramentas'
                                ? 'border-emerald-500/50 text-emerald-400'
                                : 'border-purple-500/50 text-purple-400'
                            }`}
                          >
                            {marca.replace('Snel ', '')}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-emerald-400 font-semibold">
                      {formatCurrency(vendedor.totalVendasMes)}
                    </TableCell>
                    <TableCell className="text-right text-slate-300">
                      {formatCurrency(vendedor.metaFinanceiraMes)}
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`font-semibold ${
                        vendedor.percentualMetaFinanceira >= 100 ? 'text-emerald-400' : 'text-yellow-400'
                      }`}>
                        {formatPercent(vendedor.percentualMetaFinanceira)}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`font-medium ${
                        vendedor.giroPercentMedio >= 80 ? 'text-emerald-400' : 'text-yellow-400'
                      }`}>
                        {formatPercent(vendedor.giroPercentMedio)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {vendedor.elegivelBonus ? (
                        <Badge className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                          <Trophy className="w-3 h-3 mr-1" /> SIM
                        </Badge>
                      ) : (
                        <Badge className="bg-slate-600 text-slate-300">NÃO</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
