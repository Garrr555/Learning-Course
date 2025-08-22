import { PricingTable } from "@clerk/nextjs";

export default function Billing() {
  return (
    <div>
        <h2 className="font-bold text-3xl mb-10">Select Billing</h2>
      <PricingTable />
    </div>
  );
}
