export function generateHrPerformanceSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
