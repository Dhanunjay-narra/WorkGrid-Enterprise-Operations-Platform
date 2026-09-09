export function generateIntRateLimitsPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
