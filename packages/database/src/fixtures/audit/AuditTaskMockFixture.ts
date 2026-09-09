export function generateAuditTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
