export function generateHrAttendanceThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
