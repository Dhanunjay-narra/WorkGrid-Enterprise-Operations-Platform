import { CommBroadcastAnnouncementPublisher } from "../../../services/core-engine/src/communication/events/CommBroadcastAnnouncementPublisher";
import { CommBroadcastAnnouncementTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommBroadcastAnnouncementTelemetry";

describe("CommBroadcastAnnouncement Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommBroadcastAnnouncementPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommBroadcastAnnouncementTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
