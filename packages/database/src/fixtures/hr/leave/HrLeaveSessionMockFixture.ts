export function generateHrLeaveSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
