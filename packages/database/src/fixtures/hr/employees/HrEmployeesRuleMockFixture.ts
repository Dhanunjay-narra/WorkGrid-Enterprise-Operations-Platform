export function generateHrEmployeesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
