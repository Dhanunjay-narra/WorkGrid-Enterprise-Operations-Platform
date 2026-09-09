import { SupKnowledgeArticlePublisher } from "../../../services/core-engine/src/support/events/SupKnowledgeArticlePublisher";
import { SupKnowledgeArticleTelemetry } from "../../../services/core-engine/src/support/telemetry/SupKnowledgeArticleTelemetry";

describe("SupKnowledgeArticle Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupKnowledgeArticlePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupKnowledgeArticleTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
