export function generateSecurityScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecuritySchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
