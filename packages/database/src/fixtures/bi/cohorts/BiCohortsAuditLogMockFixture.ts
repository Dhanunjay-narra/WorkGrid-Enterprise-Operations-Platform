export function generateBiCohortsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "bi_cohorts",
    entity: "BiCohortsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
