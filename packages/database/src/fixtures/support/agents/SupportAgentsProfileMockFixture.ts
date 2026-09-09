export function generateSupportAgentsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
