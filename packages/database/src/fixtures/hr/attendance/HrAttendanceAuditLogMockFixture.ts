export function generateHrAttendanceAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
