export function generateHrAttendanceStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
