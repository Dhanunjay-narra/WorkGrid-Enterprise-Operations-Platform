export function generateIntRateLimitsAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
