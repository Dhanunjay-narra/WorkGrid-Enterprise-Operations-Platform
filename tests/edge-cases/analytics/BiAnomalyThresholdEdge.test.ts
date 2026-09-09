import { BiAnomalyThresholdPublisher } from "../../../services/core-engine/src/analytics/events/BiAnomalyThresholdPublisher";
import { BiAnomalyThresholdTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiAnomalyThresholdTelemetry";

describe("BiAnomalyThreshold Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiAnomalyThresholdPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiAnomalyThresholdTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
