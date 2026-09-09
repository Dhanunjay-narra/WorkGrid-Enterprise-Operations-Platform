export function generateIntRateLimitsConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
