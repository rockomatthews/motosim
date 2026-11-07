import test from "node:test";
import assert from "node:assert/strict";
import {
  CAMPAIGN,
  validateContribution,
  netContribution,
} from "../lib/campaign.mjs";
test("checkout accepts only server tiers with explicit consent and ignores client price", () => {
  assert.equal(
    validateContribution({ tier: "founder", consent: true, amount: 1 }).amount,
    10000,
  );
  assert.equal(
    validateContribution({ tier: "founder", consent: "true" }),
    null,
  );
  assert.equal(validateContribution({ tier: "custom", consent: true }), null);
  assert.equal(validateContribution(null), null);
});
const paid = (charge = {}) => ({
  status: "succeeded",
  currency: "usd",
  metadata: { campaign: CAMPAIGN },
  latest_charge: {
    paid: true,
    disputed: false,
    amount: 10000,
    amount_refunded: 0,
    ...charge,
  },
});
test("funding removes refunds and disputes from successful campaign payments", () => {
  assert.equal(netContribution(paid()), 10000);
  assert.equal(netContribution(paid({ amount_refunded: 2500 })), 7500);
  assert.equal(netContribution(paid({ amount_refunded: 10000 })), 0);
  assert.equal(netContribution(paid({ disputed: true })), 0);
});
test("unpaid, unrelated and non-USD activity cannot inflate funding", () => {
  assert.equal(
    netContribution({ ...paid(), status: "requires_payment_method" }),
    0,
  );
  assert.equal(
    netContribution({ ...paid(), metadata: { campaign: "other" } }),
    0,
  );
  assert.equal(netContribution({ ...paid(), currency: "eur" }), 0);
  assert.throws(() => netContribution({ ...paid(), latest_charge: undefined }));
});
