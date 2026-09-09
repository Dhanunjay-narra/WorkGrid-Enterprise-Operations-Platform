export function generateAuditSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
