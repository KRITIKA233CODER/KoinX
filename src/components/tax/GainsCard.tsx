import { fmtUSD } from "@/lib/tax-data";

interface Gains {
  stcgProfits: number;
  stcgLosses: number;
  ltcgProfits: number;
  ltcgLosses: number;
}

interface Props {
  title: string;
  variant: "default" | "primary";
  gains: Gains;
  savings?: number;
}

export function GainsCard({ title, variant, gains, savings }: Props) {
  const netST = gains.stcgProfits - gains.stcgLosses;
  const netLT = gains.ltcgProfits - gains.ltcgLosses;
  const realised = netST + netLT;

  const isPrimary = variant === "primary";
  const cardCls = isPrimary
    ? "bg-blue-600 text-white"
    : "bg-card text-card-foreground border border-border";
  const subText = isPrimary ? "text-white/80" : "text-muted-foreground";
  const divider = isPrimary ? "border-white/20" : "border-border";

  const Row = ({ label, st, lt }: { label: string; st: number; lt: number }) => (
    <div className="grid grid-cols-3 py-2 text-sm">
      <span className={subText}>{label}</span>
      <span className="text-right tabular-nums">{fmtUSD(st)}</span>
      <span className="text-right tabular-nums">{fmtUSD(lt)}</span>
    </div>
  );

  return (
    <div className={`flex flex-col rounded-xl p-5 sm:p-6 ${cardCls}`}>
      <h3 className="mb-4 text-base font-semibold sm:text-lg">{title}</h3>
      <div className={`grid grid-cols-3 border-b pb-2 text-xs font-medium ${divider} ${subText}`}>
        <span></span>
        <span className="text-right">Short-term</span>
        <span className="text-right">Long-term</span>
      </div>
      <div className={`divide-y ${divider}`}>
        <Row label="Profits" st={gains.stcgProfits} lt={gains.ltcgProfits} />
        <Row label="Losses" st={-Math.abs(gains.stcgLosses)} lt={-Math.abs(gains.ltcgLosses)} />
        <Row label="Net Capital Gains" st={netST} lt={netLT} />
      </div>
      <div className={`mt-4 flex items-center justify-between border-t pt-4 ${divider}`}>
        <span className="text-sm font-semibold sm:text-base">Realised Capital Gains:</span>
        <span className="text-xl font-bold tabular-nums sm:text-2xl">{fmtUSD(realised)}</span>
      </div>
      {isPrimary && savings && savings > 0 ? (
        <div className="mt-4 rounded-lg bg-white/15 px-4 py-3 text-center text-sm font-medium">
          🎉 You are going to save upto {fmtUSD(savings)}
        </div>
      ) : null}
    </div>
  );
}