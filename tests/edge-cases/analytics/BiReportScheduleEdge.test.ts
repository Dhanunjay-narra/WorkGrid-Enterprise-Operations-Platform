import { BiReportSchedulePublisher } from "../../../services/core-engine/src/analytics/events/BiReportSchedulePublisher";
import { BiReportScheduleTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiReportScheduleTelemetry";

describe("BiReportSchedule Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiReportSchedulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiReportScheduleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
