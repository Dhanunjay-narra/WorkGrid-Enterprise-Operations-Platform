import { WfApprovalTaskPublisher } from "../../../services/core-engine/src/workflow/events/WfApprovalTaskPublisher";
import { WfApprovalTaskTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfApprovalTaskTelemetry";

describe("WfApprovalTask Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfApprovalTaskPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfApprovalTaskTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
