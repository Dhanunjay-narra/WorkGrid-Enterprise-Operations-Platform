import { BiDataSourceWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiDataSourceWsHandler";
import { BiDataSourceSearchIndex } from "../../../services/core-engine/src/analytics/search/BiDataSourceSearchIndex";

describe("BiDataSource Stress & Concurrency Load Test", () => {
  const search = new BiDataSourceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiDataSourceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
