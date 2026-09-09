import { IotDeviceWsHandler } from "../../../services/core-engine/src/iot/websockets/IotDeviceWsHandler";
import { IotDeviceSearchIndex } from "../../../services/core-engine/src/iot/search/IotDeviceSearchIndex";

describe("IotDevice Stress & Concurrency Load Test", () => {
  const search = new IotDeviceSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotDeviceWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
