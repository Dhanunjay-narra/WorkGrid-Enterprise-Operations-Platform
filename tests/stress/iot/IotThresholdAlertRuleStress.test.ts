import { IotThresholdAlertRuleWsHandler } from "../../../services/core-engine/src/iot/websockets/IotThresholdAlertRuleWsHandler";
import { IotThresholdAlertRuleSearchIndex } from "../../../services/core-engine/src/iot/search/IotThresholdAlertRuleSearchIndex";

describe("IotThresholdAlertRule Stress & Concurrency Load Test", () => {
  const search = new IotThresholdAlertRuleSearchIndex();

  test("handles 100 concurrent search queries", async () => {
    const promises = Array.from({ length: 100 }, () => search.search("tenant-perf", "test query"));
    const results = await Promise.all(promises);
    expect(results.length).toBe(100);
  });

  test("dispatches websocket broadcast without blocking", () => {
    expect(() => IotThresholdAlertRuleWsHandler.broadcast("tenant-perf", "STATUS_CHANGE", { active: true })).not.toThrow();
  });
});
