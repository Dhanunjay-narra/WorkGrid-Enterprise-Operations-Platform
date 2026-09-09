export function generateIntRateLimitsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
