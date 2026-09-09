export function generateHrEmployeesConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
