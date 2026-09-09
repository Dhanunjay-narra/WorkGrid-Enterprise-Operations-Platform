export function generateHrDepartmentsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_departments",
    entity: "HrDepartmentsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
