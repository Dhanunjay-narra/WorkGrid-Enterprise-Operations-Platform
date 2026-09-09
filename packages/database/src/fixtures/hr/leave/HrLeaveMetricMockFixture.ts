export function generateHrLeaveMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
