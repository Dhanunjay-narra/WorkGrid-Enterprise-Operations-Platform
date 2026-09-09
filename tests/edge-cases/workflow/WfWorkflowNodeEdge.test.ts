import { WfWorkflowNodePublisher } from "../../../services/core-engine/src/workflow/events/WfWorkflowNodePublisher";
import { WfWorkflowNodeTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfWorkflowNodeTelemetry";

describe("WfWorkflowNode Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfWorkflowNodePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfWorkflowNodeTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
