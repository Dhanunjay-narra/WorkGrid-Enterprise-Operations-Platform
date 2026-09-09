export function generateHrAttendancePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendancePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
