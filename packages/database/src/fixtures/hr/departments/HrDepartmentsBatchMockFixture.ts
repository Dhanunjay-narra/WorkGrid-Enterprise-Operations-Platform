export function generateHrDepartmentsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
