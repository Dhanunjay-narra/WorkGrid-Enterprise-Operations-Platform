export function generateHrPerformanceConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
