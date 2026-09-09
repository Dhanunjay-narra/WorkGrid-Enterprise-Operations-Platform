export function generateHrPayrollAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_payroll",
    entity: "HrPayrollAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
