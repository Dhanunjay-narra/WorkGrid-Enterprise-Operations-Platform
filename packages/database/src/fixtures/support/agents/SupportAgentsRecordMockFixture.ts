export function generateSupportAgentsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
