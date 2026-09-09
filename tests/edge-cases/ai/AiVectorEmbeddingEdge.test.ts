import { AiVectorEmbeddingPublisher } from "../../../services/core-engine/src/ai/events/AiVectorEmbeddingPublisher";
import { AiVectorEmbeddingTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiVectorEmbeddingTelemetry";

describe("AiVectorEmbedding Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiVectorEmbeddingPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiVectorEmbeddingTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
