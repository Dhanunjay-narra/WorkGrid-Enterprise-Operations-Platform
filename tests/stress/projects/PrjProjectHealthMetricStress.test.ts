import { PrjProjectHealthMetricWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjProjectHealthMetricWsHandler";
import { PrjProjectHealthMetricSearchIndex } from "../../../services/core-engine/src/projects/search/PrjProjectHealthMetricSearchIndex";

describe("PrjProjectHealthMetric Stress & Concurrency Load Test", () => {
  const search = new PrjProjectHealthMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjProjectHealthMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
