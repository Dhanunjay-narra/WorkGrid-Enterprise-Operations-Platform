export function generateHrPayrollBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
