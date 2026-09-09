export function generateHrPayrollQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
