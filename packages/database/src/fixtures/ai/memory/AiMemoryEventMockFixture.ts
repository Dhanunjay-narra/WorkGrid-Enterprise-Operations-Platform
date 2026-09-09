export function generateAiMemoryEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
