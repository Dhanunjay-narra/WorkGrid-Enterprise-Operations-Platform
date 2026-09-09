export function generateHrPerformanceRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
