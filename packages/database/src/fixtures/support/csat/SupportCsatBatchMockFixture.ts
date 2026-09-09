export function generateSupportCsatBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
