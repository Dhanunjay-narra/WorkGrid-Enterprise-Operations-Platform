export function generateHrEmployeesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
