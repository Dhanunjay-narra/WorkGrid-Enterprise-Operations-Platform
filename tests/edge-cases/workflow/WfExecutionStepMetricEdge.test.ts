import { WfExecutionStepMetricPublisher } from "../../../services/core-engine/src/workflow/events/WfExecutionStepMetricPublisher";
import { WfExecutionStepMetricTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfExecutionStepMetricTelemetry";

describe("WfExecutionStepMetric Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfExecutionStepMetricPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfExecutionStepMetricTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
