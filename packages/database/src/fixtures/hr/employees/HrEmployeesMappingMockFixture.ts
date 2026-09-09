export function generateHrEmployeesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
