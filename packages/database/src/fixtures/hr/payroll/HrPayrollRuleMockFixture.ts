export function generateHrPayrollRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
