export function generateSupportAgentsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
