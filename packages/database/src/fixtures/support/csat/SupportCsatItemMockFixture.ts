export function generateSupportCsatItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
