import { EvtStreamSnapshotWsHandler } from "../../../services/core-engine/src/events/websockets/EvtStreamSnapshotWsHandler";
import { EvtStreamSnapshotSearchIndex } from "../../../services/core-engine/src/events/search/EvtStreamSnapshotSearchIndex";

describe("EvtStreamSnapshot Stress & Concurrency Load Test", () => {
  const search = new EvtStreamSnapshotSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => EvtStreamSnapshotWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
