export function generateHrLeaveBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
