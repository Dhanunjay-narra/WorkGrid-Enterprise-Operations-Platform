export function generateHrPerformanceSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
