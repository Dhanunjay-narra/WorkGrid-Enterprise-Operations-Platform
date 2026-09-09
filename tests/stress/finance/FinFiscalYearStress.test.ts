import { FinFiscalYearWsHandler } from "../../../services/core-engine/src/finance/websockets/FinFiscalYearWsHandler";
import { FinFiscalYearSearchIndex } from "../../../services/core-engine/src/finance/search/FinFiscalYearSearchIndex";

describe("FinFiscalYear Stress & Concurrency Load Test", () => {
  const search = new FinFiscalYearSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinFiscalYearWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
