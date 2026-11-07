export const CAMPAIGN = "motosim-prototype-v1";
export const GOAL_CENTS = 1000000;
export const tiers = [
  {
    id: "supporter",
    name: "Pit crew",
    amount: 2500,
    title: "Be here from lap one.",
    benefits: [
      "Digital founding-supporter badge",
      "Quarterly prototype progress emails",
    ],
  },
  {
    id: "founder",
    name: "Founding rider",
    amount: 10000,
    title: "Help shape the machine.",
    benefits: [
      "Everything in Pit crew",
      "Invitations to online design briefings",
      "Opt-in name on our digital founders wall",
    ],
  },
  {
    id: "patron",
    name: "Apex partner",
    amount: 50000,
    title: "Get closer to the build.",
    benefits: [
      "Everything in Founding rider",
      "One private 30-minute virtual build walkthrough",
      "Recognition in the prototype build report (opt-in)",
    ],
  },
];
export function validateContribution(body) {
  if (!body || typeof body !== "object" || body.consent !== true) return null;
  return tiers.find((t) => t.id === body.tier) ?? null;
}
export function netContribution(intent) {
  if (
    !intent ||
    intent.status !== "succeeded" ||
    intent.currency !== "usd" ||
    intent.metadata?.campaign !== CAMPAIGN
  )
    return 0;
  const charges =
    intent.charges?.data ??
    (intent.latest_charge && typeof intent.latest_charge === "object"
      ? [intent.latest_charge]
      : []);
  if (!charges.length)
    throw new Error("Missing expanded charge for campaign payment");
  return charges.reduce(
    (sum, charge) =>
      sum +
      (charge.paid && !charge.disputed
        ? Math.max(0, charge.amount - charge.amount_refunded)
        : 0),
    0,
  );
}
