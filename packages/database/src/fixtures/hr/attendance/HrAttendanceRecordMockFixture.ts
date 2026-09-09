export function generateHrAttendanceRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
