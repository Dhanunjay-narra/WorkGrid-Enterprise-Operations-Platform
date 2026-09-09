export function generateIntRateLimitsItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
