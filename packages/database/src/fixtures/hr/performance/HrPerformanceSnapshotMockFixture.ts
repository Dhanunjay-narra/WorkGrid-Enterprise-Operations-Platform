export function generateHrPerformanceSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
