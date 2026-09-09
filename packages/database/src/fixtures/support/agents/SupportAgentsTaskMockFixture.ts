export function generateSupportAgentsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
