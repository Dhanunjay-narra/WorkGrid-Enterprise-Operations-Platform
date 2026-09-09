import { IotTelemetryMetricWsHandler } from "../../../services/core-engine/src/iot/websockets/IotTelemetryMetricWsHandler";
import { IotTelemetryMetricSearchIndex } from "../../../services/core-engine/src/iot/search/IotTelemetryMetricSearchIndex";

describe("IotTelemetryMetric Stress & Concurrency Load Test", () => {
  const search = new IotTelemetryMetricSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotTelemetryMetricWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
