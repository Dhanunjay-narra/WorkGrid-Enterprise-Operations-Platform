export function generateAiMemorySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemorySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
