export function generateHrAttendanceMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
