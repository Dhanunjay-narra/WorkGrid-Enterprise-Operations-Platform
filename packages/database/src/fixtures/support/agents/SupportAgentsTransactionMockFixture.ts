export function generateSupportAgentsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_agents",
    entity: "SupportAgentsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
