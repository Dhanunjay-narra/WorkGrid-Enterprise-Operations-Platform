export function generateSupportAgentsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
