export function generateHrPayrollConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
