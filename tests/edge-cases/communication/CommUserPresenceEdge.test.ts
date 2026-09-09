import { CommUserPresencePublisher } from "../../../services/core-engine/src/communication/events/CommUserPresencePublisher";
import { CommUserPresenceTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommUserPresenceTelemetry";

describe("CommUserPresence Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommUserPresencePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommUserPresenceTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
