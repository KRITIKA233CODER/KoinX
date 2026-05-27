import { useMemo, useState } from "react";
import { capitalGains, holdings } from "@/lib/tax-data";
import { Disclaimer } from "./Disclaimer";
import { GainsCard } from "./GainsCard";
import { Header } from "./Header";
import { HoldingsTable } from "./HoldingsTable";
import { useIsMobile } from "@/hooks/use-mobile";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function HowItWorks() {
  const isMobile = useIsMobile();

  const trigger = (
    <button
      type="button"
      className="text-xs font-semibold text-primary underline-offset-4 hover:underline sm:text-sm"
    >
      How it works?
    </button>
  );

  const content = (
    <div className="max-w-xs space-y-2 text-xs text-popover-foreground sm:text-sm">
      <p>
        We estimate your capital gains from current holdings and highlight how harvesting losses can reduce taxable gains. This is a planning preview and not trade execution.
      </p>
      <a href="#" className="inline-block font-medium text-primary underline-offset-4 hover:underline">
        Know more
      </a>
    </div>
  );

  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent align="start" className="w-80 max-w-[calc(100vw-2rem)]">
          {content}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <HoverCard openDelay={120} closeDelay={120}>
      <HoverCardTrigger asChild>{trigger}</HoverCardTrigger>
      <HoverCardContent align="start" className="w-80">
        {content}
      </HoverCardContent>
    </HoverCard>
  );
}

export function TaxHarvesting() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (coin: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(coin)) next.delete(coin);
      else next.add(coin);
      return next;
    });

  const toggleAll = (all: boolean) =>
    setSelected(all ? new Set(holdings.map((h) => h.coin)) : new Set());

  const preGains = {
    stcgProfits: capitalGains.stcg.profits,
    stcgLosses: capitalGains.stcg.losses,
    ltcgProfits: capitalGains.ltcg.profits,
    ltcgLosses: capitalGains.ltcg.losses,
  };

  const afterGains = useMemo(() => {
    const g = { ...preGains };
    for (const h of holdings) {
      if (!selected.has(h.coin)) continue;
      if (h.stcg.gain >= 0) g.stcgProfits += h.stcg.gain;
      else g.stcgLosses += Math.abs(h.stcg.gain);
      if (h.ltcg.gain >= 0) g.ltcgProfits += h.ltcg.gain;
      else g.ltcgLosses += Math.abs(h.ltcg.gain);
    }
    return g;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const preRealised =
    preGains.stcgProfits - preGains.stcgLosses + preGains.ltcgProfits - preGains.ltcgLosses;
  const afterRealised =
    afterGains.stcgProfits - afterGains.stcgLosses + afterGains.ltcgProfits - afterGains.ltcgLosses;
  const savings = preRealised > afterRealised ? preRealised - afterRealised : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Tax Harvesting</h1>
          <HowItWorks />
        </div>
        <Disclaimer />
        <div className="grid gap-4 md:grid-cols-2">
          <GainsCard title="Pre Harvesting" variant="default" gains={preGains} />
          <GainsCard title="After Harvesting" variant="primary" gains={afterGains} savings={savings} />
        </div>
        <HoldingsTable selected={selected} onToggle={toggle} onToggleAll={toggleAll} />
      </main>
    </div>
  );
}