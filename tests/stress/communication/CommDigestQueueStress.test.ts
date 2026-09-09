import { CommDigestQueueWsHandler } from "../../../services/core-engine/src/communication/websockets/CommDigestQueueWsHandler";
import { CommDigestQueueSearchIndex } from "../../../services/core-engine/src/communication/search/CommDigestQueueSearchIndex";

describe("CommDigestQueue Stress & Concurrency Load Test", () => {
  const search = new CommDigestQueueSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommDigestQueueWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
