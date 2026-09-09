export function generateHrPayrollEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
