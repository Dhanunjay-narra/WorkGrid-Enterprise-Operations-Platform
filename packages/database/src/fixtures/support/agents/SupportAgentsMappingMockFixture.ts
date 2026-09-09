export function generateSupportAgentsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
