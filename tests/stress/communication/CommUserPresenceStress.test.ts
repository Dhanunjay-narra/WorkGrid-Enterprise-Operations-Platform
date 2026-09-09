import { CommUserPresenceWsHandler } from "../../../services/core-engine/src/communication/websockets/CommUserPresenceWsHandler";
import { CommUserPresenceSearchIndex } from "../../../services/core-engine/src/communication/search/CommUserPresenceSearchIndex";

describe("CommUserPresence Stress & Concurrency Load Test", () => {
  const search = new CommUserPresenceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommUserPresenceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
