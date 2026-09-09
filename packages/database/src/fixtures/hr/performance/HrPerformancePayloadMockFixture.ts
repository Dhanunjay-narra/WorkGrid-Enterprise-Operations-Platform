export function generateHrPerformancePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_performance",
    entity: "HrPerformancePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
