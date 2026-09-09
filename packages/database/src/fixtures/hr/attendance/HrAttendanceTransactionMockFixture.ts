export function generateHrAttendanceTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
