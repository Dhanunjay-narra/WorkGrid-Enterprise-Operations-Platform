export function generateHrEmployeesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
