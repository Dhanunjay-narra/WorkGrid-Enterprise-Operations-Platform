import { CommDirectMessageWsHandler } from "../../../services/core-engine/src/communication/websockets/CommDirectMessageWsHandler";
import { CommDirectMessageSearchIndex } from "../../../services/core-engine/src/communication/search/CommDirectMessageSearchIndex";

describe("CommDirectMessage Stress & Concurrency Load Test", () => {
  const search = new CommDirectMessageSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommDirectMessageWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
