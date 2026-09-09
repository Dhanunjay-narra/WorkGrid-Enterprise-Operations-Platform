export function generateIntRateLimitsNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
