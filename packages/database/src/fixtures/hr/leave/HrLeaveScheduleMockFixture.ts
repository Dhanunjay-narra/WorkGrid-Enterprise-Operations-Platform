export function generateHrLeaveScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
