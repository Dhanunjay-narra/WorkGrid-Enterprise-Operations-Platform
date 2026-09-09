export function generateIntRateLimitsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
