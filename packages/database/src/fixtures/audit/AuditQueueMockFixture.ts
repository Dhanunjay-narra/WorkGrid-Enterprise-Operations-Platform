export function generateAuditQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
