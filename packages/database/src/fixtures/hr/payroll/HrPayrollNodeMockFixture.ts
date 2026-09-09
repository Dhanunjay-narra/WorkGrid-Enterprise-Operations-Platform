export function generateHrPayrollNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
