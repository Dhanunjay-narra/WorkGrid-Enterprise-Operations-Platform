export function generateHrPayrollSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
