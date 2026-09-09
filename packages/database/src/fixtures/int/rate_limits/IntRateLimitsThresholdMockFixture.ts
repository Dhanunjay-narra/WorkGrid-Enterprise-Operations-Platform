export function generateIntRateLimitsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
