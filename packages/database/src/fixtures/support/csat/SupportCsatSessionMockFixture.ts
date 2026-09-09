export function generateSupportCsatSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
