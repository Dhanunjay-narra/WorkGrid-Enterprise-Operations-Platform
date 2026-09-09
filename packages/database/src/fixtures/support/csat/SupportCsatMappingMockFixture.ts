export function generateSupportCsatMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
