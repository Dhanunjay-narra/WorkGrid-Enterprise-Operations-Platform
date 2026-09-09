export function generateHrPerformanceAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformanceAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
