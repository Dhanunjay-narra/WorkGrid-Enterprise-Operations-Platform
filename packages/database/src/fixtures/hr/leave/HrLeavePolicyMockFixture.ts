export function generateHrLeavePolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeavePolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
