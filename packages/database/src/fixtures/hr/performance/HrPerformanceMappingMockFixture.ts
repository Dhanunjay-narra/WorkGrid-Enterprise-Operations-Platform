export function generateHrPerformanceMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
