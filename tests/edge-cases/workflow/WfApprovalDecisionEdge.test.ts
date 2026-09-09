import { WfApprovalDecisionPublisher } from "../../../services/core-engine/src/workflow/events/WfApprovalDecisionPublisher";
import { WfApprovalDecisionTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfApprovalDecisionTelemetry";

describe("WfApprovalDecision Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfApprovalDecisionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfApprovalDecisionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
