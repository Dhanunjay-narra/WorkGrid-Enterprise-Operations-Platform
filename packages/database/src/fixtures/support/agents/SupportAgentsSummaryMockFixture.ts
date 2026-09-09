export function generateSupportAgentsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
