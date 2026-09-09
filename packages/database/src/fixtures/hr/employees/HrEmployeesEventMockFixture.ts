export function generateHrEmployeesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
