export function generateAuditReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
