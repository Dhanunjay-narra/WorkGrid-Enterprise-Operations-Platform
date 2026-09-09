export function generateHrEmployeesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
