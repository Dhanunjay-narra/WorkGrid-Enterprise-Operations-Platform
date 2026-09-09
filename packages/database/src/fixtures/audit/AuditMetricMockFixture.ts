export function generateAuditMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "audit",
    entity: "AuditMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
