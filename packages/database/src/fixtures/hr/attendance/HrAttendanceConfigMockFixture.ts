export function generateHrAttendanceConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
