import { SupQueueWsHandler } from "../../../services/core-engine/src/support/websockets/SupQueueWsHandler";
import { SupQueueSearchIndex } from "../../../services/core-engine/src/support/search/SupQueueSearchIndex";

describe("SupQueue Stress & Concurrency Load Test", () => {
  const search = new SupQueueSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => SupQueueWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
