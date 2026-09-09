export function generateHrEmployeesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
