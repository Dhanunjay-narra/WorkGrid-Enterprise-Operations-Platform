export function generateIntRateLimitsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
