import { FiltrosDashboard, MarcaKpi, Vendedor, PeriodoFiltro } from '@/types/dashboard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Filter, X } from 'lucide-react';

interface DashboardFiltersProps {
  filtros: FiltrosDashboard;
  onFiltrosChange: (filtros: FiltrosDashboard) => void;
}

const PERIODOS: { value: PeriodoFiltro; label: string }[] = [
  { value: 'mes-atual', label: 'Mês atual' },
  { value: 'ultimos-30', label: 'Últimos 30 dias' },
  { value: 'ultimos-60', label: 'Últimos 60 dias' },
  { value: 'ultimos-90', label: 'Últimos 90 dias' },
];

const MARCAS: MarcaKpi[] = ['Snel Home', 'Snel Ferramentas', 'Snel Camping/Pets'];
const VENDEDORES: Vendedor[] = ['Guilherme', 'Fernando', 'Lucas'];

export function DashboardFilters({ filtros, onFiltrosChange }: DashboardFiltersProps) {
  const toggleMarca = (marca: MarcaKpi) => {
    const novasMarcas = filtros.marcas.includes(marca)
      ? filtros.marcas.filter(m => m !== marca)
      : [...filtros.marcas, marca];
    onFiltrosChange({ ...filtros, marcas: novasMarcas });
  };

  const toggleVendedor = (vendedor: Vendedor) => {
    const novosVendedores = filtros.vendedores.includes(vendedor)
      ? filtros.vendedores.filter(v => v !== vendedor)
      : [...filtros.vendedores, vendedor];
    onFiltrosChange({ ...filtros, vendedores: novosVendedores });
  };

  const limparFiltros = () => {
    onFiltrosChange({ periodo: 'mes-atual', marcas: [], vendedores: [] });
  };

  const temFiltrosAtivos = filtros.marcas.length > 0 || filtros.vendedores.length > 0;

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
        {/* Período */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-slate-400 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            Período
          </label>
          <div className="flex flex-wrap gap-2">
            {PERIODOS.map(({ value, label }) => (
              <Button
                key={value}
                variant={filtros.periodo === value ? 'default' : 'outline'}
                size="sm"
                onClick={() => onFiltrosChange({ ...filtros, periodo: value })}
                className={
                  filtros.periodo === value
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Marcas */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-slate-400 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5" />
            Marca KPI
          </label>
          <div className="flex flex-wrap gap-2">
            {MARCAS.map(marca => (
              <Badge
                key={marca}
                variant={filtros.marcas.includes(marca) ? 'default' : 'outline'}
                className={`cursor-pointer transition-all ${
                  filtros.marcas.includes(marca)
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
                onClick={() => toggleMarca(marca)}
              >
                {marca}
              </Badge>
            ))}
          </div>
        </div>

        {/* Vendedores */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium text-slate-400">Vendedor</label>
          <div className="flex flex-wrap gap-2">
            {VENDEDORES.map(vendedor => (
              <Badge
                key={vendedor}
                variant={filtros.vendedores.includes(vendedor) ? 'default' : 'outline'}
                className={`cursor-pointer transition-all ${
                  filtros.vendedores.includes(vendedor)
                    ? 'bg-purple-600 hover:bg-purple-700 text-white border-purple-600'
                    : 'border-slate-700 text-slate-300 hover:bg-slate-800'
                }`}
                onClick={() => toggleVendedor(vendedor)}
              >
                {vendedor}
              </Badge>
            ))}
          </div>
        </div>

        {/* Limpar filtros */}
        {temFiltrosAtivos && (
          <Button
            variant="ghost"
            size="sm"
            onClick={limparFiltros}
            className="text-slate-400 hover:text-white self-end"
          >
            <X className="w-4 h-4 mr-1" />
            Limpar
          </Button>
        )}
      </div>
    </div>
  );
}
