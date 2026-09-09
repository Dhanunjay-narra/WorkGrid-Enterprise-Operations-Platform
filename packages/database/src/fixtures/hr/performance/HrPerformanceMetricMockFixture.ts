export function generateHrPerformanceMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
