export function generateHrDepartmentsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
