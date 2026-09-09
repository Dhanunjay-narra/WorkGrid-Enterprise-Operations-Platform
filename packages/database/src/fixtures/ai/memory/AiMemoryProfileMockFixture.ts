export function generateAiMemoryProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
