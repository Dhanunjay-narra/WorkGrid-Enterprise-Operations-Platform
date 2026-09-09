export function generateHrPayrollSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
