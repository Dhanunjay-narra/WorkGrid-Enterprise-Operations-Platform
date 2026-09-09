export function generateHrDepartmentsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
