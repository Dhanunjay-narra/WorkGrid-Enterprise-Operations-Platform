export function generateHrLeaveProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "hr_leave",
    entity: "HrLeaveProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
