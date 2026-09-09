export function generateHrLeaveAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
