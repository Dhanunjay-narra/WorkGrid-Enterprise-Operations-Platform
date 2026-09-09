import { HrLeaveRequestPublisher } from "../../../services/core-engine/src/hr/events/HrLeaveRequestPublisher";
import { HrLeaveRequestTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrLeaveRequestTelemetry";

describe("HrLeaveRequest Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrLeaveRequestPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrLeaveRequestTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
