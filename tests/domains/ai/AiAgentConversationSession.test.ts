import { AiAgentConversationSessionService } from "../../../services/core-engine/src/ai/services/AiAgentConversationSessionService";
import { AiAgentConversationSessionValidator } from "../../../packages/types/src/domains/ai/AiAgentConversationSession";

describe("AiAgentConversationSession Service & Validation Suite", () => {
  const service = new AiAgentConversationSessionService();

  test("creates a valid AiAgentConversationSession record", () => {
    const created = service.create({
      tenantId: "tenant-100",
      code: "CODE-01",
      name: "Sample AiAgentConversationSession",
      status: "ACTIVE",
      metadata: { env: "production" }
    });
    expect(created.id).toBeDefined();
    expect(created.tenantId).toBe("tenant-100");
    expect(service.findById(created.id)).toBeDefined();
  });

  test("validates required fields", () => {
    const valid = AiAgentConversationSessionValidator.validate({});
    expect(valid.isValid).toBe(true);
  });
});
