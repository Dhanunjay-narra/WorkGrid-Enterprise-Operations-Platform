export function generateHrDepartmentsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
