import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { GOAL_CENTS } from "../lib/campaign.mjs";

test("campaign goal covers the complete budget including founder pay and fees", async () => {
  const budget = JSON.parse(await readFile(new URL("../public/downloads/motosim-roll-pitch-budget.json", import.meta.url), "utf8"));
  const total = budget.rows.reduce((sum, row) => sum + Math.round(row.usd * 100), 0);
  assert.equal(total, GOAL_CENTS);
  assert.equal(total, budget.plannedTotalUsd * 100);
  assert.equal(total + budget.unallocatedUsd * 100, budget.capUsd * 100);
  assert.equal(budget.rows.find(row => row.id === "RP13").usd, 6000);
  assert.equal(budget.rows.find(row => row.id === "RP14").usd, 880);
  assert.equal(budget.rows.find(row => row.id === "RP07").usd, 430);
  assert.equal(budget.rows.find(row => row.id === "RP12").usd, 2000);
  assert.equal(new Set(budget.rows.map(row => row.id)).size, budget.rows.length);
});
