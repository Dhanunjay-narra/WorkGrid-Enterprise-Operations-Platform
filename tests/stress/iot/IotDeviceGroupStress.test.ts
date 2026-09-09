import { IotDeviceGroupWsHandler } from "../../../services/core-engine/src/iot/websockets/IotDeviceGroupWsHandler";
import { IotDeviceGroupSearchIndex } from "../../../services/core-engine/src/iot/search/IotDeviceGroupSearchIndex";

describe("IotDeviceGroup Stress & Concurrency Load Test", () => {
  const search = new IotDeviceGroupSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotDeviceGroupWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
