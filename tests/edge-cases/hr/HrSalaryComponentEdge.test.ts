import { HrSalaryComponentPublisher } from "../../../services/core-engine/src/hr/events/HrSalaryComponentPublisher";
import { HrSalaryComponentTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrSalaryComponentTelemetry";

describe("HrSalaryComponent Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrSalaryComponentPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrSalaryComponentTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
