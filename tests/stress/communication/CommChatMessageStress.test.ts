import { CommChatMessageWsHandler } from "../../../services/core-engine/src/communication/websockets/CommChatMessageWsHandler";
import { CommChatMessageSearchIndex } from "../../../services/core-engine/src/communication/search/CommChatMessageSearchIndex";

describe("CommChatMessage Stress & Concurrency Load Test", () => {
  const search = new CommChatMessageSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommChatMessageWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
