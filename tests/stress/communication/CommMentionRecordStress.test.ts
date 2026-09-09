import { CommMentionRecordWsHandler } from "../../../services/core-engine/src/communication/websockets/CommMentionRecordWsHandler";
import { CommMentionRecordSearchIndex } from "../../../services/core-engine/src/communication/search/CommMentionRecordSearchIndex";

describe("CommMentionRecord Stress & Concurrency Load Test", () => {
  const search = new CommMentionRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommMentionRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
