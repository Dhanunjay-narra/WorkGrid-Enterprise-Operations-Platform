export function generateSupportSlaNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
