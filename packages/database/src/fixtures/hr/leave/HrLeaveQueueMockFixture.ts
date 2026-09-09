export function generateHrLeaveQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
