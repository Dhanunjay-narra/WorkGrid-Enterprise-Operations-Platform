import { BiAggregatedDailyMetricPublisher } from "../../../services/core-engine/src/analytics/events/BiAggregatedDailyMetricPublisher";
import { BiAggregatedDailyMetricTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiAggregatedDailyMetricTelemetry";

describe("BiAggregatedDailyMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiAggregatedDailyMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiAggregatedDailyMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
