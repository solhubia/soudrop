import { MarcaKpiStats } from '@/types/dashboard';
import { formatCurrency, formatPercent } from '@/utils/kpiCalculations';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';

interface GiroPorMarcaChartProps {
  marcaStats: MarcaKpiStats[];
}

const COLORS = {
  'Snel Home': '#3b82f6',
  'Snel Ferramentas': '#10b981',
  'Snel Camping/Pets': '#8b5cf6',
};

export function GiroPorMarcaChart({ marcaStats }: GiroPorMarcaChartProps) {
  const data = marcaStats.map(stat => ({
    nome: stat.marcaKpi.replace('Snel ', ''),
    marcaKpi: stat.marcaKpi,
    giroPercent: stat.giroPercentMedio,
    totalVendas: stat.totalVendasMes,
    metaFinanceira: stat.metaFinanceiraMes,
    percentualMeta: stat.percentualMetaFinanceira,
    bateuGiro: stat.bateuMetaGiro,
    vendedor: stat.vendedor,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-xl">
          <p className="text-white font-semibold mb-2">{data.marcaKpi}</p>
          <p className="text-slate-300 text-sm">Vendedor: <span className="text-white">{data.vendedor}</span></p>
          <p className="text-slate-300 text-sm">Giro: <span className="text-blue-400 font-medium">{formatPercent(data.giroPercent)}</span></p>
          <p className="text-slate-300 text-sm">Vendas: <span className="text-emerald-400 font-medium">{formatCurrency(data.totalVendas)}</span></p>
          <p className="text-slate-300 text-sm">Meta: <span className="text-white">{formatCurrency(data.metaFinanceira)}</span></p>
          <p className="text-slate-300 text-sm">% da Meta: <span className="text-purple-400 font-medium">{formatPercent(data.percentualMeta)}</span></p>
          <p className={`text-sm mt-1 ${data.bateuGiro ? 'text-emerald-400' : 'text-red-400'}`}>
            {data.bateuGiro ? '✓ Bateu meta de giro' : '✗ Não bateu meta de giro'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 lg:p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Giro de Estoque por Marca</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="nome" 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              axisLine={{ stroke: '#475569' }}
            />
            <YAxis 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              axisLine={{ stroke: '#475569' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine 
              y={80} 
              stroke="#f59e0b" 
              strokeDasharray="5 5" 
              label={{ value: 'Meta 80%', fill: '#f59e0b', fontSize: 11, position: 'right' }}
            />
            <Bar 
              dataKey="giroPercent" 
              radius={[4, 4, 0, 0]}
              maxBarSize={80}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.marcaKpi as keyof typeof COLORS]} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
