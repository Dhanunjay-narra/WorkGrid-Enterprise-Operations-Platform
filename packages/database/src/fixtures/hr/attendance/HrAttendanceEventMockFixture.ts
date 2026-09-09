export function generateHrAttendanceEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
