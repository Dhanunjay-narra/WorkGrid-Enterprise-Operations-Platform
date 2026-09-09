export function generateSecurityEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
