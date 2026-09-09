export function generateIntRateLimitsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
