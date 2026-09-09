export function generateHrAttendanceProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
