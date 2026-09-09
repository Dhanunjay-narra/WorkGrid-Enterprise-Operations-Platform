import { IotTelemetryPacketWsHandler } from "../../../services/core-engine/src/iot/websockets/IotTelemetryPacketWsHandler";
import { IotTelemetryPacketSearchIndex } from "../../../services/core-engine/src/iot/search/IotTelemetryPacketSearchIndex";

describe("IotTelemetryPacket Stress & Concurrency Load Test", () => {
  const search = new IotTelemetryPacketSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotTelemetryPacketWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
