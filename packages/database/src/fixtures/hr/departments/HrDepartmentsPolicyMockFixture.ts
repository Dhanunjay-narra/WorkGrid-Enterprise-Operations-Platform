export function generateHrDepartmentsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
