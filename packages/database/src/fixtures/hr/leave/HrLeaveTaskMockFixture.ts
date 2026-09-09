export function generateHrLeaveTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
