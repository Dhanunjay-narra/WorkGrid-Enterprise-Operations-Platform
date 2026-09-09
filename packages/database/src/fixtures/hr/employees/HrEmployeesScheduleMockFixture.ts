export function generateHrEmployeesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
