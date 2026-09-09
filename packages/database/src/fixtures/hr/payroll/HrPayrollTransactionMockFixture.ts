export function generateHrPayrollTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
