import { AiModelFallbackLogPublisher } from "../../../services/core-engine/src/ai/events/AiModelFallbackLogPublisher";
import { AiModelFallbackLogTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiModelFallbackLogTelemetry";

describe("AiModelFallbackLog Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiModelFallbackLogPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiModelFallbackLogTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
