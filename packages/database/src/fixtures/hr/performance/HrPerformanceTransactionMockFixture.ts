export function generateHrPerformanceTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
