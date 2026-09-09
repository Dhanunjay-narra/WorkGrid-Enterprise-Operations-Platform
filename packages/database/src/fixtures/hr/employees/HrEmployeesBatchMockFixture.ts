export function generateHrEmployeesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
