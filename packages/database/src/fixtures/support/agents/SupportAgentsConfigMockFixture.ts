export function generateSupportAgentsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
