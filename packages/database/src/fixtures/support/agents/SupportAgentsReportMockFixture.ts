export function generateSupportAgentsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
