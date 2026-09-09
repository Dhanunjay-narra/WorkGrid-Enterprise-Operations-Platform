export function generateIntRateLimitsAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_rate_limits",
    entity: "IntRateLimitsAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
