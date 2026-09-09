export function generateHrPayrollSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
