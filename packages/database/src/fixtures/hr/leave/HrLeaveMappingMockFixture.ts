export function generateHrLeaveMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
