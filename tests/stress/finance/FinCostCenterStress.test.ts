import { FinCostCenterWsHandler } from "../../../services/core-engine/src/finance/websockets/FinCostCenterWsHandler";
import { FinCostCenterSearchIndex } from "../../../services/core-engine/src/finance/search/FinCostCenterSearchIndex";

describe("FinCostCenter Stress & Concurrency Load Test", () => {
  const search = new FinCostCenterSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => FinCostCenterWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
