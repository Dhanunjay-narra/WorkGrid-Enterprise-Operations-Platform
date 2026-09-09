export function generateHrEmployeesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
