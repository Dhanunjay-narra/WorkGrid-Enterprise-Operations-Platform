export function generateSupportCsatRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
