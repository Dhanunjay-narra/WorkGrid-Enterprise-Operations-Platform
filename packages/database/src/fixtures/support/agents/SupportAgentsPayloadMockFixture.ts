export function generateSupportAgentsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
