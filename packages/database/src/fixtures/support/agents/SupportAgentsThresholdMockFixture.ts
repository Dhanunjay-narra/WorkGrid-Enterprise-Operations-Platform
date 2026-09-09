export function generateSupportAgentsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
