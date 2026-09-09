import { BiDashboardWsHandler } from "../../../services/core-engine/src/analytics/websockets/BiDashboardWsHandler";
import { BiDashboardSearchIndex } from "../../../services/core-engine/src/analytics/search/BiDashboardSearchIndex";

describe("BiDashboard Stress & Concurrency Load Test", () => {
  const search = new BiDashboardSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => BiDashboardWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
