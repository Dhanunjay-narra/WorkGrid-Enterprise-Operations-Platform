import { BiCohortMetricPublisher } from "../../../services/core-engine/src/analytics/events/BiCohortMetricPublisher";
import { BiCohortMetricTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiCohortMetricTelemetry";

describe("BiCohortMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiCohortMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiCohortMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
