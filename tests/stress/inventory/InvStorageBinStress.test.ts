import { InvStorageBinWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvStorageBinWsHandler";
import { InvStorageBinSearchIndex } from "../../../services/core-engine/src/inventory/search/InvStorageBinSearchIndex";

describe("InvStorageBin Stress & Concurrency Load Test", () => {
  const search = new InvStorageBinSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvStorageBinWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
