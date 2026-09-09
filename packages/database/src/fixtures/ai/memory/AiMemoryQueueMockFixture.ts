export function generateAiMemoryQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
