export function generateHrEmployeesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
