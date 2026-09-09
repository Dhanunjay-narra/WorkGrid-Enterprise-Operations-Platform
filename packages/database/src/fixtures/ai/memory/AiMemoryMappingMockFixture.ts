export function generateAiMemoryMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
