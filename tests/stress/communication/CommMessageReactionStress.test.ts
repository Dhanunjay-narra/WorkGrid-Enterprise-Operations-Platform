import { CommMessageReactionWsHandler } from "../../../services/core-engine/src/communication/websockets/CommMessageReactionWsHandler";
import { CommMessageReactionSearchIndex } from "../../../services/core-engine/src/communication/search/CommMessageReactionSearchIndex";

describe("CommMessageReaction Stress & Concurrency Load Test", () => {
  const search = new CommMessageReactionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommMessageReactionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
