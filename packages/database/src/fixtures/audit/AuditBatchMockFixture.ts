export function generateAuditBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
