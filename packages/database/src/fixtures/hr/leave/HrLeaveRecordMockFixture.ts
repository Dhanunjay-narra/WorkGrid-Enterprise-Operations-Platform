export function generateHrLeaveRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
