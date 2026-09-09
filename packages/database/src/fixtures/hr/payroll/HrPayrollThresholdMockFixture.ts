export function generateHrPayrollThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
