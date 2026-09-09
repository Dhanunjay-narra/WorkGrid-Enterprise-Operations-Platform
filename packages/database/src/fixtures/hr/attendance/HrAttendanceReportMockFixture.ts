export function generateHrAttendanceReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
