export function generateHrEmployeesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
