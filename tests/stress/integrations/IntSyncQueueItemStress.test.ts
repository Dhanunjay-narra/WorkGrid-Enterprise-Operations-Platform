import { IntSyncQueueItemWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntSyncQueueItemWsHandler";
import { IntSyncQueueItemSearchIndex } from "../../../services/core-engine/src/integrations/search/IntSyncQueueItemSearchIndex";

describe("IntSyncQueueItem Stress & Concurrency Load Test", () => {
  const search = new IntSyncQueueItemSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntSyncQueueItemWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
