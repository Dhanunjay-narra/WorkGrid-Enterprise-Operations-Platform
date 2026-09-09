export function generateHrAttendanceAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
