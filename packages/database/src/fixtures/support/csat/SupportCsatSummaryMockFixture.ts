export function generateSupportCsatSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
