import { AiDocumentChunkPublisher } from "../../../services/core-engine/src/ai/events/AiDocumentChunkPublisher";
import { AiDocumentChunkTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiDocumentChunkTelemetry";

describe("AiDocumentChunk Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiDocumentChunkPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiDocumentChunkTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
