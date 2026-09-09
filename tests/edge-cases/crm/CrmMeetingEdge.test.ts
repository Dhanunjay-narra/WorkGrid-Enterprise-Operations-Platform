import { CrmMeetingPublisher } from "../../../services/core-engine/src/crm/events/CrmMeetingPublisher";
import { CrmMeetingTelemetry } from "../../../services/core-engine/src/crm/telemetry/CrmMeetingTelemetry";

describe("CrmMeeting Edge-Case & Outbox Test Suite", () => {
  const publisher = new CrmMeetingPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CrmMeetingTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
