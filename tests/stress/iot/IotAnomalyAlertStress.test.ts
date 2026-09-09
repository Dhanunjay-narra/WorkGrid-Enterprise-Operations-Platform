import { IotAnomalyAlertWsHandler } from "../../../services/core-engine/src/iot/websockets/IotAnomalyAlertWsHandler";
import { IotAnomalyAlertSearchIndex } from "../../../services/core-engine/src/iot/search/IotAnomalyAlertSearchIndex";

describe("IotAnomalyAlert Stress & Concurrency Load Test", () => {
  const search = new IotAnomalyAlertSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotAnomalyAlertWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
