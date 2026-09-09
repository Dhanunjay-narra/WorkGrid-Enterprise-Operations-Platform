export function generateHrLeaveItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
