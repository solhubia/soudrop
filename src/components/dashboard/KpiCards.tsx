import { TrendingUp, Package, RotateCcw } from 'lucide-react';
import { formatCurrency, formatPercent, formatNumber } from '@/utils/kpiCalculations';

interface KpiCardsProps {
  totalVendasMes: number;
  totalEstoqueAtual: number;
  giroMedio: number;
}

export function KpiCards({ totalVendasMes, totalEstoqueAtual, giroMedio }: KpiCardsProps) {
  const cards = [
    {
      title: 'Vendas do Mês',
      value: formatCurrency(totalVendasMes),
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Estoque Atual',
      value: `${formatNumber(totalEstoqueAtual)} un`,
      icon: Package,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Giro Médio',
      value: formatPercent(giroMedio),
      icon: RotateCcw,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl p-5 lg:p-6"
        >
          {/* Gradient accent */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />
          
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400 font-medium">{card.title}</p>
              <p className="text-2xl lg:text-3xl font-bold text-white mt-2">{card.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${card.bgColor}`}>
              <card.icon className={`w-6 h-6 ${card.iconColor}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
