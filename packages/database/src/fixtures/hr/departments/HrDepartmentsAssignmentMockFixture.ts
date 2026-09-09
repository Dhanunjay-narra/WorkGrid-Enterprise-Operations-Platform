export function generateHrDepartmentsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
