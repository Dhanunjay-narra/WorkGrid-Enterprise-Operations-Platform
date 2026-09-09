import { BiTimeSeriesProjectionWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiTimeSeriesProjectionWsHandler";
import { BiTimeSeriesProjectionSearchIndex } from "../../../services/core-engine/src/analytics/search/BiTimeSeriesProjectionSearchIndex";

describe("BiTimeSeriesProjection Stress & Concurrency Load Test", () => {
  const search = new BiTimeSeriesProjectionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiTimeSeriesProjectionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
