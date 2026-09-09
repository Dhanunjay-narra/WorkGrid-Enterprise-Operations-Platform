import { BiAggregatedDailyMetricWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiAggregatedDailyMetricWsHandler";
import { BiAggregatedDailyMetricSearchIndex } from "../../../services/core-engine/src/analytics/search/BiAggregatedDailyMetricSearchIndex";

describe("BiAggregatedDailyMetric Stress & Concurrency Load Test", () => {
  const search = new BiAggregatedDailyMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiAggregatedDailyMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
