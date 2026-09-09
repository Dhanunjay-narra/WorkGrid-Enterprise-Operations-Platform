export function generateHrPayrollScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
