import { PrjProjectWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjProjectWsHandler";
import { PrjProjectSearchIndex } from "../../../services/core-engine/src/projects/search/PrjProjectSearchIndex";

describe("PrjProject Stress & Concurrency Load Test", () => {
  const search = new PrjProjectSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjProjectWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
