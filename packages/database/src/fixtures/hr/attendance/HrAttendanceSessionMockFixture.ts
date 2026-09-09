export function generateHrAttendanceSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
