export function generateHrPayrollTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
