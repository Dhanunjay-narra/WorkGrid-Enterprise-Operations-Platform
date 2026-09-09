import { IotDeviceCommandWsHandler } from "../../../services/core-engine/src/iot/websockets/IotDeviceCommandWsHandler";
import { IotDeviceCommandSearchIndex } from "../../../services/core-engine/src/iot/search/IotDeviceCommandSearchIndex";

describe("IotDeviceCommand Stress & Concurrency Load Test", () => {
  const search = new IotDeviceCommandSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotDeviceCommandWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
