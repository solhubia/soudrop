import { MarcaKpiStats } from '@/types/dashboard';
import { formatCurrency, formatPercent } from '@/utils/kpiCalculations';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';

interface MetasPorMarcaTableProps {
  marcaStats: MarcaKpiStats[];
}

export function MetasPorMarcaTable({ marcaStats }: MetasPorMarcaTableProps) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
      <div className="p-5 lg:p-6 border-b border-slate-800">
        <h3 className="text-lg font-semibold text-white">Saúde das Metas por Marca</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5 lg:p-6">
        {marcaStats.map((stat) => (
          <div 
            key={stat.marcaKpi}
            className={`relative rounded-xl border p-5 ${
              stat.elegivelBonus 
                ? 'border-emerald-500/30 bg-emerald-500/5' 
                : 'border-slate-700 bg-slate-800/30'
            }`}
          >
            {stat.elegivelBonus && (
              <div className="absolute -top-3 -right-3">
                <div className="bg-emerald-500 rounded-full p-2 shadow-lg shadow-emerald-500/30">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-white">{stat.marcaKpi}</h4>
                <p className="text-sm text-slate-400">{stat.vendedor}</p>
              </div>
              <Badge 
                className={`${
                  stat.marcaKpi === 'Snel Home' 
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
                    : stat.marcaKpi === 'Snel Ferramentas'
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                }`}
              >
                {stat.marcaKpi.replace('Snel ', '')}
              </Badge>
            </div>

            <div className="space-y-3">
              {/* Vendas do mês */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Vendas Mês</span>
                <span className="font-semibold text-white">{formatCurrency(stat.totalVendasMes)}</span>
              </div>
              
              {/* Meta financeira */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Meta Financeira</span>
                <span className="text-slate-300">{formatCurrency(stat.metaFinanceiraMes)}</span>
              </div>

              {/* Progresso da meta */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-slate-400">% da Meta</span>
                  <span className={`font-semibold ${
                    stat.percentualMetaFinanceira >= 100 ? 'text-emerald-400' : 'text-yellow-400'
                  }`}>
                    {formatPercent(stat.percentualMetaFinanceira)}
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all ${
                      stat.percentualMetaFinanceira >= 100 ? 'bg-emerald-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${Math.min(stat.percentualMetaFinanceira, 100)}%` }}
                  />
                </div>
              </div>

              {/* Giro */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Giro Médio</span>
                <span className={`font-semibold ${
                  stat.giroPercentMedio >= stat.metaGiroPercent ? 'text-emerald-400' : 'text-yellow-400'
                }`}>
                  {formatPercent(stat.giroPercentMedio)} / {formatPercent(stat.metaGiroPercent)}
                </span>
              </div>

              {/* Status das metas */}
              <div className="pt-3 border-t border-slate-700 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Meta Financeira</span>
                  {stat.bateuMetaFinanceira ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" /> Atingida
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-400 text-sm">
                      <XCircle className="w-4 h-4" /> Pendente
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Meta Giro</span>
                  {stat.bateuMetaGiro ? (
                    <span className="flex items-center gap-1 text-emerald-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" /> Atingida
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-400 text-sm">
                      <XCircle className="w-4 h-4" /> Pendente
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-slate-300">Elegível Bônus</span>
                  {stat.elegivelBonus ? (
                    <Badge className="bg-emerald-500 text-white">
                      <Trophy className="w-3 h-3 mr-1" /> SIM
                    </Badge>
                  ) : (
                    <Badge className="bg-slate-600 text-slate-300">NÃO</Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
