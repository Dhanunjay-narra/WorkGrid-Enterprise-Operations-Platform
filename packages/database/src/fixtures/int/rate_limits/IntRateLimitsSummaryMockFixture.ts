export function generateIntRateLimitsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
