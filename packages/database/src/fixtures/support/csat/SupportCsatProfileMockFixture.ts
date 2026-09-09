export function generateSupportCsatProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
