export function generateHrEmployeesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
