export function generateHrPayrollMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
