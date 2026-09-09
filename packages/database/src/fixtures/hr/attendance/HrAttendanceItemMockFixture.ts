export function generateHrAttendanceItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_attendance",
    entity: "HrAttendanceItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
