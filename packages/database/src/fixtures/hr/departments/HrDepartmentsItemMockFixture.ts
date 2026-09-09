export function generateHrDepartmentsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
