export function generateIntRateLimitsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
