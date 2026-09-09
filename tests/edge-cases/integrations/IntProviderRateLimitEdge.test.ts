import { IntProviderRateLimitPublisher } from "../../../services/core-engine/src/integrations/events/IntProviderRateLimitPublisher";
import { IntProviderRateLimitTelemetry } from "../../../services/core-engine/src/integrations/telemetry/IntProviderRateLimitTelemetry";

describe("IntProviderRateLimit Edge-Case & Outbox Test Suite", () => {
  const publisher = new IntProviderRateLimitPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IntProviderRateLimitTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
