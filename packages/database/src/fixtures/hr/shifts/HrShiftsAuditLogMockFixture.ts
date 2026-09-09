export function generateHrShiftsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
