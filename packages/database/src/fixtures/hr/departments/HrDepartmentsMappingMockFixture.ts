export function generateHrDepartmentsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
