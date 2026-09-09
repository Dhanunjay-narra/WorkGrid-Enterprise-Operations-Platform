export function generateHrDepartmentsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
