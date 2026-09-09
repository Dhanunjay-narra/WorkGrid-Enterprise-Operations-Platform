export function generateHrAttendanceBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
