export function generateHrAttendanceSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
