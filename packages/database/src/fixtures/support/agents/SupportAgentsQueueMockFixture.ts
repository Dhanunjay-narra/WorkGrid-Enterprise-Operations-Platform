export function generateSupportAgentsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
