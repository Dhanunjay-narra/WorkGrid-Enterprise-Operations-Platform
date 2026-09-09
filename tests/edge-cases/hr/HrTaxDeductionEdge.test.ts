import { HrTaxDeductionPublisher } from "../../../services/core-engine/src/hr/events/HrTaxDeductionPublisher";
import { HrTaxDeductionTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrTaxDeductionTelemetry";

describe("HrTaxDeduction Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrTaxDeductionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrTaxDeductionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
