export function generateIntRateLimitsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
