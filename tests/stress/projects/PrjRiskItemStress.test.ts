import { PrjRiskItemWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjRiskItemWsHandler";
import { PrjRiskItemSearchIndex } from "../../../services/core-engine/src/projects/search/PrjRiskItemSearchIndex";

describe("PrjRiskItem Stress & Concurrency Load Test", () => {
  const search = new PrjRiskItemSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjRiskItemWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
