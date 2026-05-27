import { Checkbox } from "@/components/ui/checkbox";
import { fmtNum, fmtUSD, holdings, type Holding } from "@/lib/tax-data";
import { useMemo, useState } from "react";

interface Props {
  selected: Set<string>;
  onToggle: (coin: string) => void;
  onToggleAll: (all: boolean) => void;
}

function GainCell({ value, qty }: { value: number; qty: number }) {
  if (qty === 0 && value === 0)
    return <div className="text-sm text-muted-foreground">—</div>;
  const positive = value >= 0;
  return (
    <div className="text-sm">
      <div className={positive ? "text-green-500" : "text-red-500"}>
        {positive ? "+" : ""}{fmtUSD(value)}
      </div>
      <div className="text-xs text-muted-foreground">{fmtNum(qty, 6)}</div>
    </div>
  );
}

export function HoldingsTable({ selected, onToggle, onToggleAll }: Props) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? holdings : holdings.slice(0, 4);
  const allSelected = useMemo(() => holdings.every((h) => selected.has(h.coin)), [selected]);

  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="border-b border-border px-5 py-4">
        <h3 className="text-base font-semibold text-foreground sm:text-lg">Holdings</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-sm">
          <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-4 py-3 text-left font-medium">
                <div className="flex items-center gap-3">
                  <Checkbox checked={allSelected} onCheckedChange={(v) => onToggleAll(Boolean(v))} />
                  <span>Asset</span>
                </div>
              </th>
              <th className="px-4 py-3 text-right font-medium">Holdings</th>
              <th className="px-4 py-3 text-right font-medium">Current Value</th>
              <th className="px-4 py-3 text-right font-medium">Short-term</th>
              <th className="px-4 py-3 text-right font-medium">Long-term</th>
              <th className="px-4 py-3 text-right font-medium">Amount to Sell</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((h: Holding) => {
              const total = h.totalHolding * h.currentPrice;
              const checked = selected.has(h.coin);
              return (
                <tr key={h.coin} className="border-t border-border transition hover:bg-muted/40">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Checkbox checked={checked} onCheckedChange={() => onToggle(h.coin)} />
                      <img src={h.logo} alt={h.coinName} className="h-8 w-8 rounded-full bg-muted object-cover" loading="lazy" />
                      <div>
                        <div className="font-medium text-foreground">{h.coinName}</div>
                        <div className="text-xs text-muted-foreground">{h.coin}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="text-foreground">{fmtNum(h.totalHolding, 6)} {h.coin}</div>
                    <div className="text-xs text-muted-foreground">Avg {fmtUSD(h.averageBuyPrice)}</div>
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-foreground">{fmtUSD(total)}</td>
                  <td className="px-4 py-3 text-right"><GainCell value={h.stcg.gain} qty={h.stcg.balance} /></td>
                  <td className="px-4 py-3 text-right"><GainCell value={h.ltcg.gain} qty={h.ltcg.balance} /></td>
                  <td className="px-4 py-3 text-right tabular-nums text-foreground">
                    {checked ? `${fmtNum(h.totalHolding, 6)} ${h.coin}` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {holdings.length > 4 && (
        <div className="border-t border-border px-5 py-3 text-center">
          <button onClick={() => setShowAll(!showAll)} className="text-sm font-medium text-primary hover:underline">
            {showAll ? "Show less" : "View all"}
          </button>
        </div>
      )}
    </div>
  );
}