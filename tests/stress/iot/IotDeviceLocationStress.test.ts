import { IotDeviceLocationWsHandler } from "../../../services/core-engine/src/iot/websockets/IotDeviceLocationWsHandler";
import { IotDeviceLocationSearchIndex } from "../../../services/core-engine/src/iot/search/IotDeviceLocationSearchIndex";

describe("IotDeviceLocation Stress & Concurrency Load Test", () => {
  const search = new IotDeviceLocationSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotDeviceLocationWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
