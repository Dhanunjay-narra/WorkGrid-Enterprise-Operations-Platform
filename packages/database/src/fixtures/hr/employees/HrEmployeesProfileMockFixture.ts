export function generateHrEmployeesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
