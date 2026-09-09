export function generateHrDepartmentsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
