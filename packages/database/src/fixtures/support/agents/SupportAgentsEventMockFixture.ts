export function generateSupportAgentsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
