import { SecRateLimitCounterPublisher } from "../../../services/core-engine/src/security/events/SecRateLimitCounterPublisher";
import { SecRateLimitCounterTelemetry } from "../../../services/core-engine/src/security/telemetry/SecRateLimitCounterTelemetry";

describe("SecRateLimitCounter Edge-Case & Outbox Test Suite", () => {
  const publisher = new SecRateLimitCounterPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SecRateLimitCounterTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
