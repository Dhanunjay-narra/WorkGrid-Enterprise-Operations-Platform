export function generateHrPerformanceEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
