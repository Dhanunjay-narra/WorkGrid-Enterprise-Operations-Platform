export function generateHrEmployeesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
