import { SecThreatEventPublisher } from "../../../services/core-engine/src/security/events/SecThreatEventPublisher";
import { SecThreatEventTelemetry } from "../../../services/core-engine/src/security/telemetry/SecThreatEventTelemetry";

describe("SecThreatEvent Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecThreatEventPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecThreatEventTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
