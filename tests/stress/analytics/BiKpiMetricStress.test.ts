import { BiKpiMetricWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiKpiMetricWsHandler";
import { BiKpiMetricSearchIndex } from "../../../services/core-engine/src/analytics/search/BiKpiMetricSearchIndex";

describe("BiKpiMetric Stress & Concurrency Load Test", () => {
  const search = new BiKpiMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiKpiMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
