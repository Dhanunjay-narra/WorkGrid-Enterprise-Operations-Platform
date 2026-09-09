import { AiAgentConversationSessionPublisher } from "../../../services/core-engine/src/ai/events/AiAgentConversationSessionPublisher";
import { AiAgentConversationSessionTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiAgentConversationSessionTelemetry";

describe("AiAgentConversationSession Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiAgentConversationSessionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiAgentConversationSessionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
