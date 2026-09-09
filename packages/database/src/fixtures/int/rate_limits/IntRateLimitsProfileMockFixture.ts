export function generateIntRateLimitsProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
