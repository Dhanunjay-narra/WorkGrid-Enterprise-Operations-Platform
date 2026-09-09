export function generateAiMemoryStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
