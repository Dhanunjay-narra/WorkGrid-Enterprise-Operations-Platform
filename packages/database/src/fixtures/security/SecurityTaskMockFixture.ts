export function generateSecurityTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
