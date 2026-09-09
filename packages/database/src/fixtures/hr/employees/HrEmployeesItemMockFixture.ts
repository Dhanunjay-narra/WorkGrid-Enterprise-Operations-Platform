export function generateHrEmployeesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
