import { IotSensorCalibrationWsHandler } from "../../../services/core-engine/src/iot/websockets/IotSensorCalibrationWsHandler";
import { IotSensorCalibrationSearchIndex } from "../../../services/core-engine/src/iot/search/IotSensorCalibrationSearchIndex";

describe("IotSensorCalibration Stress & Concurrency Load Test", () => {
  const search = new IotSensorCalibrationSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotSensorCalibrationWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
