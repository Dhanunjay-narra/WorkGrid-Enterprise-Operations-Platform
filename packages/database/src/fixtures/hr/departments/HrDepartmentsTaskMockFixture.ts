export function generateHrDepartmentsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
