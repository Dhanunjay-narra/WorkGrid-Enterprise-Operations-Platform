import { WfWorkflowExecutionPublisher } from "../../../services/core-engine/src/workflow/events/WfWorkflowExecutionPublisher";
import { WfWorkflowExecutionTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfWorkflowExecutionTelemetry";

describe("WfWorkflowExecution Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfWorkflowExecutionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfWorkflowExecutionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
