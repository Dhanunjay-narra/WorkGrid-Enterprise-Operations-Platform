export function generateSupportCsatStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
