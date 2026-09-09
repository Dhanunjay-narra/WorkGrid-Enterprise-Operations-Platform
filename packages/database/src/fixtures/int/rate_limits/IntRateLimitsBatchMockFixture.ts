export function generateIntRateLimitsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
