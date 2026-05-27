import { ChevronDown, Info } from "lucide-react";
import { useState } from "react";

export function Disclaimer() {
  const [open, setOpen] = useState(true);
  return (
    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
          <Info className="h-4 w-4" />
          Important Notes & Disclaimers
        </span>
        <ChevronDown className={`h-4 w-4 text-blue-600 dark:text-blue-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="list-disc space-y-2 px-9 pb-4 text-sm text-blue-900/90 dark:text-blue-100/80">
          <li>Tax harvesting allows offsetting capital gains with losses to reduce overall tax liability.</li>
          <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor.</li>
          <li>Capital gains are calculated based on your selected assets and current market prices.</li>
          <li>Realised gains shown here are estimates — actual reported values may differ.</li>
          <li>Selecting holdings does not actually execute trades — this is a planning tool only.</li>
        </ul>
      )}
    </div>
  );
}