export function generateHrAttendanceMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
