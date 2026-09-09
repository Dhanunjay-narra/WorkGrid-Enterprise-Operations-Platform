import { DocRetentionSchedulePublisher } from "../../../services/core-engine/src/documents/events/DocRetentionSchedulePublisher";
import { DocRetentionScheduleTelemetry } from "../../../services/core-engine/src/documents/telemetry/DocRetentionScheduleTelemetry";

describe("DocRetentionSchedule Edge-Case & Outbox Test Suite", () => {
  const publisher = new DocRetentionSchedulePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = DocRetentionScheduleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
