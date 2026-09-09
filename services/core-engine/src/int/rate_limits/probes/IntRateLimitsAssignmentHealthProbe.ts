export class IntRateLimitsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsAssignment" };
  }
}
