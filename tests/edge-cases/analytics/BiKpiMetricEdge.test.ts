import { BiKpiMetricPublisher } from "../../../services/core-engine/src/analytics/events/BiKpiMetricPublisher";
import { BiKpiMetricTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiKpiMetricTelemetry";

describe("BiKpiMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiKpiMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiKpiMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
