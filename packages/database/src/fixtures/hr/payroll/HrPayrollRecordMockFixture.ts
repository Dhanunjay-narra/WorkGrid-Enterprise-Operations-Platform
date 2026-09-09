export function generateHrPayrollRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
