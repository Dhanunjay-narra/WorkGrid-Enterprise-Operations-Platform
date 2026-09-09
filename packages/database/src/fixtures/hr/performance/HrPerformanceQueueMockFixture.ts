export function generateHrPerformanceQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
