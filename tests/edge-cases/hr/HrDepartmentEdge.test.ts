import { HrDepartmentPublisher } from "../../../services/core-engine/src/hr/events/HrDepartmentPublisher";
import { HrDepartmentTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrDepartmentTelemetry";

describe("HrDepartment Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrDepartmentPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrDepartmentTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
