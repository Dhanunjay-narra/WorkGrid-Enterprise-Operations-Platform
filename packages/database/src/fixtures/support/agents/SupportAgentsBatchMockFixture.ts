export function generateSupportAgentsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
