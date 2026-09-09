export function generateHrPerformanceTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
