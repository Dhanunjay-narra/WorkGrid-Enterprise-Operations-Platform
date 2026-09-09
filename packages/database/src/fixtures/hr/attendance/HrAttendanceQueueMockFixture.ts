export function generateHrAttendanceQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
