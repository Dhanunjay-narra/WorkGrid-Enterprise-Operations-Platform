export function generateHrAttendanceEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
