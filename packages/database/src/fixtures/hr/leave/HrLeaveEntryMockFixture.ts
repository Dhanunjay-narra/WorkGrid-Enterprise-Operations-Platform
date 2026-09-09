export function generateHrLeaveEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
