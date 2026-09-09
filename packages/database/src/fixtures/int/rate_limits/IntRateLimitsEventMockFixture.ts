export function generateIntRateLimitsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
