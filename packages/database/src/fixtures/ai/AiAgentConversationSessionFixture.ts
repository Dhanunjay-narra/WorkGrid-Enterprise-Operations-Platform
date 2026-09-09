export function createAiAgentConversationSessionFixture(override: Record<string, any> = {}): Record<string, any> {
  return {
    id: "ai_fix_" + Math.random().toString(36).substring(2, 9),
    tenantId: "tenant-fixture",
    code: "FIX-AI",
    name: "AiAgentConversationSession Fixture Record",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
    ...override
  };
}
