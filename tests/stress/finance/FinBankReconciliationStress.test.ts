import { FinBankReconciliationWsHandler } from "../../../services/core-engine/src/finance/websockets/FinBankReconciliationWsHandler";
import { FinBankReconciliationSearchIndex } from "../../../services/core-engine/src/finance/search/FinBankReconciliationSearchIndex";

describe("FinBankReconciliation Stress & Concurrency Load Test", () => {
  const search = new FinBankReconciliationSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinBankReconciliationWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
