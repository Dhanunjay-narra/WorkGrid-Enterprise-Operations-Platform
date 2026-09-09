export function generateSupportAgentsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
