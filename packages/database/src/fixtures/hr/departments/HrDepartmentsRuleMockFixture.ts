export function generateHrDepartmentsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
