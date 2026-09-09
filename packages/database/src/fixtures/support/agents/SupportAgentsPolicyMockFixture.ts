export function generateSupportAgentsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
