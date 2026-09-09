export function generateHrDepartmentsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
