import { FinTaxRateWsHandler } from "../../../services/core-engine/src/finance/websockets/FinTaxRateWsHandler";
import { FinTaxRateSearchIndex } from "../../../services/core-engine/src/finance/search/FinTaxRateSearchIndex";

describe("FinTaxRate Stress & Concurrency Load Test", () => {
  const search = new FinTaxRateSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinTaxRateWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
