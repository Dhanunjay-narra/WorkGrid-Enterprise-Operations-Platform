export function generateHrLeaveNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
