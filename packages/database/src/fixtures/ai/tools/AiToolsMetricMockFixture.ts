export function generateAiToolsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_tools",
    entity: "AiToolsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
