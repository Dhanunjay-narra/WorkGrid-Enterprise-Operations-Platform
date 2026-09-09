export function generateAiMemoryEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
