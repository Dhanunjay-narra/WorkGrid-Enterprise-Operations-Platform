export function generateSupportAgentsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
