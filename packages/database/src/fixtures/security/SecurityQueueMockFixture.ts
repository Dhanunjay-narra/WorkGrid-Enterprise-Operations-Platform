export function generateSecurityQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
