export function generateAiMemoryPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
