export function generateHrAttendanceTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
