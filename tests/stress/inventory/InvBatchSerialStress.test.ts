import { InvBatchSerialWsHandler } from "../../../services/core-engine/src/inventory/websockets/InvBatchSerialWsHandler";
import { InvBatchSerialSearchIndex } from "../../../services/core-engine/src/inventory/search/InvBatchSerialSearchIndex";

describe("InvBatchSerial Stress & Concurrency Load Test", () => {
  const search = new InvBatchSerialSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => InvBatchSerialWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
