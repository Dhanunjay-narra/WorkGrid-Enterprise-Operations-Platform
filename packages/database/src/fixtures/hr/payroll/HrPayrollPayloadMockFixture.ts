export function generateHrPayrollPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
