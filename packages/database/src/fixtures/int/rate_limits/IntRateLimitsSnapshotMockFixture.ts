export function generateIntRateLimitsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
