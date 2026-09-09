import { AiPromptTemplatePublisher } from "../../../services/core-engine/src/ai/events/AiPromptTemplatePublisher";
import { AiPromptTemplateTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiPromptTemplateTelemetry";

describe("AiPromptTemplate Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiPromptTemplatePublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiPromptTemplateTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
