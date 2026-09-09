export function generateHrPayrollItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
