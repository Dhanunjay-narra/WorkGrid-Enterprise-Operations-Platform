export function generateIntRateLimitsRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
