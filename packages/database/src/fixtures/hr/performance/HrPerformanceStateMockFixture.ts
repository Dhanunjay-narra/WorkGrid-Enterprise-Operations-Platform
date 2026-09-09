export function generateHrPerformanceStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
