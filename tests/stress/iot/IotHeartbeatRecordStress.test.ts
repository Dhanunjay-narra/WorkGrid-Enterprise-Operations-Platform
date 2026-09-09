import { IotHeartbeatRecordWsHandler } from "../../../services/core-engine/src/iot/websockets/IotHeartbeatRecordWsHandler";
import { IotHeartbeatRecordSearchIndex } from "../../../services/core-engine/src/iot/search/IotHeartbeatRecordSearchIndex";

describe("IotHeartbeatRecord Stress & Concurrency Load Test", () => {
  const search = new IotHeartbeatRecordSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotHeartbeatRecordWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
