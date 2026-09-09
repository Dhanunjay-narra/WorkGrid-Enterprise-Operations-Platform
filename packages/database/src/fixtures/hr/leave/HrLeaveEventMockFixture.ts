export function generateHrLeaveEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
