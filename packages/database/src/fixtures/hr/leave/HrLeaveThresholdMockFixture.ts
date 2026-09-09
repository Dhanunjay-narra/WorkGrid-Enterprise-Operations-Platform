export function generateHrLeaveThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
