export function generateAiMemoryThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
