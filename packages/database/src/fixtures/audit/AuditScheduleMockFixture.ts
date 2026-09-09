export function generateAuditScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
