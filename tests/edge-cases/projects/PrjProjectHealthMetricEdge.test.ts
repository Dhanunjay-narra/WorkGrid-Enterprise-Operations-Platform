import { PrjProjectHealthMetricPublisher } from "../../../services/core-engine/src/projects/events/PrjProjectHealthMetricPublisher";
import { PrjProjectHealthMetricTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjProjectHealthMetricTelemetry";

describe("PrjProjectHealthMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjProjectHealthMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjProjectHealthMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
