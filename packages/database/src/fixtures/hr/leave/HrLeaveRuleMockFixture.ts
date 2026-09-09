export function generateHrLeaveRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
