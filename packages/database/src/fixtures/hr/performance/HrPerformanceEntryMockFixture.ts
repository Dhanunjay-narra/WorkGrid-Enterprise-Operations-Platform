export function generateHrPerformanceEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
