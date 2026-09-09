export function generateIntRateLimitsStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
