export function generateAiMemoryNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
