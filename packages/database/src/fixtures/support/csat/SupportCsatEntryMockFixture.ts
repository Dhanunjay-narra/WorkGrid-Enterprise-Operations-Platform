export function generateSupportCsatEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
