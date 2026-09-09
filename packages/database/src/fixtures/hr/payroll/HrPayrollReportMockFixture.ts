export function generateHrPayrollReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
