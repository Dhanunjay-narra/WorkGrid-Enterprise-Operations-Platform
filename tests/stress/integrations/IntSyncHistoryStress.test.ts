import { IntSyncHistoryWsHandler } from "../../../services/core-engine/src/integrations/websockets/IntSyncHistoryWsHandler";
import { IntSyncHistorySearchIndex } from "../../../services/core-engine/src/integrations/search/IntSyncHistorySearchIndex";

describe("IntSyncHistory Stress & Concurrency Load Test", () => {
  const search = new IntSyncHistorySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IntSyncHistoryWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
