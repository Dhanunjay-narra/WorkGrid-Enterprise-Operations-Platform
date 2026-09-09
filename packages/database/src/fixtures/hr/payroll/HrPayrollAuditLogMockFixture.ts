export function generateHrPayrollAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
