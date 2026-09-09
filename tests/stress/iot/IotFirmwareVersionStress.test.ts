import { IotFirmwareVersionWsHandler } from "../../../services/core-engine/src/iot/websockets/IotFirmwareVersionWsHandler";
import { IotFirmwareVersionSearchIndex } from "../../../services/core-engine/src/iot/search/IotFirmwareVersionSearchIndex";

describe("IotFirmwareVersion Stress & Concurrency Load Test", () => {
  const search = new IotFirmwareVersionSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotFirmwareVersionWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
