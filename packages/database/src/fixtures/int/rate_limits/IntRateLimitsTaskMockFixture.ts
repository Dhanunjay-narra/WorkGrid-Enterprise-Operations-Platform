export function generateIntRateLimitsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
