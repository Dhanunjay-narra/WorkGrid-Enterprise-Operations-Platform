export function generateSupportAgentsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
