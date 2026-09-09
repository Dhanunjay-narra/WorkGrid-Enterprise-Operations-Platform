import { BiWidgetWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiWidgetWsHandler";
import { BiWidgetSearchIndex } from "../../../services/core-engine/src/analytics/search/BiWidgetSearchIndex";

describe("BiWidget Stress & Concurrency Load Test", () => {
  const search = new BiWidgetSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiWidgetWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
