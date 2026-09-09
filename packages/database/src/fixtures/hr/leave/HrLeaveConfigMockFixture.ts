export function generateHrLeaveConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
