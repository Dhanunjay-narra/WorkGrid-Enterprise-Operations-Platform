export function generateHrPerformancePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformancePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
