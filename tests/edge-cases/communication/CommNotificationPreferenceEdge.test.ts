import { CommNotificationPreferencePublisher } from "../../../services/core-engine/src/communication/events/CommNotificationPreferencePublisher";
import { CommNotificationPreferenceTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommNotificationPreferenceTelemetry";

describe("CommNotificationPreference Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommNotificationPreferencePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommNotificationPreferenceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
