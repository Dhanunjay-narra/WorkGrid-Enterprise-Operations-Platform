export function generateSupportCsatNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
