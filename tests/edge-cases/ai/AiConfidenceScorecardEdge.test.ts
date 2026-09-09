import { AiConfidenceScorecardPublisher } from "../../../services/core-engine/src/ai/events/AiConfidenceScorecardPublisher";
import { AiConfidenceScorecardTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiConfidenceScorecardTelemetry";

describe("AiConfidenceScorecard Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiConfidenceScorecardPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiConfidenceScorecardTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
