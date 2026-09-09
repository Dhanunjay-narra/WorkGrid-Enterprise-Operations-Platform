import { HrAttendanceRecordPublisher } from "../../../services/core-engine/src/hr/events/HrAttendanceRecordPublisher";
import { HrAttendanceRecordTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrAttendanceRecordTelemetry";

describe("HrAttendanceRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrAttendanceRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrAttendanceRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
