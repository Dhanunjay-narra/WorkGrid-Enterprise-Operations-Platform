export function generateAiMemoryTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
