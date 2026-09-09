export function generateIntRateLimitsTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
