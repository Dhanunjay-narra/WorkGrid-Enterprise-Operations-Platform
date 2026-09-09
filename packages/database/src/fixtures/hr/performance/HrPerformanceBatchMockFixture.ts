export function generateHrPerformanceBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
