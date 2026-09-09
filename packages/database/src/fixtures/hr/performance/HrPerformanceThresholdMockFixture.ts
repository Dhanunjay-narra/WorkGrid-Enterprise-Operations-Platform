export function generateHrPerformanceThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
