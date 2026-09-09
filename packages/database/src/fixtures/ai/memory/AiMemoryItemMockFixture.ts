export function generateAiMemoryItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
