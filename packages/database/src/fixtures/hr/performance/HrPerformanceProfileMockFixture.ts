export function generateHrPerformanceProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
