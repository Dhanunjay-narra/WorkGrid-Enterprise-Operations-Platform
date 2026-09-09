export function generateHrDepartmentsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
