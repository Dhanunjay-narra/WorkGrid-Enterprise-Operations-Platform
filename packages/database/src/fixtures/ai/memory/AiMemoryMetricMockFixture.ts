export function generateAiMemoryMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_memory",
    entity: "AiMemoryMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
