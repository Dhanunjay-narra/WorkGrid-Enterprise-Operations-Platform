export function generateHrShiftsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_shifts",
    entity: "HrShiftsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
