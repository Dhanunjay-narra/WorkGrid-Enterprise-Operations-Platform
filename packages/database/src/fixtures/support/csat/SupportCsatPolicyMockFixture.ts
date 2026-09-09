export function generateSupportCsatPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
