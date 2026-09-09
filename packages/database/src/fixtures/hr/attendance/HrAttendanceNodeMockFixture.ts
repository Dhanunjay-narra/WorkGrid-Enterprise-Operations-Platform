export function generateHrAttendanceNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
