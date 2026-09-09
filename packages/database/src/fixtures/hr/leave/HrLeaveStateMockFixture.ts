export function generateHrLeaveStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
