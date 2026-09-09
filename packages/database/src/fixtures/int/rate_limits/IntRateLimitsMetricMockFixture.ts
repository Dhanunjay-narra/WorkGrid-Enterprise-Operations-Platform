export function generateIntRateLimitsMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
