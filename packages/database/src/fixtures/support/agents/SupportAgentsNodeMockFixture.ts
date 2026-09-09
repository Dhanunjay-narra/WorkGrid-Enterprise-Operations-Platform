export function generateSupportAgentsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
