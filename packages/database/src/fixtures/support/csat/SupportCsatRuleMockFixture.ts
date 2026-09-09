export function generateSupportCsatRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
