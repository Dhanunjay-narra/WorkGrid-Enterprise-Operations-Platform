import { CommThreadReplyWsHandler } from "../../../services/core-engine/src/communication/websockets/CommThreadReplyWsHandler";
import { CommThreadReplySearchIndex } from "../../../services/core-engine/src/communication/search/CommThreadReplySearchIndex";

describe("CommThreadReply Stress & Concurrency Load Test", () => {
  const search = new CommThreadReplySearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommThreadReplyWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
