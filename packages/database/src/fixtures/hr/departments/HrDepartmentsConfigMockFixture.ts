export function generateHrDepartmentsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
