export function generateHrPayrollEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
