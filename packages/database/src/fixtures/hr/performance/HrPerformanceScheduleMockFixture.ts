export function generateHrPerformanceScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
