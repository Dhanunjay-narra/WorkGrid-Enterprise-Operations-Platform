export function generateHrAttendanceSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
