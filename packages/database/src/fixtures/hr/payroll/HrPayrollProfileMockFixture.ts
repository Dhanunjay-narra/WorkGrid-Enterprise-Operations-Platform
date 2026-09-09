export function generateHrPayrollProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
