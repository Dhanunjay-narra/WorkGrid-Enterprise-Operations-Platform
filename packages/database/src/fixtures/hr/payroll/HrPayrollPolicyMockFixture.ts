export function generateHrPayrollPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
