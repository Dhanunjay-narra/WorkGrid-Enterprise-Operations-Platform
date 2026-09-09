export function generateSupportCsatSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_csat",
    entity: "SupportCsatSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
