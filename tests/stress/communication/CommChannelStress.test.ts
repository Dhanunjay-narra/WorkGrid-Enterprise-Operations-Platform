import { CommChannelWsHandler } from "../../../services/core-engine/src/communication/websockets/CommChannelWsHandler";
import { CommChannelSearchIndex } from "../../../services/core-engine/src/communication/search/CommChannelSearchIndex";

describe("CommChannel Stress & Concurrency Load Test", () => {
  const search = new CommChannelSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => CommChannelWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
