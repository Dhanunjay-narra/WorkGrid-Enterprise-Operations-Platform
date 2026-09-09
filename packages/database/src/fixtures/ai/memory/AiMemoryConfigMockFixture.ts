export function generateAiMemoryConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
