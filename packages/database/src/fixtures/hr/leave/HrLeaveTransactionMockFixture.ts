export function generateHrLeaveTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
