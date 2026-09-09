import { SupCsatScoreWsHandler } from "../../../services/core-engine/src/support/websockets/SupCsatScoreWsHandler";
import { SupCsatScoreSearchIndex } from "../../../services/core-engine/src/support/search/SupCsatScoreSearchIndex";

describe("SupCsatScore Stress & Concurrency Load Test", () => {
  const search = new SupCsatScoreSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupCsatScoreWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
