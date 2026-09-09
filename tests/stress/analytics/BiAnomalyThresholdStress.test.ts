import { BiAnomalyThresholdWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiAnomalyThresholdWsHandler";
import { BiAnomalyThresholdSearchIndex } from "../../../services/core-engine/src/analytics/search/BiAnomalyThresholdSearchIndex";

describe("BiAnomalyThreshold Stress & Concurrency Load Test", () => {
  const search = new BiAnomalyThresholdSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiAnomalyThresholdWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
