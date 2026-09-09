export function generateHrAttendanceRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
