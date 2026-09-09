export function generateSupportAgentsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
