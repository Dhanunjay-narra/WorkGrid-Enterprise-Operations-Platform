import { EvtEventPartitionWsHandler } from "../../../services/core-engine/src/events/websockets/EvtEventPartitionWsHandler";
import { EvtEventPartitionSearchIndex } from "../../../services/core-engine/src/events/search/EvtEventPartitionSearchIndex";

describe("EvtEventPartition Stress & Concurrency Load Test", () => {
  const search = new EvtEventPartitionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtEventPartitionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
