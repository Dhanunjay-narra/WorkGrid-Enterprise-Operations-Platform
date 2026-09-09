export function generateHrPayrollStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
