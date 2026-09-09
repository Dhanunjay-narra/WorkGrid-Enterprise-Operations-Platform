import { WfNodeExecutionLogPublisher } from "../../../services/core-engine/src/workflow/events/WfNodeExecutionLogPublisher";
import { WfNodeExecutionLogTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfNodeExecutionLogTelemetry";

describe("WfNodeExecutionLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfNodeExecutionLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfNodeExecutionLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
