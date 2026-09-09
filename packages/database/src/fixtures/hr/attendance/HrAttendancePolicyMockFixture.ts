export function generateHrAttendancePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendancePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
