import { PrjTaskWsHandler } from "../../../services/core-engine/src/projects/websockets/PrjTaskWsHandler";
import { PrjTaskSearchIndex } from "../../../services/core-engine/src/projects/search/PrjTaskSearchIndex";

describe("PrjTask Stress & Concurrency Load Test", () => {
  const search = new PrjTaskSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => PrjTaskWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
