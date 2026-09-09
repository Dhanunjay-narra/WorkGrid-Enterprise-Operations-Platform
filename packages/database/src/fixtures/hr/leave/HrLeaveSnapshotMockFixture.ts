export function generateHrLeaveSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
