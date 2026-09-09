export function generateHrEmployeesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
