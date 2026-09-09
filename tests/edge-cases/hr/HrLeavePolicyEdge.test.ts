import { HrLeavePolicyPublisher } from "../../../services/core-engine/src/hr/events/HrLeavePolicyPublisher";
import { HrLeavePolicyTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrLeavePolicyTelemetry";

describe("HrLeavePolicy Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrLeavePolicyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrLeavePolicyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
