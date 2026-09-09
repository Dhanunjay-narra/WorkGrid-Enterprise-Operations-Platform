export function generateSupportCsatTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
