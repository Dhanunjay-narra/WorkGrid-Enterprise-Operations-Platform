export function generateHrLeavePayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeavePayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
