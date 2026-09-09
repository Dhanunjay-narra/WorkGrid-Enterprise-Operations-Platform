export function generateSupportCsatReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
