export function generateSupportCsatConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
