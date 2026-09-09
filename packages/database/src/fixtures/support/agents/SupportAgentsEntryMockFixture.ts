export function generateSupportAgentsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
