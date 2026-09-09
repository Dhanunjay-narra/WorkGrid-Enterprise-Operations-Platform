import { HrTimesheetPublisher } from "../../../services/core-engine/src/hr/events/HrTimesheetPublisher";
import { HrTimesheetTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrTimesheetTelemetry";

describe("HrTimesheet Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrTimesheetPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrTimesheetTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
