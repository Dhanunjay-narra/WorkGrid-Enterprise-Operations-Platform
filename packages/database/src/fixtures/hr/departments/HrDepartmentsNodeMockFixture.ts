export function generateHrDepartmentsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
