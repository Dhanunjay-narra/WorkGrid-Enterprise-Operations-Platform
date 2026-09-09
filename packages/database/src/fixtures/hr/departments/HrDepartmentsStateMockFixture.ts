export function generateHrDepartmentsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
