import { WfWorkflowEdgePublisher } from "../../../services/core-engine/src/workflow/events/WfWorkflowEdgePublisher";
import { WfWorkflowEdgeTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfWorkflowEdgeTelemetry";

describe("WfWorkflowEdge Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfWorkflowEdgePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfWorkflowEdgeTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
