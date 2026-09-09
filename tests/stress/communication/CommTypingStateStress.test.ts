import { CommTypingStateWsHandler } from "../../../services/core-engine/src/communication/websockets/CommTypingStateWsHandler";
import { CommTypingStateSearchIndex } from "../../../services/core-engine/src/communication/search/CommTypingStateSearchIndex";

describe("CommTypingState Stress & Concurrency Load Test", () => {
  const search = new CommTypingStateSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommTypingStateWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
