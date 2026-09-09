export function generateSupportAgentsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
