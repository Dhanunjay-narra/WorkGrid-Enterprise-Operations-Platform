export function generateHrEmployeesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
