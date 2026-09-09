export function generateHrEmployeesReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
