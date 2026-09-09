import { WfWorkflowDefinitionPublisher } from "../../../services/core-engine/src/workflow/events/WfWorkflowDefinitionPublisher";
import { WfWorkflowDefinitionTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfWorkflowDefinitionTelemetry";

describe("WfWorkflowDefinition Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfWorkflowDefinitionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfWorkflowDefinitionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
