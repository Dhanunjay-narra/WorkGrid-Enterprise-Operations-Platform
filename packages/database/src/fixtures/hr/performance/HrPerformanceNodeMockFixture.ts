export function generateHrPerformanceNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
