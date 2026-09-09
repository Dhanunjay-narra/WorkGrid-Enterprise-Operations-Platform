import { BiCohortMetricWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiCohortMetricWsHandler";
import { BiCohortMetricSearchIndex } from "../../../services/core-engine/src/analytics/search/BiCohortMetricSearchIndex";

describe("BiCohortMetric Stress & Concurrency Load Test", () => {
  const search = new BiCohortMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiCohortMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
