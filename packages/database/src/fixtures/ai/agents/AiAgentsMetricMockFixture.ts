export function generateAiAgentsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "ai_agents",
    entity: "AiAgentsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
