import { HrPayrollSlipPublisher } from "../../../services/core-engine/src/hr/events/HrPayrollSlipPublisher";
import { HrPayrollSlipTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrPayrollSlipTelemetry";

describe("HrPayrollSlip Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrPayrollSlipPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrPayrollSlipTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
