export function generateHrAttendanceScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
