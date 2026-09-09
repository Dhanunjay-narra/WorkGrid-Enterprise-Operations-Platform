export function generateHrDepartmentsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
