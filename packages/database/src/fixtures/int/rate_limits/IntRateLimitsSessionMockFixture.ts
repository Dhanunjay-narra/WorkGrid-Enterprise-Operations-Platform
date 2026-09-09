export function generateIntRateLimitsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
