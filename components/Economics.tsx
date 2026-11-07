"use client";
import { useState } from "react";
export default function Economics() {
  const [units, setUnits] = useState(100),
    [cost, setCost] = useState(1200);
  const price = 1999,
    unitMargin = price - cost,
    overhead = 75000;
  return (
    <div className="economics">
      <div>
        <span className="eyebrow">ILLUSTRATIVE HARDWARE SCENARIO</span>
        <h3>
          Show the math.
          <br />
          Then prove the inputs.
        </h3>
        <p>
          Adjust the assumptions. This is a planning model, not a sales forecast
          or supplier quote. The one-off prototype budget is separate.
        </p>
        <label>
          Units sold <strong>{units}</strong>
          <input
            type="range"
            min="25"
            max="1000"
            step="25"
            value={units}
            onChange={(e) => setUnits(+e.target.value)}
          />
        </label>
        <label>
          Delivered unit cost <strong>${cost.toLocaleString()}</strong>
          <input
            type="range"
            min="800"
            max="1800"
            step="50"
            value={cost}
            onChange={(e) => setCost(+e.target.value)}
          />
        </label>
      </div>
      <div className="economics-results">
        <div>
          <span>Target retail / rig only</span>
          <strong>$1,999</strong>
        </div>
        <div>
          <span>Hardware gross margin</span>
          <strong>{((unitMargin / price) * 100).toFixed(1)}%</strong>
        </div>
        <div>
          <span>Hardware revenue</span>
          <strong>${(units * price).toLocaleString()}</strong>
        </div>
        <div>
          <span>Gross profit before fixed costs</span>
          <strong>${(units * unitMargin).toLocaleString()}</strong>
        </div>
        <p>
          Illustrative fixed launch costs: $75,000. At this unit margin,
          approximately <b>{Math.ceil(overhead / unitMargin)} units</b> cover
          that assumption. Excludes payment fees, acquisition, returns, tax,
          financing, founder pay and any cost not included in the unit estimate.
          No demand, production cost, or break-even result is validated.
        </p>
      </div>
    </div>
  );
}
