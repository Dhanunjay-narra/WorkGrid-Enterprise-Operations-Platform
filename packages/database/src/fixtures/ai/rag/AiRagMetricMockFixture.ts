export function generateAiRagMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_rag",
    entity: "AiRagMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
