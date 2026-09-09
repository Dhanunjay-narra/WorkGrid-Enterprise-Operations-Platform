export function generateAuditThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
