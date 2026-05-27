import { createFileRoute } from "@tanstack/react-router";
import { TaxHarvesting } from "@/components/tax/TaxHarvesting";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tax Harvesting | KoinX" },
      { name: "description", content: "Optimize your crypto capital gains with KoinX tax-loss harvesting." },
      { property: "og:title", content: "Tax Harvesting | KoinX" },
      { property: "og:description", content: "Optimize your crypto capital gains with KoinX tax-loss harvesting." },
    ],
  }),
  component: Index,
});

function Index() {
  return <TaxHarvesting />;
}
