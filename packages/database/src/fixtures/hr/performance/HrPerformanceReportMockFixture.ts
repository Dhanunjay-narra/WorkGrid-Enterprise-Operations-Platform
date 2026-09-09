export function generateHrPerformanceReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
