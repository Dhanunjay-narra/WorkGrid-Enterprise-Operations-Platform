export function generateHrDepartmentsScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
