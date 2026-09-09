import { HrTaxDeductionWsHandler } from "../../../services/core-engine/src/hr/websockets/HrTaxDeductionWsHandler";
import { HrTaxDeductionSearchIndex } from "../../../services/core-engine/src/hr/search/HrTaxDeductionSearchIndex";

describe("HrTaxDeduction Stress & Concurrency Load Test", () => {
  const search = new HrTaxDeductionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => HrTaxDeductionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
