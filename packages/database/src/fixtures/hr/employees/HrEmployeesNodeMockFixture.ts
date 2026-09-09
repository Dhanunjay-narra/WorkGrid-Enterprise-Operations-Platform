export function generateHrEmployeesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
