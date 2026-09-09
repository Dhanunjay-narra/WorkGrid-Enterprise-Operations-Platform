export function generateBiAnomaliesAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_anomalies",
    entity: "BiAnomaliesAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
