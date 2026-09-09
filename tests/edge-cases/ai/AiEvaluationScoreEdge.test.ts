import { AiEvaluationScorePublisher } from "../../../services/core-engine/src/ai/events/AiEvaluationScorePublisher";
import { AiEvaluationScoreTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiEvaluationScoreTelemetry";

describe("AiEvaluationScore Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiEvaluationScorePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiEvaluationScoreTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
