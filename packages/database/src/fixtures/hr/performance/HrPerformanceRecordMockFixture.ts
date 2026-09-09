export function generateHrPerformanceRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
