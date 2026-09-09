export function generateSupportSlaSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "support_sla",
    entity: "SupportSlaSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
