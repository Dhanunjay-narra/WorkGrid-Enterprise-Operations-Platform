export function generateHrEmployeesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_employees",
    entity: "HrEmployeesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
