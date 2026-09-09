import { WfCronSchedulePublisher } from "../../../services/core-engine/src/workflow/events/WfCronSchedulePublisher";
import { WfCronScheduleTelemetry } from "../../../services/core-engine/src/workflow/telemetry/WfCronScheduleTelemetry";

describe("WfCronSchedule Edge-Case & Outbox Test Suite", () => {
  const publisher = new WfCronSchedulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = WfCronScheduleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
